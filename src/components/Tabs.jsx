import styled, { css } from "styled-components";

export default function Tabs({ activeMember, setActiveMember }) {
  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    setActiveMember(e.target.textContent);
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tap $actibeMember={activeMember}>Kiin</Tap>
      <Tap $actibeMember={activeMember}>Canyon</Tap>
      <Tap $actibeMember={activeMember}>Chovy</Tap>
      <Tap $actibeMember={activeMember}>Peyz</Tap>
      <Tap $actibeMember={activeMember}>Lehends</Tap>
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
