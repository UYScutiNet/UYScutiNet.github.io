const connectWallet = async () => {
  if (!window.ethereum) return;
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.getAccounts()
  const account = accounts[0]
  return ({ account, web3 })
}