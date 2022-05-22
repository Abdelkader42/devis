import React, { Fragment } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const titles = {
  designation:'Désignation',
  Quantite:'Quantité',
  prixUHT:'Prix U HT',
  totalHT:'Total HT',
  totalTTC: 'Total TTC'
}
// const borderColor = "#90e5fc";
const borderColor = "";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    // borderBottomColor: "black",
   // borderBottomWidth: 1,
    alignItems: "center",
    minHeight:24,
    //  fontStyle: "bold",
  },
  num: {
    width: "5%",
    textAlign: "left",
    borderRightColor: borderColor,
    // borderRightWidth: 1,
    paddingLeft: 8,
  },
  libelle: {
    width: "50%",
    textAlign: "left",
    borderRightColor: borderColor,
    //borderRightWidth: 1,
    paddingLeft: 8,
    paddingBottom:15
  },
  qte: {
    width: "10%",
    borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  prixUHT: {
    width: "12%",
    borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  prixHT: {
    width: "12%",
    borderRightColor: borderColor,
    // borderRightWidth: 1,
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
    // borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  total_amount: {
    width: "11%",
    borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  headerFont: {
    fontSize: 10,
  },

  dataFont: {
    fontSize: 9,
  },

  table: {
    border: 1,
  },

  header: {
    borderBottom:1
  },
  dataRowColor: {
    backgroundColor:'#efefef'
  }
});

const DevisPdfTable = (props) => {
  const rows = props.items.map((item, index) => (
    <View style={[styles.row, styles.dataFont, (index + 1) % 2 === 0 ? styles.dataRowColor : '']} key={index}>
      <Text style={[styles.num, styles.dataFont]}>{index + 1}</Text>
      <Text style={[styles.libelle, styles.dataFont]}>{item.libelle}</Text>
      <Text style={[styles.qte, styles.dataFont]}>{item.qte}</Text>
      <Text style={[styles.prixUHT, styles.dataFont]}>
        {Number(item.priceUHT).toFixed(2)} €
      </Text>
      <Text style={[styles.prixHT, styles.dataFont]}>
        {Number(item.priceHT).toFixed(2)} €
      </Text>
      <Text style={[styles.prixTTC, styles.dataFont]}>
        {Number(item.priceTTC).toFixed(2)} €
      </Text>
    </View>
  ));
  return (
    <Fragment>
      <Text>{props.infos.titre}</Text>
      <View style={styles.table}>
        <View style={styles.header}>
          <DevisPdfTableHeader />
        </View>
        {rows}
      </View>
      <DevisPdfTableFooter data={props.total} tva={props.tva}/>
    </Fragment>
  );
};

const DevisPdfTableHeader = () => (
  <View style={styles.row} key="1">
    <Text style={[styles.num, styles.headerFont]}>N°</Text>
    <Text style={[styles.libelle, styles.headerFont]}>Désignation</Text>
    <Text style={[styles.qte, styles.headerFont]}>Quantité</Text>
    <Text style={[styles.prixUHT, styles.headerFont]}>Prix U HT</Text>
    <Text style={[styles.prixHT, styles.headerFont]}>Total HT</Text>
    <Text style={[styles.prixTTC, styles.headerFont]}>Total TTC</Text>
  </View>
);

const DevisPdfTableFooter = (props) => (
  <Fragment>
    <View wrap={false}>
      <View style={styles.row} key="1">
        <Text style={styles.total_libelle}>Total HT</Text>
        <Text style={styles.total_amount}>
          {Number(props.data.totalHT).toFixed(2)} €
        </Text>
      </View>
      <View style={styles.row} key="2">
        <Text style={styles.total_libelle}>Montant TVA ({Number(props.tva * 100)}%)</Text>
        <Text style={styles.total_amount}>
          {Number(props.data.tva).toFixed(2)} €
        </Text>
      </View>
      <View style={styles.row} key="3">
        <Text style={styles.total_libelle}>Total TTC</Text>
        <Text style={styles.total_amount}>
          {Number(props.data.totalTTC).toFixed(2)} €
        </Text>
      </View>
    </View>
  </Fragment>
);

export default DevisPdfTable;
