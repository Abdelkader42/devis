import "../App.css";
import Table from "./Table";
import DevisHeader from "./Devis-header";
import Info from "./Info";
import FooterDevis from "./FooterDevis";

function Devis() {
  return (
    <div className="w-75 mx-auto">
     
      <DevisHeader />
      <Table/>
      <Info/>
      <FooterDevis/>
    </div>
  );
}

export default Devis;