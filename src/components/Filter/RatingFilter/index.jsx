import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { Rating } from './Rating'
import './RatingFilter.css'

function RatingFilter (ratings) {
    const { setSelectedRating } = useContext(SearchContext);

    const handleRating = (newRating) => {
        setSelectedRating(newRating)
    }

   const ratingElements = [];

   for (const number of ratings.ratings) {
            { ratingElements.push(
                <div key={number} onClick={() => handleRating(number)}>
                    <Rating key={number} stars={number}/>
                </div>
            )};     
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