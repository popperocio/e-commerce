import './CartDetail.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { ContinueButton } from '../Button/ContinueButton';
import { IncreaseButton } from '../Button/IncreaseButton';
import { DecreaseButton } from '../Button/DecreaseButton';
import { RemoveButton } from '../Button/RemoveButton';

function CartDetail () {

  const { cartState, dispatch } = useContext(SearchContext);
  
  const setProductQuantity = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY",
      payload: { productId, quantity: newQuantity }
    });
  };

  const setRemoveFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId }
    });
  };

  return (
      <div className={cartState.toggleCartDetail ? "CartDetailContainerShow" : "CartDetailContainerHide"}>
        <div className='CartProductWrapper'>
            <RemoveButton onRemoveClick={()=>setRemoveFromCart(product.id)}></RemoveButton>
            <div className='CartSubtotalContainer'>
              <h2> Subtotal </h2>
              <h2>${cartState.cartTotal}</h2>
              <ContinueButton/>
          </div>
          <div>
              {cartState.cartProducts.map((product) => (
                <div key={product.id} className="CartProductContainer">
                    <img src={product.image}/>
                    <h3>${product.price}</h3>
                    <div className='IncreaseDecreaseButtons'>
                      <DecreaseButton quantity={product.quantity} setQuantity={(newQuantity) => setProductQuantity(product.id, newQuantity)} />
                      <h3>{ product.quantity }</h3>
                      <IncreaseButton quantity={product.quantity} setQuantity={(newQuantity) => setProductQuantity(product.id, newQuantity)}/> 
                    </div>
                </div>
                ))}
          </div>
        </div>
      </div>
  )
}

export { CartDetail }