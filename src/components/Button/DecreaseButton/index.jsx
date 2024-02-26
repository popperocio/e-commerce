import PropTypes from 'prop-types';
import './DecreaseButton.css'

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

DecreaseButton.propTypes = {
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired
};

export { DecreaseButton }