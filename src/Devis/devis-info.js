import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DevisInfo(props) {
  const clientReduxState = useSelector((state) => state.devis.client);
  const [clientState, setClientState] = useState({
    name: "",
    address: "",
    cp: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    console.log(clientState);
    setClientState(clientReduxState, ()=>console.log(clientState));
  }, [clientReduxState]);
  return (
    <div
      className="myContainer row justify-content-between"
      style={{ backgroundColor: "#4c4ca5", color: "white" }}
    >
      <div className="col-4">
        <h4>Numéro de devis</h4>
        <h4>DEV-2022-010</h4>
        <p>Date de création : 02/04/2022</p>
        <p>Date limite de validité: 02/05/2022</p>
      </div>
      <div className="col-4">
        <h4>Pour :</h4>
        <p className="mb-0">{clientState?.name}</p>
        <p className="mb-0">{clientState?.address}</p>
        <p className="mb-0">
          {clientState?.cp} {clientState?.city}
        </p>
      </div>
    </div>
  );
}
