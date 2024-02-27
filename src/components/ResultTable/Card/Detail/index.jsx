import PropTypes from 'prop-types';
import { AddToCartButton } from "../../../Button/AddToCartButton"
import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

function Detail ({title, price, rating }) {
    return (
            <div className="DetailsCardContainer">
                <h3 className="DetailsProductTitle">{title}</h3>
                <Rating stars={rating} />
                <h3>${price}</h3>
                <AddToCartButton className="AddToCartButton"></AddToCartButton> 
            </div>
            
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export { Detail }
