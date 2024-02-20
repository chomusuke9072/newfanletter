import styled from "styled-components";

export default function Button({ text, onClick = () => {} }) {
  return (
    <BtnWrapper>
      <button onClick={onClick}>{text}</button>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: #464646;
    color: white;
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
`;
