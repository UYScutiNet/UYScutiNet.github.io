import { useState } from "react";
import styled from "styled-components";

const ButtonWrap = styled.div`
  display: flex;
  width: 114px;
  height: 36px;
  background: #f2f2f2;
  border-radius: 18px;
`;

const Button = styled.button`
  color: ${(props) => (props.active ? "#fff" : "000")};
  background: ${(props) => (props.active ? "#00c38b" : "#f2f2f2")};
  border-radius: 15px;
  line-height: 33px;
  line-height: 36px;
  font-size: 14px;
  font-family: GothamRnd;
  font-weight: 500;
  width: 50%;
`;

const TotalValue = () => {
  const [currency, setCurrency] = useState("USD");
  return (
    <div className="flex items-center justify-center mt-12 flex-wrap">
      <ButtonWrap className="mb-5">
        <Button
          onClick={() => {
            setCurrency("USD");
          }}
          active={currency === "USD"}
        >
          {"USD"}
        </Button>
        <Button
          onClick={() => {
            setCurrency("ETH");
          }}
          active={currency === "ETH"}
        >
          {"ETH"}
        </Button>
      </ButtonWrap>
      <div className="flex mb-5">
        <div className="flex mx-10">
          <div>{"Total Value Locked: "}</div>
          <div>{currency === "USD" ? "$11.74 mil" : "3,898.53 ETH"}</div>
        </div>
        <div className="flex">
          <div>{"APY: "}</div>
          <div>{"472.01%"}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalValue;
