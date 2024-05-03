export const addItem = (data) => {
    return{
        type: "ADD_ITEM",
        payload : {
            id: Math.random(),
            data: data
        }
    }
}

export const deleteItem = (id) => {
    return{
        type : "DELETE_ITEM",
        id
    }
}