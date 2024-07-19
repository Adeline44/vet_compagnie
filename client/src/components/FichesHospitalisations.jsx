import "./styles_components/FichesHospitalisations.css";

function card() {
  return (
    <div className="container-form-vet">
      <form className="form-animal">
        <label>
          Nom de l'animal
          <input type="text" name="username" />
        </label>
        <label>
          Espèce
          <input type="text" name="espece" />
        </label>
        <label>
          Race
          <input type="text" name="race" />
        </label>
        <label>
          Sexe
          <input type="text" name="sexe" />
        </label>
        <label>
          Age
          <input type="text" name="age" />
        </label>
        <label>
          Stérilisation
          <input type="text" name="Stérilisation" />
        </label>
        <label>
          Vaccination
          <input type="text" name="Vaccination" />
        </label>
        <label>
          Motif d'hospitalisation
          <input type="text" name="Motif d'hospitalisation" />
        </label>
        <label>
          Date d'entrée
          <input type="text" name="Date d'entrée" />
        </label>
        <label>
          Date de sortie
          <input type="text" name="Date de sortie" />
        </label>
      </form>
    </div>
  );
}

export default card;
