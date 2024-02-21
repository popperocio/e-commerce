import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'

function Card ({ image, title, price, description, rating }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setRatingProduct,
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setRatingProduct(rating.rate)
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                title = {title}
                price = {price}
                rating = {Math.round(rating.rate)}
            />
        </div>
    )
}

export { Card }