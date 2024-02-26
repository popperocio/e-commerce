import PropTypes from 'prop-types';
import './AddButton.css'

function AddButton ({onClick}) {
    return (
        <button
            className='AddButton'
            onClick={onClick}
        >Add</button>
    
    )
}

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export { AddButton }