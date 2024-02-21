import './SortFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
function SortFilter () {

    const {
        setOrder,
    } = useContext(SearchContext);

    const handleSetOrder = (event) => {
        setOrder(event.target.value);
    }
    return ( 
        <div className='SortFilterContainer' onChange={handleSetOrder} >
            <select name="order" id="order">
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
