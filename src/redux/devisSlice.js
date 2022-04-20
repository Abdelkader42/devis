import { createSlice, current } from "@reduxjs/toolkit";
const lastId = 0;
export const devisSlice = createSlice({
  name: "devis",
  initialState: { items: [], total: {}, client: {}, isClientValid:false },
  reducers: {
    addItem: (state, action) => {
      // state.items.push({
      //     id: 1,
      //     libelle: action.payload.libelle,
      //     qte: action.payload.qte,
      //     prixUHT: action.payload.prixUHT,
      //     prixHT: action.payload.prixHT,
      //     prixTTC: action.payload.prixTTC
      //    })
      state.items.push(action.payload);
    },

    deleteItem: (state, action) => {
      const filtredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: [...filtredItems],
      };
    },

    setTotal: (state, action) => {
      state.total = action.payload;
    },

    setClient: (state, action) => {
      state.client = action.payload;
      console.log(state.client)
    },

    isClientValid: (state, action) => {
      state.isClientValid = action.payload;
    },
  },
});

export const { addItem, deleteItem, setTotal, setClient, isClientValid } = devisSlice.actions;

export default devisSlice.reducer;
