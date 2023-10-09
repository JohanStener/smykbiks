import Image from "./image"

// Mapper alle billeder til img-tags med billedet i
const Catalog = () => {
    return(
      <div className="images">
      {Images.map((element: any) => (
        <div className="imageContainerOuter">
          <div className="imageContainerInner">
            <Image url={element} beskr="Jewelry" CN="smykke" />
          </div>
        </div>
      ))}
    </div>
    );
};

export default Catalog;

// Henter billeder fra ../Smykker
function importAll(r : any) {
  return r.keys().map(r);
}

// Overvej at lave denne route dynamisk
const Images = importAll(require.context("/Users/johanstener/smykbiks/Smykker", false, /\.(JPG)$/));