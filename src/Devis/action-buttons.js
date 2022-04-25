import { useNavigate } from "react-router";
import {
  BlobProvider,
  PDFDownloadLink,
  renderToFile,
  renderToString,
  View,
  Text,
  Page,
  Document,
  usePDF,
  pdf,
} from "@react-pdf/renderer";
import DevisPdf from "./Devis-pdf/DevisPdf";
import store from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { useState } from "react";

export default function ActionButtons(props) {
  const navigation = useNavigate();
  const myState = useSelector((state) => state.devis);
  const [myBlob, setMyBlob] = useState({});
  
  let bblob;
  let urll;
  function renderPdf() {
    pdf(<Provider store={store}>
      <DevisPdf />
    </Provider>).toBuffer().then(p=>{
const mailOptions = {
  from: "abelgheddouche@gmail.com",
  to: "abelgheddouche@yahoo.fr",
  subject: "Subject of your email",
  html: "<p>Ci joint votre devis</p>",
  attachments:[{   // utf-8 string as an attachment
    filename: 'text1.pdf',
    content : p,
    contentType : 'application/pdf',
}],
};
window.api.sendMsg(mailOptions);
    });
  }

  return (
    <div className="myContainer row justify-content-around">
      {/* <button onClick={() => navigation("/devis")} className="btn btn-primary col-4">
        Imprimer le Devis
      </button> */}
      <button onClick={() => renderPdf()} className="btn btn-primary col-4">
        Télécharger le devis
      </button>
    
      <PDFDownloadLink
        document={
          <Provider store={store}>
            <DevisPdf />
          </Provider>
        }
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) => {
          return <button>{loading ? "Loading document..." : "Télécharger le devis"}</button>;
        }}
      </PDFDownloadLink> 
      
      <div>
  </div>  
    </div>
  );
}

