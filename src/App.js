import "./App.css";
import Devis from "./Devis/Devis";
import ClientForm from "./Devis/Client-form";
import DevisForm from "./Devis/Devis-form";
const Ajv = require('ajv');
const _ = require('lodash');
function App() {
  const ajv = new Ajv({
    allErrors: true,
    useDefaults: true
});
   //return <Devis />;
  //  return <ClientForm/>
   return <DevisForm/>;
  // return <div><MyDocument/></div> 
}

export default App;
