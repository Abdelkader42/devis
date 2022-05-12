import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
  sep: {
    borderTop: 1,
    width: 500,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  dataFont: {
    fontSize: 7,
    fontStyle: "italic",
    textAlign: "center",
  },
  text: {
    
  },
});

// Create Document Component
const DevisPdfFooter = () => (
  <Fragment>
    <View fixed={true}>
      <Text style={styles.sep}></Text>
      <Text style={styles.dataFont}>
        Assurance de responsabilité décennale souscrite auprès d'APRIL
        Partenaires – Siège Social April Partenaires 15 rue Jules Ferry BP 60307
        - 35303 - Fougères. Contrat n° : 22044088799. Couverture de la garantie
        : France métropolitaine.
      </Text>
    </View>
  </Fragment>
);

export default DevisPdfFooter;
