import styled from "styled-components";

const ButtonItem = styled.div`
  padding: 6px 10px;
  cursor: pointer;
  line-height: 24px;
  opacity: 0.6;
  font-family: GothamRnd;
  &:hover {
    font-weight: 900;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  border: 1px solid
    ${(props) => (props.sort === "stake" ? "#00c38b" : "#6ea8e7")};
  outline: none;
  padding: 0 30px 0 15px;
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  background: ${(props) => (props.sort === "stake" ? "#00c38b" : "#6ea8e7")};
  border-color: ${(props) => (props.sort === "stake" ? "#00c38b" : "#6ea8e7")};
  color: #fff;
  padding: 12px 20px;
  border-radius: 0 5px 5px 0;
`;

const Operation = ({ type }) => {
  return (
    <div className="flex flex-col items-center p-7">
      <div>{type === "stake" ? "Stake SOS" : "Unstake veSOS"}</div>
      <div className="flex">
        <ButtonItem>{"25%"}</ButtonItem>
        <ButtonItem>{"50%"}</ButtonItem>
        <ButtonItem>{"75%"}</ButtonItem>
        <ButtonItem>{"100%"}</ButtonItem>
      </div>
      <div className="flex w-full">
        <Input
          type="text"
          placeholder={
            type === "stake" ? "Please enter SOS" : "Please enter veSOS"
          }
          sort={type}
        />
        <Button sort={type}>{type === "stake" ? "Approve" : "Unstake"}</Button>
      </div>
    </div>
  );
};

export default Operation;
