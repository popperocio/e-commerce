import './CartDetail.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

function CartDetail () {

  const { cartState } = useContext(SearchContext);

  return (
      <div className={cartState.toggleCartDetail ? "CartDetailContainerShow" : "CartDetailContainerHide"}>
        <div className='CartSubtotalContainer'>
            <h2> Subtotal: </h2>
        </div>
        <div>
            {cartState.cartProducts.map((product) => (
              <div key={product.id} className="CartProductContainer">
                  <img src={product.image}/>
                  <p>${product.price}</p>
                  <h3>{ product.quantity }</h3>
              </div>
              ))}
        </div>
      </div>
  )
}

export { CartDetail }