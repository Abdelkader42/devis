import "../App.css";
import Table from "./Table";
import DevisHeader from "./Devis-header";
import Info from "./Info";
import FooterDevis from "./FooterDevis";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

var data = [
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHT: 25.6,
    priceHT: 25.6,
    priceTTC: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHT: 251.6,
    priceHT: 257.6,
    priceTTC: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHT: 252.6,
    priceHT: 255.6,
    priceTTC: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHT: 253.6,
    priceHT: 256.6,
    priceTTC: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHT: 254.6,
    priceHT: 254.6,
    priceTTC: 501,
  },
];

const total = {
  totalHT: 122,
  tva: 12,
  totalTTC: 155,
};
function Devis(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Content ref={componentRef}/>
      <button onClick={handlePrint}>Print this out !</button>
    </div>
  );
}

function PrintIt() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Devis />
      <button onClick={handlePrint}>Print this out !</button>
    </div>
  );
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mx-auto">
        <DevisHeader />
        <Table data={data} total={total} />
        <Info />
        <FooterDevis />
      </div>
    );
  }
}

export default Devis;
