const initialData ={
  list: []
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEM":

      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

      case "DELETE_ITEM":

      const newList = state.list.filter((elem) => elem.id != action.id)

      return {
        ...state,
        list: newList
      };
    default: return state;
  }
};

export default todoReducers;
