import smykkeController from "../controllers/smykkeController";
import Image from "./image";
import Priser from "./priser";

const smykker = await smykkeController.getSmykker();


const Home = () => {
  return (
    <div className="Home">
      <h4>Lavet i Aarhus</h4>
      <Image url={smykker[0].imageURL} beskr="Jewelry" CN="smykke" />
      <Priser />
    </div>
  );
};
export default Home;
