import { AddToCartButton } from "../../../Button/AddToCartButton"
import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

function Detail ({title, price, rating }) {
    return (
        <>
            <div className="DetailsCardContainer">
                <h3>{title}</h3>
                <Rating stars={rating} />
                <h3>${price}</h3>
                <div className="AddToCartButtonContainer">
                    <AddToCartButton></AddToCartButton> 
                </div>
            </div>
            
        </>
    )
}

export { Detail }
