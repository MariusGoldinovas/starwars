import "./Home.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className="container h-75 d-flex justify-content-center align-items-center">
      <img className="h-100" src={logo} alt="" />
    </div>
  );
};

export default Home;
