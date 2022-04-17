import "../App.css";

function DevisHeader(props) {
  return (
    <div className="container">
      <div className="row">
        <span className="col-8 align-self-start">
          <img src="../logo.png"></img>
        </span>
        <span className="col align-self-end">
          <DevisInfo />
        </span>
      </div>

      <div className="row mt-5 mb-5">
        <span className="col-8 align-self-start">
          <Entreprise />
        </span>
        <span className="col align-self-end">
          <Client />
        </span>
      </div>
    </div>
  );
}

function DevisInfo(props) {
  return (
    <>
      <div className="mb-4">
        <h1 className="mb-0">DEVIS</h1>
        <h3>N° 2022040201</h3>
      </div>
      <div>
        <p className="mb-0">Date de création : 02/04/2022</p>
        <p>Date limite de validité: 02/05/2022</p>
      </div>
    </>
  );
}

function Client(props) {
  return (
    <>
      <p className="mb-0">Mr Abdelkader BELGHEDDOUCHE</p>
      <p className="mb-0"> 2 rue Antonin Artaud</p>
      <p className="mb-0">93110 Rosny-sous-bois</p>
    </>
  );
}

function Entreprise(props) {
  return (
    <>
      <p className="mb-0">Mr Fethallah BELGHEDDOUCHE</p>
      <p className="mb-0"> 1 rue Winston Churchill</p>
      <p className="mb-0">77100 Meaux</p>
    </>
  );
}
export default DevisHeader;
