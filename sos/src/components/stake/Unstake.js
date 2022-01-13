import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { toast } from "react-toastify";

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
  border: 1px solid #6ea8e7;
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

const Unstake = ({ stakingContract, stakedBalance }) => {
  const { account, active } = useWeb3React();
  const [unstakeAmount, setUnstakeAmount] = useState(0);

  const handleClick = () => {
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
      if (unstakeAmount > stakedBalance) {
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
        stakingContract.methods
          .withdraw(unstakeAmount)
          .send({ from: account })
          .once("receipt", (receipt) => {
            toast.update(id, {
              render: "Successfully Unstaked",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            console.log(receipt);
          });
      }
    }
  };

  const CalculatePercent = (percent) => {
    setUnstakeAmount((stakedBalance * percent) / 100);
  };
  return (
    <div className="flex flex-col items-center p-7">
      <div>{"Unstake veSOS"}</div>
      <div className="flex">
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
          placeholder={"Please enter veSOS"}
          value={unstakeAmount}
          onChange={(e) => {
            setUnstakeAmount(e.target.value);
          }}
        />
        <Button
          onClick={handleClick}
          className={
            active
              ? "cursor-pointer bg-primary"
              : "cursor-not-allowed bg-disable"
          }
        >
          {"Unstake"}
        </Button>
      </div>
    </div>
  );
};

export default Unstake;
