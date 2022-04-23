import React from 'react';
import { Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import DevisPdfHeader from './DevisPdf-header';
import DevisPdfTable from './DevifPdf-table';
import DevisPdfFooter from './DevisPdf-footer';
import { useSelector } from 'react-redux';


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
        
        <Document>
            <Page size="A4" style={styles.page}>
            <DevisPdfHeader client={myState.client} infos= {myState.infos}/>
            <DevisPdfTable items={myState.items} total={myState.total} infos={myState.infos} tva={myState.tva}/>
            <DevisPdfFooter/>
            </Page>
        </Document>
        
    );
  }
  
  export default DevisPdf