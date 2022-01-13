import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import { Images } from "../data/images";
import { humanReadableAccount } from "../core";

const Button = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  top: 30px;
  right: 5%;
  cursor: pointer;
  border-radius: 40px;
  border: 1px solid #000;
  font-size: 24px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 76px;
  padding: 0 40px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 48px;
  }
`;

const ConnectWallet = ({ handleConnectWallet, isWrongChain }) => {
  const { active, account } = useWeb3React();

  return (
    <div>
      <Button onClick={() => handleConnectWallet()}>
        <img src={Images.wallet} alt="wallet" className="mr-2" />
        {isWrongChain
          ? "wrong chain"
          : active
          ? account
            ? humanReadableAccount(account)
            : "Connect wallet"
          : "Connect wallet"}
      </Button>
    </div>
  );
};

export default ConnectWallet;
