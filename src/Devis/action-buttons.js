import { useNavigate } from "react-router";

export default function ActionButtons(props) {
  const navigation = useNavigate();

  return (
    <div className="myContainer row justify-content-around">
      {/* <button onClick={() => navigation("/devis")} className="btn btn-primary col-4">
        Imprimer le Devis
      </button> */}
      <button
        onClick={() => navigation("/devis-pdf")}
        className="btn btn-primary col-4"
      >
        Télécharger le devis
      </button>
    </div>
  );
}
