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
} from "@react-pdf/renderer";
import DevisPdf from "./Devis-pdf/DevisPdf";
import store from "../redux/store";
import { Provider, useSelector } from "react-redux";

export default function ActionButtons(props) {
  const navigation = useNavigate();
  const myState = useSelector((state) => state.devis);
  function renderPdf() {
       window.api.renderPdf(
        DevisPdf.map(f=>f.path)
       );
    // win.loadURL("http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf");
    // navigation("http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf");
    //renderToFile(<DevisPdf/>,'./my-doc.pdf');
    // const str = renderToString(
    //   <Provider store={store}>
    //     <DevisPdf />
    //   </Provider>
    // );
    // console.log(str);

    // window.open('/devis-pdf')
  }

  return (
    <div className="myContainer row justify-content-around">
      {/* <button onClick={() => navigation("/devis")} className="btn btn-primary col-4">
        Imprimer le Devis
      </button> */}
      <button onClick={() => renderPdf()} className="btn btn-primary col-4">
        Télécharger le devis
      </button>
      <button>
      <PDFDownloadLink
          document={<Provider store={store}><DevisPdf/></Provider>}
          fileName={myState.infos.devisNumber + '.pdf'}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      </button>
      

      {/* <BlobProvider document={DevisPdf}>
        {({ url, blob }) => {
          console.log(blob);
          return (
            <a href={url} target="_blank">
              View as PDF
            </a>
          );
        }}
      </BlobProvider> */}
      
    </div>
  );
}

function Mydoc() {
  return (
    <Document>
      <Page>
      <View>
        <Text>aaaaaaaaaaaaaaa</Text>
      </View>
      </Page>

    </Document>
  );
}
