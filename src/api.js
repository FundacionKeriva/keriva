import {dbRealmtime,storageFiles} from './firebase';

export const db = dbRealmtime;
export const storage = storageFiles; // agrega esto para acceder a Firebase Storage

export const getServices = () => {
  return db.ref('services').once('value').then((snapshot) => {
    const servicesData = snapshot.val();
    if (servicesData) {
      const servicesArray = Object.entries(servicesData).map(([key, value]) => {
        return { id: key, ...value };
      });
      return servicesArray;
    }
    return [];
  });
};

export const addService = async(name, price, description,imageFile) => {
  //load image to firebase
  const imageUrl= await uploadImage(imageFile);

  //add service to realtime database
  return db.ref('services').push({ name, price, description,imageUrl });
};

export const updateService = (id, name, price, description) => {
  return db.ref('services/' + id).set({ name, price, description });
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
