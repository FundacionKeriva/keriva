import { dbRealmtime, storageFiles } from './firebase';

export const db = dbRealmtime;
export const storage = storageFiles; // agrega esto para acceder a Firebase Storage

export const getServices = async () => {
  const snapshot = await db.ref('services').once('value');
  const servicesData = snapshot.val();
  if (servicesData) {
    const servicesArray = Object.entries(servicesData).map(([key, value]) => {
      return { id: key, ...value };
    });
    return servicesArray;
  }
  return [];
};

export const getAvailableServices = async () => {
  const snapshot = await db.ref('services').once('value');
  const servicesData = snapshot.val();
  if (servicesData) {
    const servicesArray = Object.entries(servicesData)
      .map(([key, value]) => {
        return { id: key, ...value };
      })
      .filter((service) => service.available === true); // Filtrar servicios disponibles
    return servicesArray;
  }
  return [];
};

//service: name string, price string, description string, imageUrl string, available boolean
export const addService = async (name, price, description, imageFile, available) => {
  //load image to firebase
  const imageUrl = await uploadImage(imageFile);

  //add service to realtime database
  return db.ref('services').push({ name, price, description, imageUrl, available });
};

export const updateService = (id, name, price, description) => {
  const updatedData = {};

  if (name) {
    updatedData.name = name;
  }
  if (price) {
    updatedData.price = price;
  }
  if (description) {
    updatedData.description = description;
  }
  return db.ref('services/' + id).update(updatedData);
};

export const updateServiceAvailability = (id, available) => {
  return db.ref('services/' + id).update({ available });
};

export const updateServiceImage = async (id, imageFile) => {
  //load image to firebase
  const imageUrl = await uploadImage(imageFile);

  return db.ref('services/' + id).update({ imageUrl });
};

export const deleteService = (id) => {
  return db.ref('services/' + id).remove();
};


//storage
export const uploadImage = async (file) => {
  // crea una referencia a la ubicación del archivo en Firebase Storage
  const storageRef = storage.ref().child(`images/${file.name}`);

  // carga el archivo en Firebase Storage
  await storageRef.put(file);

  // devuelve la URL del archivo almacenado en Firebase Storage
  const url = await storageRef.getDownloadURL();
  return url;
};
