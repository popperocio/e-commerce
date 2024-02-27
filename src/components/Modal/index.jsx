import { useContext, useState, useCallback } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { AddButton } from '../Button/AddButton';
import { IncreaseButton } from '../Button/IncreaseButton';
import { DecreaseButton } from '../Button/DecreaseButton';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        dispatch,
        productId
    } = useContext(SearchContext);
    const [quantity, setQuantity] = useState(1); 

    const setCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddToCart = useCallback(() => {
        dispatch({ 
            type: 'ADD_TO_CART', 
            payload:  {
                id: productId,
                image: imageProduct,
                title: titleProduct,
                price: priceProduct,
                description: descriptionProduct,
                quantity: quantity
            }
        });
        setIsOpen(false)
    }, [dispatch, productId, imageProduct, titleProduct, priceProduct, descriptionProduct, quantity]);

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={3}/>
                    <h6>{descriptionProduct}</h6>
                    <div className='ModalButtons'>
                        <div className='IncreaseAndDecreaseButtons'>
                            <DecreaseButton quantity={quantity} setQuantity={setQuantity}/>
                            <h3>{ quantity }</h3>
                            <IncreaseButton quantity={quantity} setQuantity={setQuantity}/> 
                        </div>
                        <AddButton onClick={handleAddToCart}/>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export { Modal }