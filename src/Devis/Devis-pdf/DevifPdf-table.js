import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

var data = [
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHt: 252.6,
    priceHt: 255.6,
    priceTtc: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHt: 253.6,
    priceHt: 256.6,
    priceTtc: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHt: 254.6,
    priceHt: 254.6,
    priceTtc: 501,
  },
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHt: 252.6,
    priceHt: 255.6,
    priceTtc: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHt: 253.6,
    priceHt: 256.6,
    priceTtc: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHt: 254.6,
    priceHt: 254.6,
    priceTtc: 501,
  },
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHt: 252.6,
    priceHt: 255.6,
    priceTtc: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHt: 253.6,
    priceHt: 256.6,
    priceTtc: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHt: 254.6,
    priceHt: 254.6,
    priceTtc: 501,
  },
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  },
  {
    id: 3,
    qte: 1,
    libelle: "Test 3 abc",
    priceUHt: 252.6,
    priceHt: 255.6,
    priceTtc: 507,
  },
  {
    id: 4,
    qte: 1,
    libelle: "Test 4 abc",
    priceUHt: 253.6,
    priceHt: 256.6,
    priceTtc: 505,
  },
  {
    id: 5,
    qte: 1,
    libelle: "Test 5 abc",
    priceUHt: 254.6,
    priceHt: 254.6,
    priceTtc: 501,
  },
  {
    id: 1,
    qte: 1,
    libelle: "Test 1 abc",
    priceUHt: 25.6,
    priceHt: 25.6,
    priceTtc: 50,
  },
  {
    id: 2,
    qte: 1,
    libelle: "Test 2 abc",
    priceUHt: 251.6,
    priceHt: 257.6,
    priceTtc: 506,
  }

];
const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  num: {
    width: "5%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  libelle: {
    width: "50%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qte: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  prixUHT: {
    width: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  prixHT: {
    width: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  prixTTC: {
    width: "11%",
    textAlign: "right",
    paddingRight: 8,
  },
  total_libelle: {
    width: "89%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  total_amount: {
    width: "11%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  }
});

const DevisPdfTable = ({ items }) => {
  const rows = data.map((item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.num}>{item.id}</Text>
      <Text style={styles.libelle}>{item.libelle}</Text>
      <Text style={styles.qte}>{item.qte}</Text>
      <Text style={styles.prixUHT}>{item.priceUHt}</Text>
      <Text style={styles.prixHT}>{item.priceHt}</Text>
      <Text style={styles.prixTTC}>{item.prixTTC}</Text>
    </View>
  ));
  return (
    <Fragment>
      <DevisPdfTableHeader />
      {rows}
      <DevisPdfTableFooter/>
    </Fragment>
  );
};

const DevisPdfTableHeader = () => (
  <View style={styles.row} key="1">
    <Text style={styles.num}>N°</Text>
    <Text style={styles.libelle}>Désignation</Text>
    <Text style={styles.qte}>Quantité</Text>
    <Text style={styles.prixUHT}>Prix Unitaire HT</Text>
    <Text style={styles.prixHT}>Total HT</Text>
    <Text style={styles.prixTTC}>Total TTC</Text>
  </View>
);

const DevisPdfTableFooter = () => (
  <Fragment>
      <View wrap={false}>
      <View style={styles.row} key="1">
      <Text style={styles.total_libelle}>Total HT</Text>
      <Text style={styles.total_amount}>Total TTC</Text>
    </View>
    <View style={styles.row} key="2">
      <Text style={styles.total_libelle}>Total HT</Text>
      <Text style={styles.total_amount}>Total TTC</Text>
    </View>
    <View style={styles.row} key="3">
      <Text style={styles.total_libelle}>Total HT</Text>
      <Text style={styles.total_amount}>Total TTC</Text>
    </View>
      </View>
  </Fragment>
);

export default DevisPdfTable;
