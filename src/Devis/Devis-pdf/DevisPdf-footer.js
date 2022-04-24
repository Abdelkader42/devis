import React, { Fragment } from "react";
import {
  StyleSheet, Text, View,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  container:{
marginBottom:1
  },
  sep: {
    borderTop:1,
    width:500,
    alignSelf:'center',
    marginBottom:10,
    marginTop:10
  },

  text: {
fontSize:10,
textAlign:'center',
  }
 
});

// Create Document Component
const DevisPdfFooter = () => (
  <Fragment>
   <View fixed={true}>
     <Text style={styles.sep}></Text>
       <Text style={styles.text}>
           assurance assurance assurance assurance assurance assurance assurance assurance
       </Text>
   </View>
  </Fragment>
);

export default DevisPdfFooter;
