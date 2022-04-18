import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import DevisPdfHeader from './DevisPdf-header';
import DevisPdfTable from './DevifPdf-table';
import DevisPdfFooter from './DevisPdf-footer';


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
  
  const DevisPdf = ({devis}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                <DevisPdfHeader/>
                <DevisPdfTable/>
                <DevisPdfFooter/>
                </Page>
            </Document>
        );
  
  export default DevisPdf