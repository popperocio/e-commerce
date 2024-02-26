import PropTypes from 'prop-types';
import './IncreaseButton.css'

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

IncreaseButton.propTypes = {
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired
};

export { IncreaseButton }