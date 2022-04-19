import "./App.css";
import Devis from "./Devis/Devis";
import ClientForm from "./Devis/Client-form";
import DevisForm from "./Devis/Devis-form";
import MailSender from "./Devis/mail-sender";
import MonPdf from "./Devis/pdf-rendrer";
import Home from "./Home";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./Devis/pdf-rendrer";
import DevisNo from "./Devis/Devis-pdf/DevisNo";
import DevisPdf from "./Devis/Devis-pdf/DevisPdf";
const Ajv = require("ajv");
const _ = require("lodash");

function App() {
  //  return <Devis/>;
  //  return <ClientForm/>
  //  return <DevisForm/>;
  // return <div><MyDocument/></div>
  // return <MailSender/>
    return <Home/>

  // return (
  //   <PDFViewer width="100%" height="700">
  //     <DevisPdf />
  //   </PDFViewer>
  // );
}

export default App;
