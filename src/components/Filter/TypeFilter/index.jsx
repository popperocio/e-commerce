import {  useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './TypeFilter.css'
import { SearchContext } from '../../../contexts/SearchContext';

function TypeFilter ({name, options}) {
     const { setSelectedCategory } = useContext(SearchContext);

     const [ checkedId, setCheckedId ] = useState(null);

     const handleCheckboxChange = (event) => {
      const selectedId = event.target.id;
      const newCheckedId = checkedId === selectedId ? null : selectedId;
  
      setCheckedId(newCheckedId);
      setSelectedCategory(newCheckedId);
     };
   
   
    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {options.map((option, id) => 
                <div
                    key={id}
                    className='CheckBox'
                >
                    <input type="checkbox" 
                        id={option.id} 
                        name={option.label}  
                        checked={checkedId === option.id}
                        onChange={(e) => handleCheckboxChange(e)} 
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )}
        </div>
    )
}

TypeFilter.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export { TypeFilter }