import styled from "styled-components";

import { Images } from "../data/images";

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

const ConnectWallet = () => {
  return (
    <Button>
      <img src={Images.wallet} alt="wallet" className="mr-2" />
      {"Connect wallet"}
    </Button>
  );
};

export default ConnectWallet;
