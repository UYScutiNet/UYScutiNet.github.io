import styled from "styled-components";

import InfoList from "./InfoList";
import Operation from "./Operation";

const Title = styled.div`
  font-size: 36px;
  font-family: Gotham;
  font-weight: 400;
  color: #000;
  line-height: 28px;
`;

const Stake = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-32 pb-20 px-5%">
      <Title className="text-center mb-32">{"Staking Incentive"}</Title>
      <div>
        {
          "20% of total $SOS is available for staking incentive. The first OpenDAO Improvement Proposal has passed with 64.36%, agreeing to a 1-year linear release schedule. You can find the Snapshot"
        }
        <a
          href="https://snapshot.org/#/theopendao.eth/proposal/"
          target="_blank"
          className="text-secondary"
        >
          {"here."}
        </a>
        <br />
        <br />
        {
          "For every $SOS staked, you will receive $veSOS in return. $veSOS comes with full voting rights at theopenDao and can be used as the governance token in other protocols/projects. It may also receive potential airdrops from other projects. $veSOS is automatically compounded for your benefit. Upon unstaking, you will receive your original $SOS plus any additional $SOS from official staking pool or other revenue sources. "
        }
        <span className="text-secondary">Add $veSOS</span>
      </div>
      <InfoList />
      <div className="grid md:grid-cols-2 grid-cols-1">
        <Operation type="stake" />
        <Operation type="unstake" />
      </div>
    </div>
  );
};

export default Stake;
