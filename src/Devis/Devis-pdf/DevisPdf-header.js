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
    marginLeft: 150,
  },
  entreprise: {},
  client: {
    marginLeft: 200,
  },
  header:{
marginBottom:50
  }
});

// Create Document Component
const DevisPdfHeader = (props) =>{ 
  return (
  <Fragment>
    <View style={styles.header} fixed={true}>
      <View style={styles.rowView} fixed={true}>
        <View style={styles.devisInfo}>
          <Text>DEVIS N°: </Text>
          <Text style={{ marginLeft: 5 }}>{props.infos.devisNumber} </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} src="../../fts-logo.png" />
        </View>
      </View>

      <View style={styles.rowView} fixed={true}>
        <View style={styles.entreprise}>
          <Text>Mr Fethallah BELGHEDDOUCHE</Text>
          <Text>1 rue Winston Churchill</Text>
          <Text>77100 Meaux</Text>
        </View>
        <View style={styles.client}>
          <Text>{props.client.name}</Text>
          <Text>{props.client.address}</Text>
          <Text>{props.client.cp} {props.client.city}</Text>
        </View>
      </View>
    </View>
  </Fragment>
)};

export default DevisPdfHeader;
