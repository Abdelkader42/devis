 function addItem(item) {
    console.log('addItem')
    console.log(item);
    return {
        type:'addItem',
        payload:{
            item:item
        }
    }
}

 function deleteItem(id) {
    return {
        type:'deleteItem',
        payload:{
            id
        }
    }
}