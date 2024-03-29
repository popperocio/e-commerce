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
      case "ADD_TO_CART":
        const existingProductIndex = state.cartProducts.findIndex(product => product.id === action.payload.id);
        if (existingProductIndex !== -1) {
          const updatedCartProducts = [...state.cartProducts];
          updatedCartProducts[existingProductIndex].quantity += action.payload.quantity;
          return {
            ...state,
            cartProducts: updatedCartProducts,
          };
        } else {
          return {
            ...state,
            cartProducts: [...state.cartProducts, action.payload],
          };
        }
      case "UPDATE_PRODUCT_QUANTITY":
        const { productId, quantity } = action.payload;
        const updatedProducts = state.cartProducts.map(product => {
          if (product.id === productId) {
            return { ...product, quantity: quantity };
          }
          return product;
        });
        return {
          ...state,
          cartProducts: updatedProducts,
        };
      case "CALCULATE_CART_TOTAL":
          const total = state.cartProducts.reduce((total, product) => {
            const productTotal = product.price * product.quantity;
            return total + productTotal;
          }, 0);
          return {
            ...state,
            cartTotal: total
          };
      case "REMOVE_FROM_CART":
            const { productId: removeProductId } = action.payload;
            const updatedCartProducts = state.cartProducts.filter(product => product.id !== removeProductId);
            return {
              ...state,
              cartProducts: updatedCartProducts,
            };
    
      default:
          return state;
    }

  };

  export { initialState, cartReducer };