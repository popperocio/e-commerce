import './IncreaseButton.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function IncreaseButton ( {quantity, setQuantity}) {

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    
    return (
        <button
            className='IncreaseButton'
            onClick={handleIncreaseQuantity}
        >+</button>
    
    )
}

export { IncreaseButton }