import styled from "styled-components";

const Card = styled.div`
  padding: 20px 0;
  margin: 0 10px;
  background: #f2f2f2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemName = styled.div`
  font-family: GothamRnd;
  font-weight: 500;
  opacity: 0.6;
  margin-bottom: 4px;
`;

const ItemValue = styled.div`
  font-family: GothamRnd;
  font-weight: 500;
  line-height: 24px;
`;

const Button = styled.button`
  color: rgb(0, 195, 139);
  cursor: pointer;
  font-family: GothamRnd;
  font-weight: 500;
  line-height: 24px;
`;

const InfoList = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 px-5 mt-16">
      <Card>
        <ItemName>{"TVL"}</ItemName>
        <ItemValue className="flex flex-col justify-center items-center">
          <div className="text-center">{"11,166,226,514,839 SOS"}</div>
          <div className="text-sm leading-4 text-third">{"41,270,400 USD"}</div>
        </ItemValue>
      </Card>
      <Card>
        <ItemName>{"APR"}</ItemName>
        <ItemValue>{"179.11%"}</ItemValue>
      </Card>
      <Card>
        <ItemName>{"Rate"}</ItemName>
        <ItemValue className="text-center">{"1 veSOS = 1.0334 SOS"}</ItemValue>
      </Card>
      <Card>
        <ItemName>{"Balance"}</ItemName>
        <Button>{"Connect wallet"}</Button>
      </Card>
      <Card>
        <ItemName>{"Staked"}</ItemName>
        <Button>{"Connect wallet"}</Button>
      </Card>
    </div>
  );
};

export default InfoList;
