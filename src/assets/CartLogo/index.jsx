import './CartLogo.css'
import { useContext } from "react";
import { SearchContext } from '../../contexts/SearchContext';


function CartLogo () {
    const { dispatch } = useContext(SearchContext);
    
    return (
        <div className='cartLogoContainer' onClick= {()=>dispatch({ type: 'OPEN_CART' })}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }