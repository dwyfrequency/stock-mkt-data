import React, { useState, createContext } from 'react';

export const AppRelatedContext = createContext();

export const AppRelatedProvider = ({ children }) => {
  const [favoriteStocks, setFavoriteStocks] = useState([
    { name: 'APPL', price: '100', changePercent: '0.8203%' },
    { name: 'IBM', price: '200', changePercent: '1.203%' },
    { name: 'MSFT', price: '300', changePercent: '2.8203%' },
  ]);

  return (
    <AppRelatedContext.Provider
      value={{
        favoriteStocks,
        setFavoriteStocks,
      }}
    >
      {children}
    </AppRelatedContext.Provider>
  );
};
