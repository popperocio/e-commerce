const initialState = {
    cartProducts: ["producto1"],
    toggleCartDetail: false
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_CART":
        return {
            ...state,
            toggleCartDetail: !state.toggleCartDetail,
        }
    
      default:
        return state;
    }
  };

  export { initialState, cartReducer };