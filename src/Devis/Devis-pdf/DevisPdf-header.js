import React, { Fragment } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: "white",
  },
  rowView: {
    flexDirection: "row",
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: 120,
  },
  devisInfo: {
    marginTop: 20,
    fontSize: 20,
    flexDirection: "row",
  },
  logoContainer: {
    position:'left'
  },
  entreprise: {
    fontSize: 9,
  },
  client: {
    marginLeft: 200,
  },
  header: {
    marginBottom: 50,
  },
  siren: {
    marginTop: 10,
  },
});

// Create Document Component
const DevisPdfHeader = (props) => {
  return (
    <Fragment>
      <View style={styles.header} fixed={true}>
        <View style={styles.rowView} fixed={true}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} src="../../fts-logo.png" />
          </View>
          <View style={styles.devisInfo}>
            <Text>DEVIS N°: </Text>
            <Text style={{ marginLeft: 5 }}>{props.infos.devisNumber} </Text>
          </View>
        </View>

        <View style={styles.rowView} fixed={true}>
          <View style={styles.entreprise}>
            <Text>SAS Fais Ta Serrure </Text>
            <Text>117/119 AVENUE DU GENERAL LECLERC</Text>
            <Text>77400 LAGNY SUR MARNE</Text>

            <Text style={styles.siren}> Numéro Siren :912438306</Text>
            <Text>Numéro TVA intracommunautaire: FR53912438306</Text>
          </View>
          <View style={styles.client}>
            <Text>{props.client.name}</Text>
            <Text>{props.client.address}</Text>
            <Text>
              {props.client.cp} {props.client.city}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default DevisPdfHeader;
