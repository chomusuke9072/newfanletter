import { useState } from "react";
import styled, { css } from "styled-components";

export default function Tabs() {
  const [actibeMember, setActiveMember] = useState("Kiin");

  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    setActiveMember(e.target.textContent);
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tap $actibeMember={actibeMember}>Kiin</Tap>
      <Tap $actibeMember={actibeMember}>Canyon</Tap>
      <Tap $actibeMember={actibeMember}>Chovy</Tap>
      <Tap $actibeMember={actibeMember}>Peyz</Tap>
      <Tap $actibeMember={actibeMember}>Lehends</Tap>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;

const Tap = styled.li`
  cursor: pointer;
  background-color: white;
  font-size: 0.9rem;
  width: 5rem;
  text-align: center;
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;

  ${(props) => {
    if (props.$actibeMember === props.children) {
      return css`
        border: 6px solid #8d7a57e4;
        color: #8d7a57e4;
      `;
    }
    return css`
      border: 6px solid gray;
      color: gray;
    `;
  }}
`;
