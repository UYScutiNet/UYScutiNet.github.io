import styled from "styled-components";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";

import { Images } from "../../data/images";
import { Button, TitleTwo } from "../Styled";
import { humanReadableAccount } from "../../core";

const Container = styled.div`
  padding: 5rem 5%;
`;

const StepTitle = styled.div`
  font-size: 24px;
  font-family: Gotham;
  color: #000;
  line-height: 60px;
  border-bottom: 4px solid #000;
`;

const StepTopicTitle = styled.div`
  font-size: 28px;
  font-family: Gotham;
  color: #000;
  text-align: left;
  line-height: 40px;
  margin-top: 15px;
`;

const EstimateLine = styled.div`
  line-height: 38px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-family: GothamRnd;
`;

const ClaimTotal = styled.div`
margin-top: 20px;
padding-top: 10px;
display: flex;
justify-content: space-between;
border-top: 1px solid #000;
font-size:24px;
line-height: 38px;
font-weight: 500;
font-family: GothamRnd;
}`;

const AddBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 48px;
  border-radius: 4px;
  border: 2px solid #00c38bff;
  font-family: GothamRnd;
  font-weight: 500;
  color: #00c38b;
  transition: all 0.4s ease;
  &:hover {
    background: #00c38bff;
    color: #fff;
  }
`;

const Claim = ({
  handleConnectWallet,
  stakingContract,
  transactionPending,
  setTransactionPending,
}) => {
  const { active, account } = useWeb3React();

  const addToken = () => {
    const web3 = new Web3(Web3.givenProvider);
    web3.currentProvider.sendAsync(
      {
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0xA6f4d3105bFE3BC5F8625007234A19FF4eA8d26d",
            symbol: "KKK",
            decimals: 18,
          },
        },
        id: 20,
      },
      console.log
    );
  };

  const handleClaim = () => {
    if (!stakingContract) {
      toast.warn("connect wallet", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const id = toast.loading("Transaction pending");
      setTransactionPending(true);
      stakingContract.methods
        .getReward()
        .send({ from: account })
        .once("receipt", (receipt) => {
          toast.update(id, {
            render: "Successfully Claimed",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          console.log(receipt);
          setTransactionPending(false);
        });
    }
  };

  return (
    <Container>
      <TitleTwo text="CLAIM">{"CLAIM"}</TitleTwo>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div>
          <StepTitle>
            {"STEP"}&nbsp;&nbsp;{"1"}
          </StepTitle>
          <StepTopicTitle>
            {"CONNECT"}
            <br /> {"YOUR WALLET"}
          </StepTopicTitle>
          <div className="mt-6">
            <Button
              onClick={handleConnectWallet}
              width="200"
              height="48"
              className="bg-secondary"
            >
              {active
                ? account
                  ? humanReadableAccount(account)
                  : "Connect wallet"
                : "Connect wallet"}
            </Button>
          </div>
        </div>
        <div className="col-span-2">
          <StepTitle>
            {"STEP"}&nbsp;&nbsp;{"2"}
          </StepTitle>
          <StepTopicTitle>{"ESTIMATE YOUR REWARD"}</StepTopicTitle>
          <div className="flex justify-between mt">
            <div>
              <div>{"$$ spent on OpenSea"}</div>
              <EstimateLine>
                <div className="opacity-60">{"ETH"}</div>
                <div>{"0.00"}</div>
              </EstimateLine>
              <EstimateLine>
                <div className="opacity-60">{"DAI"}</div>
                <div>{"0.00"}</div>
              </EstimateLine>
              <EstimateLine>
                <div className="opacity-60">{"USDC"}</div>
                <div>{"0.00"}</div>
              </EstimateLine>
              <EstimateLine>
                <div className="opacity-60">{"Multiplier"}</div>
                <div>{"0.7"}</div>
              </EstimateLine>
              <EstimateLine>
                <div className="opacity-60">{"Sub-Total"}</div>
                <div className="flex justify-center items-center">
                  {"0.00"}
                  <img
                    src={Images.price}
                    alt="price"
                    height={18}
                    width={18}
                    className="ml-2"
                  />
                </div>
              </EstimateLine>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div>{"# of transaction on OpenSea"}</div>
                <EstimateLine>
                  <div className="opacity-60">{"Transaction"}</div>
                  <div>{"0"}</div>
                </EstimateLine>
                <EstimateLine>
                  <div className="opacity-60">{"Multiplier"}</div>
                  <div>{"0.3"}</div>
                </EstimateLine>
              </div>
              <EstimateLine>
                <div className="opacity-60">{"Sub-Total"}</div>
                <div className="flex justify-center items-center">
                  {"0.00"}
                  <img
                    src={Images.price}
                    alt="price"
                    height={18}
                    width={18}
                    className="ml-2"
                  />
                </div>
              </EstimateLine>
            </div>
          </div>
          <ClaimTotal>
            <div>{"$SOS reward"}</div>
            <div className="flex justify-center items-center">
              {"0.00"}
              <img
                src={Images.price}
                alt="price"
                height={18}
                width={18}
                className="ml-2"
              />
            </div>
          </ClaimTotal>
        </div>
        <div>
          <StepTitle>
            {"STEP"}&nbsp;&nbsp;{"3"}
          </StepTitle>
          <StepTopicTitle>
            {"INITIATE"}
            <br /> {"YOUR CLAIM"}
          </StepTopicTitle>
          <div className="mt-6 flex">
            <Button
              onClick={handleClaim}
              width="200"
              height="48"
              textBase
              className={
                active && !transactionPending
                  ? "cursor-pointer bg-secondary"
                  : "cursor-not-allowed bg-disable"
              }
            >
              {"Claim Airdrop"}
            </Button>
            <AddBtn className="ml-4" onClick={addToken}>
              {"Add $SOS"}
            </AddBtn>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Claim;
