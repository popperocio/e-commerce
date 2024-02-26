import './CartDetail.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

function CartDetail () {

  const { cartState } = useContext(SearchContext);

  return (
      <div className={cartState.toggleCartDetail ? "CartDetailContainerShow" : "CartDetailContainerHide"}>
        <div>
            <h2> Subtotal: </h2>
        </div>
        <div>
            <h2>{cartState.cartProducts}</h2>
        </div>
      </div>
  )
}

export { CartDetail }