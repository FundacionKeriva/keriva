import firebase from './firebase';

export const db = firebase.database();

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

export const addService = (name, price, description) => {
  return db.ref('services').push({ name, price, description });
};

export const updateService = (id, name, price, description) => {
  return db.ref('services/' + id).set({ name, price, description });
};

export const deleteService = (id) => {
  return db.ref('services/' + id).remove();
};

