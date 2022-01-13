import { useRef, useEffect } from "react";

import { useCallback, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import Introduce from "../../components/introduce";
import Claim from "../../components/claim";
import Distribution from "../../components/distribution";
import Stake from "../../components/stake";
import Farm from "../../components/farm";
import ConnectWallet from "../../components/ConnectWallet";

import {
  createWeb3Instance,
  createStakingContractInstance,
  createTokenContractInstance,
} from "../../core";

const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
});

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
        //42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      },
    },
  },
  metamask: {
    id: "injected",
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask",
  },
};

const Home = () => {
  const claimSectionRef = useRef(null);
  const farmSectionRef = useRef(null);
  const stakeSectionRef = useRef(null);

  const scrollClick = (val) => {
    switch (val) {
      case "claim":
        claimSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "farm":
        farmSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "stake":
        stakeSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        claimSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(0);
  const [provider, setProvider] = useState(undefined);
  const { active, activate, deactivate, account, error } = useWeb3React();
  const [stakingContract, setStakingContract] = useState("");
  const [tokenContract, setTokenContract] = useState("");
  const [balance, setBalance] = useState("");
  const [stakedBalance, setStakedBalance] = useState("");
  const [transactionPending, setTransactionPendingToggle] = useState(false);

  const load = async () => {
    const _web3 = createWeb3Instance(Web3.givenProvider);
    const _stakingContract = createStakingContractInstance(_web3);
    const _tokenContract = createTokenContractInstance(_web3);
    setStakingContract(_stakingContract);
    setTokenContract(_tokenContract);
    const _balaceWei = await _tokenContract.methods.balanceOf(account).call();
    setBalance(_web3.utils.fromWei(_balaceWei));
    const _stakedbalance = await _stakingContract.methods
      .balanceOf(account)
      .call();
    setStakedBalance(_stakedbalance);
  };

  useEffect(() => {
    if (active) {
      load();
    }
  }, [active]);

  const disconnect = useCallback(() => {
    if (provider && provider.close) {
      provider.close();
    }
    setConnected(false);
  }, [provider, setConnected]);

  const reset = useCallback(
    (error) => {
      if (error) {
        console.error(error);
      }
      setConnected(false);
      setProvider(undefined);
    },
    [setConnected, setProvider]
  );

  const modal = new Web3Modal({
    network: "binance",
    providerOptions,
  });

  const connectProvider = useCallback(
    (provider) => {
      console.log("[Web3] Setting up provider");
      const web3 = new Web3(provider);
      Promise.all([
        web3.eth.net.getId().then((net) => setChainId(net.chainId)),
      ]);
    },
    [setChainId]
  );

  const connect = useCallback(() => {
    modal
      .connect()
      .then((provider) => {
        walletConnect(activate);
        provider.on("accountsChanged", ([account]) => {
          console.log("[Web3] accountsChanged");
          connectProvider(provider);
        });

        provider.on("chainChanged", (chainId) => {
          setChainId(parseInt(chainId, 16));
          connectProvider(provider);
        });

        provider.on("connect", ({ chainId }) => {
          console.log("[Web3] Connect");
          setConnected(true);
          setChainId(chainId);
          connectProvider(provider);
        });

        provider.on("disconnect", (error) => {
          console.log("[Web3] Disconnect");
          setConnected(false);
          reset(error);
          console.log(error);
        });

        setProvider(provider);
        setConnected(true);
        connectProvider(provider);
      })
      .catch((error) => console.error(error));
  });

  const walletdeactivate = useCallback(() => {
    disconnect();
    reset();
  }, [disconnect, reset]);

  const handleConnectWallet = () => {
    if (connected) {
      walletdeactivate();
      walletDisconnect(deactivate);
    } else connect();
  };

  const walletConnect = async (activate) => {
    try {
      await activate(injected);
      console.log(active);
    } catch (ex) {
      console.log(ex);
    }
  };

  const walletDisconnect = async (deactivate) => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  const setTransactionPending = (bool) => {
    setTransactionPendingToggle(bool);
  };

  return (
    <div>
      <Introduce scrollClick={scrollClick} />
      <div ref={claimSectionRef}>
        <Claim
          handleConnectWallet={handleConnectWallet}
          stakingContract={stakingContract}
          transactionPending={transactionPending}
          setTransactionPending={setTransactionPending}
        />
      </div>
      <Distribution />
      <div ref={stakeSectionRef}>
        <Stake
          stakingContract={stakingContract}
          tokenContract={tokenContract}
          balance={balance}
          stakedBalance={stakedBalance}
        />
      </div>
      <div ref={farmSectionRef}>
        <Farm />
      </div>
      <ConnectWallet
        handleConnectWallet={handleConnectWallet}
        isWrongChain={error instanceof UnsupportedChainIdError}
      />
    </div>
  );
};

export default Home;
