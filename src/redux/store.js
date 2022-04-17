import { createSlice, configureStore } from "@reduxjs/toolkit";
import devisReducer from "./devisSlice";

export default configureStore({
  reducer: {
    devis: devisReducer,
  },
});
const lastId = 0;
// function devisReducer(state = [], action) {
//     console.log(state);
//   switch (action) {
//     case "addItem":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           libelle: action.payload.libelle,
//           qte: action.payload.qte,
//           prixUHT: action.payload.prixUHT,
//           prixHT: action.payload.prixHT,
//           prixTTC: action.payload.prixTTC,
//         },
//       ];
//     case "deleteItem":
//       return state.filter((item) => item.id !== action.payload.id);
//     default:
//       // need this for default case
//       return state;
//   }
// }
