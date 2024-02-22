import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { Rating } from './Rating'
import './RatingFilter.css'

function RatingFilter (ratings) {
    const { setSelectedRating } = useContext(SearchContext);
    const [isClicked, setIsClicked] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);

    const handleRating = (newRating) => {
        if (selectedKey === newRating) {
            setSelectedRating(null);
            setSelectedKey(null);
            setIsClicked(isClicked);
        } else {
            setSelectedRating(newRating);
            setSelectedKey(newRating);
            setIsClicked(!isClicked);
        }
    }

   const ratingElements = [];

   for (const number of ratings.ratings) {
        { ratingElements.push(
            <div className={`RatingStarsContainer ${selectedKey=== number ? 'clicked' : ''}`} key={`rating-${number}`} onClick={() => handleRating(number)}>
                <Rating key={number} stars={number}/>
            </div>
        )}   
   }
   
    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer' >
                {ratingElements}                               
            </div>
        </div>
    )
}

export { RatingFilter }