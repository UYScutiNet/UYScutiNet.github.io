import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ButtonItem = styled.div`
  padding: 6px 10px;
  line-height: 24px;
  opacity: 0.6;
  font-family: GothamRnd;
  &:hover {
    font-weight: 900;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  border: 1px solid #00c38b;
  outline: none;
  padding: 0 30px 0 15px;
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  color: #fff;
  padding: 12px 20px;
  border-radius: 0 5px 5px 0;
`;

const ApproveStake = ({ stakingContract, tokenContract, balance }) => {
  const { account, active } = useWeb3React();
  const [status, setStatus] = useState("");
  const [stakeAmount, setStakeAmount] = useState(0);

  const handleClick = () => {
    if (!tokenContract) {
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
      if (stakeAmount === 0) {
        toast.warn("enter amount", {
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
        if (status === "approved") {
          stakingContract.methods
            .stake(stakeAmount)
            .send({ from: account })
            .once("receipt", (receipt) => {
              toast.update(id, {
                render: "Successfully Staked",
                type: "success",
                isLoading: false,
                autoClose: 3000,
              });
              setStatus("");
              console.log(receipt);
            });
        } else {
          tokenContract.methods
            .approve("0x13dF370f0d99f65031E155737c78a88c2EcA53d4", stakeAmount)
            .send({ from: account })
            .once("receipt", (receipt) => {
              toast.update(id, {
                render: "Successfully Approved",
                type: "success",
                isLoading: false,
                autoClose: 3000,
              });
              console.log(receipt);
              setStatus("approved");
            });
        }
      }
    }
  };

  const CalculatePercent = (percent) => {
    setStakeAmount((balance * percent) / 100);
  };

  return (
    <div>
      <ToastContainer
        className="fixed top-0"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col items-center p-7">
        <div>{"Stake SOS"}</div>
        <div className={"flex"}>
          <ButtonItem
            onClick={() => CalculatePercent(25)}
            className={active ? "cursor-pointer" : "cursor-not-allowed"}
          >
            {"25%"}
          </ButtonItem>
          <ButtonItem
            onClick={() => CalculatePercent(50)}
            className={active ? "cursor-pointer" : "cursor-not-allowed"}
          >
            {"50%"}
          </ButtonItem>
          <ButtonItem
            onClick={() => CalculatePercent(75)}
            className={active ? "cursor-pointer" : "cursor-not-allowed"}
          >
            {"75%"}
          </ButtonItem>
          <ButtonItem
            onClick={() => CalculatePercent(100)}
            className={active ? "cursor-pointer" : "cursor-not-allowed"}
          >
            {"100%"}
          </ButtonItem>
        </div>
        <div className="flex w-full">
          <Input
            type="text"
            placeholder={"Please enter SOS"}
            value={stakeAmount}
            onChange={(e) => {
              setStakeAmount(e.target.value);
            }}
          />
          <Button
            onClick={handleClick}
            className={
              active
                ? "cursor-pointer bg-secondary"
                : "cursor-not-allowed bg-disable"
            }
          >
            {status === "approved" ? "Stake" : "Approve"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApproveStake;
