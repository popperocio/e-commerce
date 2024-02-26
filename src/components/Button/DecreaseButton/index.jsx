import './DecreaseButton.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function DecreaseButton ({quantity, setQuantity}) {

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <button
            className='DecreaseButton'
            onClick={handleDecreaseQuantity}
            disabled={quantity === 1} 
        >-</button>
    
    )
}

export { DecreaseButton }