import { DocumentData } from "firebase/firestore";
import { getSmykkerDB } from "../services/firestoreService";

class smykkeController{

    static async getSmykker() {
        return await getSmykkerDB();
    }
}

export default smykkeController;