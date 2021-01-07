import firebase from './firebaseConfig';

// COLECCION EN FIRESTORE - ADD ORDER

const collectionSocios = () => firebase.firestore().collection('Socios');
const collectionVigilantes = () => firebase.firestore().collection('Vigilantes');
const collectionInvitados = () => firebase.firestore().collection('Invitado');

// AGREGAR DOCS A LA COLECCION

export const addSocios = (material) => new Promise((res) => {
  collectionSocios().add(material)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

// LEER LOS DOCS DE LA COLECCION
export const getSocios = () => new Promise((resolve) => {
  collectionSocios().onSnapshot((query) => {
    const docs = [];
    query.forEach((material) => {
      docs.push({ ...material.data(), id: material.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

// AGREGAR DOCS A LA COLECCION

export const addVigilantes = (submaterial) => new Promise((res) => {
  collectionVigilantes().add(submaterial)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

// LEER LOS DOCS DE LA COLECCION
export const getVigilantes = () => new Promise((resolve) => {
  collectionVigilantes().onSnapshot((query) => {
    const docs = [];
    query.forEach((submaterial) => {
      docs.push({ ...submaterial.data(), id: submaterial.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

export const addInvitados = (fiscalYear) => new Promise((res) => {
  collectionInvitados().add(fiscalYear)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

// LEER LOS DOCS DE LA COLECCION
export const getInvitados = () => new Promise((resolve) => {
  collectionInvitados().onSnapshot((query) => {
    const docs = [];
    query.forEach((fiscalYear) => {
      docs.push({ ...fiscalYear.data(), id: fiscalYear.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

export default {
  addSocios,
  getSocios,
  addVigilantes,
  getVigilantes,
  addInvitados,
  getInvitados,
};
