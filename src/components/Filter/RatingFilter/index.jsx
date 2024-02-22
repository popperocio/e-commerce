import { Rating } from './Rating'
import './RatingFilter.css'

function RatingFilter (ratings) {
   const ratingElements = [];

   for (const number of ratings.ratings) {
       ratingElements.push(<Rating key={number} stars={number} />);
   }
   
    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                {ratingElements}            
            </div>
        </div>
    )
}

export { RatingFilter }