import styled from "styled-components";

export const Text = styled.div`
  font-size: 20px;
  color: #333;
  font-family: GothamRnd;
  font-weight: 500;
  min-height: 25.6px;
  line-height: 41px;
  max-width: 591px;
  margin: 0 auto;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Title = styled.div`
  font-size: 100px;
  color: #00c38b;
  font-family: Gotham;
  @media (max-width: 1023px) {
    font-size: 60px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

export const TitleTwo = styled.div`
  position: relative;
  font-family: Gotham;
  font-size: 60px;
  color: #00c38b;
  text-align: center;
  &:after {
    position: absolute;
    content: "${(props) => props.text}";
    font-size: 110px;
    color: #00b380;
    opacity: 0.08;
    transform: translate(-50%, -50%);
    top: 10%;
    left: 50%;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 4px;
  font-size: ${(props) => (props.textBase ? "16px" : "18px")};
  font-weight: 500;
  color: ${(props) => (props.disabled ? "#ccc" : "#fff")};
  transition: all ease 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    font-size: 14px;
    width: ${(props) => props.width * 0.7}px;
  }
`;
