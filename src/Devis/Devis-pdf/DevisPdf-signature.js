import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";


const styles = StyleSheet.create({
  signatureArea: {
    border: 1,
    height: 100,
    width: 150,
    marginLeft: 380,
    marginTop: 20,
  },

  text: {
    fontSize: 8,
    textAlign: 'center',
  }
});

export default function DevisPdfSignature(props) {
  return (
    <Fragment>
      <View style={styles.signatureArea}>
        <Text style={styles.text}>Date et signature du client procédé de la mention 'Bon pour accord'</Text>
      </View>
    </Fragment>
  );
}
