import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import myFont from "../../font/Source_Sans_Pro/SourceSansPro-Bold.ttf"
import { Fragment } from "react";

const source = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap'

Font.register({ family: 'FamilyName', src: myFont, fontStyle: 'normal', fontWeight: 'bold'});

const styles = StyleSheet.create({
  signatureArea: {
    border: 1,
    height: 100,
    width: 150,
    marginLeft: 380,
    marginTop: 20,
  },

  text: {
    fontFamily:'FamilyName',
    fontSize: 8,
    textAlign: 'center',
    fontWeight:'bold'
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
