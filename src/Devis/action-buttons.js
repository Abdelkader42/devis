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
  const myState = useSelector((state) => state.devis);
  const [email,setEmail] = useState();

  function handleEmailChange($event) {
    const target = $event.target;
    const value = target.value;
    setEmail(value);
  }
  function renderPdf() {
    pdf(<Provider store={store}>
      <DevisPdf />
    </Provider>).toString().then(p=>{
const mailOptions = {
  from: "abelgheddouche@gmail.com",
  to: email,
  subject: "Subject of your email",
  html: "<p>Ci joint votre devis</p>",
  attachments:[{   // utf-8 string as an attachment
    filename: myState.infos.devisNumber+'.pdf',
    content : p,
    contentType : 'application/pdf',
}],
};
window.api.sendMsg(mailOptions);
setEmail('');
    });
  }

  return (
    <div className="myContainer row justify-content-around">
      <div className="mb-3">
        <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="email"
                  required={true}
                />
              </div>
      <button onClick={() => renderPdf()} className="btn btn-primary col-4">
        Envoyer par Mail
      </button>
    
      <PDFDownloadLink
        document={
          <Provider store={store}>
            <DevisPdf />
          </Provider>
        }
        fileName={myState.infos.devisNumber + ".pdf"}
      >
        {({ blob, url, loading, error }) => {
          return <button className="btn btn-primary col-4">{loading ? "Loading document..." : "Télécharger le devis"}</button>;
        }}
      </PDFDownloadLink> 
      
      <div>
  </div>  
    </div>
  );
}

