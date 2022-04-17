function devisReducer(state, action) {

    switch(action){
        case 'addItem':
           return [
               ...state.devis, 
               {
                id: ++lastId,
                libelle: action.payload.libelle,
                qte: action.payload.qte,
                prixUHT: action.payload.prixUHT,
                prixHT: action.payload.prixHT,
                prixTTC: action.payload.prixTTC
               }
           ]
           case 'deleteItem': 
           return state.filter(item => item.id !== action.payload.id)
    }
}
