import NavBar from "../components/NavBar";
import FichesHospitalisations from "../components/FichesHospitalisations";
import Footer from "../components/Footer";

function animauxHospitalises() {
  return (
    <>
      <NavBar />
      <div className="title-vet">
        <h1> ANIMAUX HOSPITALISES </h1>
      </div>
      <FichesHospitalisations />
      <Footer />
    </>
  );
}

export default animauxHospitalises;
