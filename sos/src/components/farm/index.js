import styled from "styled-components";

import TotalValue from "./TotalValue";

const Title = styled.div`
  font-size: 36px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 28px;
`;

const Text = styled.div`
  font-size: 18px;
  font-family: GothamRnd;
  font-weight: 500;
  color: #000;
  line-height: 26px;
`;

const Footer = styled.div`
  line-height: 38px;
  padding-left: 15px;
  text-align: center;
  font-family: GothamRnd;
  font-weight: 500;
  margin-top: 200px;
`;

const Farm = () => {
  return (
    <div className="bg-farm pt-24 pb-10 bg-no-repeat bg-bottom px-5%">
      <Title className="text-center">{"Liquidity Incentive"}</Title>
      <Text className="text-center mt-16">
        {" 10% of total $SOS is reserved for liquidity incentive. "}
        <br />
        {"$SOS / $WETH Onsen pool is now live at "}
        <a
          target="_blank"
          href="https://app.sushi.com/farm"
          rel="noreferrer"
          className="text-primary"
        >
          {"app.sushi.com/farm"}
        </a>
      </Text>
      <div>
        <TotalValue />
      </div>
      <Footer>{"© 2021 by SOS"}</Footer>
    </div>
  );
};

export default Farm;
