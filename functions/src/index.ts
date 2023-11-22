const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
import { Smykke, SmykkeType } from "../../src/models/smykke";

exports.trigger = functions.storage
  .bucket("smykkebiksen.appspot.com")
  .object()
  .onFinalize(async (object: any) => {
    
    let url = await getDownloadURL(ref(storage, object.name));
    let smykke = new Smykke(1, "Totot", 100, "Armbond.jpg", SmykkeType.Armbånd);
     
    await db.collection("smykker").add({
      id: smykke.id,
      navn: smykke.navn,
      pris: smykke.pris,
      type: smykke.smykkeType,
      imageURL: url
    }); 
  });