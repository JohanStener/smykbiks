/* eslint-disable */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
import { Smykke, SmykkeType } from "../../src/models/smykke"

exports.processImage = functions.storage.bucket("smykkebiksen.appspot.com").object().onFinalize(async (object: any) => {
  const bucketName = object.bucket; // Navnet på lagringsbucket'en
  const filePath = object.name; // Stien til det lagrede objekt

  // Konstruer URL'en baseret på bucket-navnet og objektstien
  const fileURL = `https://storage.googleapis.com/${bucketName}/${filePath}`;

  let smykke = new Smykke(1, "Johan", 100, "Armbond.jpg", SmykkeType.Armbånd);

  await db.collection("smykker").add({
    id: smykke.id,
    navn: smykke.navn,
    pris: smykke.pris,
    type: smykke.smykkeType,
    imageURL: fileURL, // Brug den konstruerede URL som billedets URL
  });
});