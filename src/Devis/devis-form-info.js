import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfos } from "../redux/devisSlice";

export default function DevisFormInfo(props) {
  const devisState = useSelector((state) => state.devis);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    devisNumber: "DEV-2022-",
    creationDate: "",
    expirationDate: "",
    titre:""
  });
  function handleInputChange($event) {
    const target = $event.target;
    const value = target.value;
    const name = target.name;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit($event) {
    dispatch(setInfos(formState));
    $event.preventDefault();
  }
  return (
    <div className="myContainer">
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-3">
          <label>Numéro du devis</label>
          <input
            type="text"
            className="form-control"
            name="devisNumber"
            value={formState.devisNumber}
            onChange={(e) => handleInputChange(e)}
            placeholder="Numéro de devis"
          />
        </div>

        <div className="col-3">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            name="titre"
            value={formState.titre}
            onChange={(e) => handleInputChange(e)}
            placeholder="Titre"
          />
        </div>

        <div className="form-floating mb-3 col-3">
          <input
            type="date"
            className="form-control"
            name="creationDate"
            value={formState.creationDate}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="floatingInput">Date de création</label>
        </div>

        <div className="form-floating mb-3 col-3">
          <input
            type="date"
            className="form-control"
            name="expirationDate"
            value={formState.expirationDate}
            onChange={(e) => handleInputChange(e)}
            placeholder="Date limite de validité"
          />
          <label htmlFor="floatingInput">Date limite de validité</label>
        </div>
        </div>
        <button className="btn btn-primary col" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}
