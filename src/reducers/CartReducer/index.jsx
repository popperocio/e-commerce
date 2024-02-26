const initialState = {
    cartProducts: [],
    toggleCartDetail: false
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_CART":
        return {
            ...state,
            toggleCartDetail: !state.toggleCartDetail,
        }
      // case "ADD_TO_CART":
      //   return {
      //     ...state,
      //     cartProducts: [...state.cartProducts, action.payload],
      //   };
      // case "REMOVE_FROM_CART":
      //   return {
      //     ...state,
      //     cartProducts: state.cartProducts.filter(product => product.id !== action.payload.id),
      //   };
      default:
          return state;
    }

  };

  export { initialState, cartReducer };