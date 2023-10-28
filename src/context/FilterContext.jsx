import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducers';

const filterInitialState = {
  ProductsList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: 'PRODUCT_LIST',
      payload: {
        products: products,
      },
    });
  }

  const value = {
    ProductsList: state.ProductsList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
