import { DocumentData } from "firebase/firestore";
import Smykke from "../models/smykke";
import { getSmykkerDB } from "../services/firestoreService";

class smykkeController{

    static async getSmykker() {
        //let data : DocumentData[] =  await getSmykkerDB();

        return await getSmykkerDB();
    }
}

export default smykkeController;