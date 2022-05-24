import { useState, createContext } from 'react';

export const AppContext = createContext({
  web3: null,
  setWeb3: () => {},
  address: null,
  setAddress: () => {},
});

export default function AppContextProvider({ children }) {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);

  const contextValue = {
    web3: web3,
    setWeb3: setWeb3,
    address: address,
    setAddress: setAddress,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
