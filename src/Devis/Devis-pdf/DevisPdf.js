import React, { Fragment } from 'react';
import { Page, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import DevisPdfHeader from './DevisPdf-header';
import DevisPdfTable from './DevifPdf-table';
import DevisPdfFooter from './DevisPdf-footer';
import { useSelector } from 'react-redux';
import DevisPdfSignature from './DevisPdf-signature';
import myFont from "../../font/Source_Sans_Pro/SourceSansPro-Bold.ttf"

Font.register({ family: 'pdfFont', src: myFont, fontStyle: 'normal', fontWeight: 'bold'});
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 10,
        paddingLeft:10,
        paddingRight:10,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        // width: 74,
        // height: 66,
        // marginLeft: 'auto',
        // marginRight: 'auto'
    }
  });
  
  const DevisPdf = (props) => {
    const myState = useSelector(state => state.devis);
   // const myState = props.state;
      return (
        // <PDFViewer width="100%" height="800">
        <Document>
            <Page size="A4" style={styles.page}>
            <DevisPdfHeader client={myState.client} infos= {myState.infos}/>
            <DevisPdfTable items={myState.items} total={myState.total} infos={myState.infos} tva={myState.tva}/>
            <DevisPdfSignature/>
            <DevisPdfFooter/>
            </Page>
        </Document>
      //  </PDFViewer>
    );
  }
  
  export default DevisPdf