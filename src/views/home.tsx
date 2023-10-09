import smykkeController from "../controllers/smykkeController";
import Catalog from "./catalog";
import Image from "./image";
import Priser from "./priser";

const smykker = await smykkeController.getSmykker();


const Home = () => {
  return (
    <div className="Home">
      <h4>Lavet i Aarhus</h4>
      <Image url={smykker[0].imageURL} beskr="Jewelry" CN="smykke" />
      <Priser />
      <Catalog />
    </div>
  );
};
export default Home;
