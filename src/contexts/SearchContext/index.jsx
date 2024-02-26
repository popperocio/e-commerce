import { useState, useEffect, createContext, useReducer } from "react";
import PropTypes from "prop-types"; 
import { initialState, cartReducer } from "../../reducers/CartReducer";
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [order, setOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [ratingProduct, setRatingProduct] = useState(null);
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  }).sort((productA, productB) => {
    switch (order) {
      case "Name":
        return productA.title.localeCompare(productB.title);
      case "Price_Low":
        return productA.price - productB.price;
      case "Price_High":
        return productB.price - productA.price;
      default:
        return 0; 
    }
  }).filter((product) => {
    if (selectedCategory) {
      return product.category==(selectedCategory)
    }
    return true;
  }).filter((product) => {
    if (selectedRating) {
      const roundedRating=Math.round(product.rating.rate)
      return roundedRating === selectedRating;
    }
    return true;
  });

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        order,
        setOrder,
        selectedCategory,
        setSelectedCategory, 
        products,
        selectedRating,
        setSelectedRating,
        ratingProduct,
        setRatingProduct,
        cartProducts: cartState.cartProducts,
        cartState,
        dispatch,    
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchContext, SearchProvider };
