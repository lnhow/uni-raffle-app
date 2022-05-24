import { useContext } from 'react';
import Web3 from 'web3';

import { AppContext } from '../_context';

export default function useConnectWalletHandler() {
  const {setWeb3, setAddress} = useContext(AppContext)
  const connectWalletHandler = async () => {
    if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
      console.log('Install Metamask to use');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts'});
      const web3instance = new Web3(window.ethereum);
      
      setWeb3(web3instance);

      const accounts = await web3instance.eth.getAccounts();
      setAddress(accounts[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  return connectWalletHandler;
}