import Tabs from "./Tabs";
import styled from "styled-components";
import Gen from "../assets/Gen.jpg";

export default function Header({ activeMember, setActiveMember }) {
  return (
    <Container>
      <Title>젠지 선수 응원 페이지</Title>
      <Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  background-image: url(${Gen});
  background-size: 30%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
`;
