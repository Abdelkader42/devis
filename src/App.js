import "./App.css";
import Devis from "./Devis/Devis";
import ClientForm from "./Devis/Client-form";
import DevisForm from "./Devis/Devis-form";
import MailSender from "./Devis/mail-sender";
import MonPdf from "./Devis/pdf-rendrer";
import Home from "./Home";
const Ajv = require('ajv');
const _ = require('lodash');
function App() {
  //  return <Devis/>;
  //  return <ClientForm/>
  //  return <DevisForm/>;
  // return <div><MyDocument/></div> 
  // return <MailSender/>
  return <Home/>
}

export default App;
