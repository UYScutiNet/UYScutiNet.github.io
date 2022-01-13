import styled from "styled-components";

import { Images } from "../../data/images";
import { TitleTwo } from "../Styled";
import Chart from "../chart";

const TextOne = styled.div`
  font-size: 18px;
  font-family: GothamRnd;
  font-weight: 500;
  color: #000;
  line-height: 26px;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
`;

const ContentTitle = styled.div`
  font-size: 24px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 28px;
`;

const WarningText = styled.div`
  height: 28px;
  font-size: 12px;
  font-family: GothamRnd;
  font-weight: 500;
  color: #ea3a3a;
  line-height: 18px;
  margin-top: 15px;
`;

const ContentSubtitle = styled.div`
  font-size: 14px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 24px;
  margin-top: 24px;
`;

const ContentList = styled.ul`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-family: GothamRnd;
  font-weight: 500;
  color: #000;

  list-style-image: url(${(props) => props.listStyleImage});
  list-style-position: inside;
`;

const TextTwo = styled.div`
  font-size: 14px;
  font-family: GothamRnd;
  font-weight: 500;
  color: #000;
  line-height: 24px;
`;

const ChartWrap = styled.div`
  font-size: 14px;
  font-family: GothamRnd;
  font-weight: 400;
`;

const Pietitle = styled.div`
  font-size: 18px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 38px;
`;

const Distribution = () => {
  return (
    <div className="px-5% bg-distribution bg-bottom bg-no-repeat">
      <TitleTwo text="DISTRIBUTION" className="mb-10">
        {"DISTRIBUTION"}
      </TitleTwo>
      <TextOne>
        {
          "$SOS is grateful to all NFT creators, collectors and markets for nurturing the entire NFT ecosystem. Special thanks go to OpenSea for its leadership in promoting NFT trading. To pay tribute, we have chosen OpenSea collectors to conduct our airdrop."
        }
      </TextOne>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-10">
        <div>
          <ContentTitle>{"$SOS Token Distribution"}</ContentTitle>
          <WarningText>
            {"The $SOS contract is 0x3b484b82567a09e2588a13d54d032153f0c0aee0"}
          </WarningText>
          <ContentSubtitle>
            {
              "There will be 100 trillion total $SOS tokens, and the distribution is as follows"
            }
          </ContentSubtitle>
          <ContentList
            listStyleImage={Images.listStyleImage}
            fontSize="14px"
            lineHeight="32px"
            className="mt-4"
          >
            <li>{"50% airdrop to OpenSea users"}</li>
            <li>{"20% Staking Incentive"}</li>
            <li>{"20% OpenDAO"}</li>
            <li>{"10% LP incentives"}</li>
          </ContentList>
          <ContentTitle className="mt-20">{"OpenDAO"}</ContentTitle>
          <ContentSubtitle>
            {"20% of $SOS is allocated to the OpenDAO, it will"}
          </ContentSubtitle>
          <ContentList
            listStyleImage={Images.listStyleImage}
            fontSize="14px"
            lineHeight="32px"
            className="mt-4"
          >
            <li>{"Compensate verified scam victims on OpenSea with $SOS"}</li>
            <li>{"Support emerging artists and their original work"}</li>
            <li>{"Support NFT communities"}</li>
            <li>{"Support art preservation"}</li>
            <li>{"Developer grant for participating in $SOS ecosystem"}</li>
          </ContentList>
        </div>
        <div>
          <ContentTitle>{"Airdrop to OpenSea Users"}</ContentTitle>
          <TextTwo className="mt-4">
            {
              "50% of $SOS token will be distributed to all addresses that have traded on OpenSea since day 1. The snapshot is taken on 23 Dec 2021 12:00 (UTC) at block 13858107. "
            }
            <br />
            {
              "The distribution is based on the total number of transactions (30% weight) and transaction volume on ETH, DAI & USDC (70% weight) on OpenSea. Users have until January 12, 2022 to claim their tokens, after which any remaining tokens will be sent to the DAO treasury. "
            }
          </TextTwo>
          <div className="relative mt-5">
            <ChartWrap>
              <Chart />
            </ChartWrap>
            <div className="absolute top-20% sm:top-1/4 md:top-20% xl:top-1/4 left-0">
              <Pietitle>{"OpenDao - 20%"}</Pietitle>
              <ContentList
                listStyleImage={Images.listStyleImage}
                fontSize="12px"
                lineHeight="20px"
                className="mt-6 3xl:mt-16"
              >
                <li>{"Compensate Victims"}</li>
                <li>{"Support emerging artists"}</li>
                <li>{"Support NFT communities"}</li>
                <li>{"Support art preservation"}</li>
                <li>{"Developer Grant"}</li>
              </ContentList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
