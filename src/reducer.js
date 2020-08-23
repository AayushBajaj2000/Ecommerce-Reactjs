export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "Remove_From_Basket":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((Bitem) => Bitem.id === action.id);

      if (index >= 0) {
        //item exists
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
