class Smykke{
    id: number;
    navn: string;
    pris: number;
    imageURL: string;
    smykkeType: SmykkeType;

    constructor(id: number, navn: string, pris:number, imageURL:string, smykkeType:SmykkeType){
        this.id=id;
        this.navn=navn;
        this.pris=pris;
        this.imageURL=imageURL;
        this.smykkeType = smykkeType;
    }

}

enum SmykkeType {
    Armbånd = "armbånd",
    Halskæde = "halskæde",
    Ørering = "ørering"
  }

export default Smykke;