import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc
} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import Smykke from "../models/smykke.js";

// init firebase app
const app_firebase = initializeApp(firebaseConfig);
export const storage = getStorage(app_firebase);
const storageRef = ref(storage);

// init services
const db = getFirestore();


let smykkerCollection = collection(db, "smykker");

async function getSmykkerDB() {
  let smykkerQueryDocs = await getDocs(smykkerCollection);
  let smykker = smykkerQueryDocs.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return smykker;
}

async function addSmykkeDB(smykke : Smykke){
  let smykkeDoc = {
    'id': smykke.id,
    'navn': smykke.navn,
    'pris': smykke.pris,
    'type': smykke.smykkeType,
    "imageURL" : smykke.imageURL
}
const docRef = await addDoc(smykkerCollection, smykkeDoc)
return docRef
}


export { getSmykkerDB, addSmykkeDB };
