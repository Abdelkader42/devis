import "./App.css";
import Devis from "./Devis/Devis";
import ClientForm from "./Devis/Client-form";
import DevisForm from "./Devis/Devis-form";
const Ajv = require('ajv');
function App() {
  const ajv = new Ajv({
    allErrors: true,
    useDefaults: true
});
   //return <Devis />;
  //  return <ClientForm/>
  return <DevisForm/>;
}

export default App;
