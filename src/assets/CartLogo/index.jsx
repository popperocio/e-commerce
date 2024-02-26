import './CartLogo.css'
import { useContext } from "react";
import { SearchContext } from '../../contexts/SearchContext';


function CartLogo () {
    const { dispatch,  cartState } = useContext(SearchContext);
    
    return (
        <div className={`cartLogoContainer ${cartState.cartProducts.length >0 ? 'cartChanged' : ''}`} onClick= {()=>dispatch({ type: 'OPEN_CART' })}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }