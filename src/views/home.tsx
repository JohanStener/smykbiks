import Image from "./image";
import Priser from "./priser";

const billede =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/440px-Ash_Tree_-_geograph.org.uk_-_590710.jpg";

const Home = () => {
  return (
    <div className="Home">
      <h4>Lavet i Aarhus</h4>
      <Image url={billede} beskr="Jewelry" CN="smykke" />
      <Priser />
    </div>
  );
};
export default Home;
