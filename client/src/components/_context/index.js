import { useState, createContext } from 'react';

const AppContext = createContext({
  web3: null,
  setWeb3: () => {},
  address: null,
  setAddress: () => {},
  raffle: null,
  setRaffle: () => {},
});

export default AppContext;

export function AppContextProvider({ children }) {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [raffle, setRaffle] = useState(null);
  const [error, setError] = useState(null);

  const contextValue = {
    web3: web3,
    setWeb3: setWeb3,
    address: address,
    setAddress: setAddress,
    raffle: raffle,
    setRaffle: setRaffle,
    error: error,
    setError: setError
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
