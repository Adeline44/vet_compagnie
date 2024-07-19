import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./accueil.css";

function Accueil() {
  return (
    <>
      <NavBar />
      <div className="container-vet">
        <div className="title-vet">
          <h1> BIENVENUE SUR NOTRE SITE VET'COMPAGNIE</h1>
        </div>
        <img
          src="http://localhost:3310/images/chiensetchats.jpg"
          alt="chiens et chats"
        />
      </div>
      <Footer />
    </>
  );
}

export default Accueil;
