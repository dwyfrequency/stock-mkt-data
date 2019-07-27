import React, { useState, createContext } from 'react';

export const AppRelatedContext = createContext();

export const AppRelatedProvider = ({ children }) => {
  /*
  { name: 'APPL', price: '100', changePercent: '0.8203%' },
    { name: 'IBM', price: '200', changePercent: '1.203%' },
    { name: 'MSFT', price: '300', changePercent: '2.8203%' },
  */
  const [favoriteStockListData, setFavoriteStockListData] = useState(null);
  const [favoriteStockList, setFavoriteStockList] = useState([
    'APPL',
    'IBM',
    'MSFT',
  ]);

  return (
    <AppRelatedContext.Provider
      value={{
        favoriteStockListData,
        favoriteStockList,
        setFavoriteStockList,
        setFavoriteStockListData,
      }}
    >
      {children}
    </AppRelatedContext.Provider>
  );
};
