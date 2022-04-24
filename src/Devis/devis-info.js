import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DevisInfo(props) {
  const clientReduxState = useSelector((state) => state.devis.client);
  const infosReduxState = useSelector((state) => state.devis.infos);
  const [clientState, setClientState] = useState({
    name: "",
    address: "",
    cp: "",
    city: "",
    country: "",
  });

  const [infoState, setInfoState] = useState({
    devisNumber: "",
    creationDate: "",
    expirationDate: "",
  });

  useEffect(() => {
    setClientState(clientReduxState);
  }, [clientReduxState]);

  useEffect(() => {
    setInfoState(infosReduxState);
  }, [infosReduxState]);
  return (
    <div
      className="myContainer row justify-content-between"
      style={{ backgroundColor: "#4c4ca5", color: "white", margin:'20px 0px' }}
    >
      <div className="col-4">
        <h4>Numéro du devis</h4>
        <h4>{infoState?.devisNumber}</h4>
        <p>Date de création : {infoState?.creationDate}</p>
        <p>Date limite de validité: {infoState?.expirationDate}</p>
      </div>
      <div className="col-4">
        <h4 className="mb-0">{infoState?.titre}</h4>
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
