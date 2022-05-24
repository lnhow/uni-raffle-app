import { useContext } from 'react';
import Web3 from 'web3';
import RaffleContract from '../../web3/raffle.contract';

import AppContext from '../_context';

export default function useConnectWalletHandler() {
  const {setWeb3, setAddress, setError, setRaffle} = useContext(AppContext);
  const connectWalletHandler = async () => {
    setError(null);
    if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
      console.log('Install Metamask to use');
      setError('Install Metamask to use');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts'});
      const web3instance = new Web3(window.ethereum);
      const contract = RaffleContract(web3instance);
      
      setWeb3(web3instance);
      setRaffle(contract);

      const accounts = await web3instance.eth.getAccounts();
      setAddress(accounts[0]);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  return connectWalletHandler;
}