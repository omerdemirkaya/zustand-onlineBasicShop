import Items from "../components/Items";
import Navbar from "../components/Navbar";
import "../style.scss";

const Home = () => {
  return (
    <div className="main-container">
       <Navbar />
       <Items />
    </div>
  )
}

export default Home
