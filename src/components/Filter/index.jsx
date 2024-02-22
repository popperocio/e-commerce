import { useContext } from 'react';
import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import './Filter.css'
import { SearchContext } from '../../contexts/SearchContext';


function Filter () {
    const {products} = useContext(SearchContext);

    const categories = [...new Set(products.map(product =>product.category))];   
    
    const roundedRatings = [...new Set(products.map(product => Math.round(product.rating.rate)))].sort((a, b) => b - a);

    return (
        <div className='FilterContainer'>
            <TypeFilter
                name='Category'
                options={categories.map(category => ({ id: category, label: category.charAt(0).toUpperCase() + category.slice(1) }))}
            />
            <RatingFilter  
                ratings={roundedRatings}
            />
        </div>
    )
}

export { Filter }