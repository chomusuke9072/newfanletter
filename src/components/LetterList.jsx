import LetterCard from "./LetterCard";
import styled from "styled-components";

export default function LetterList({ activeMember, letters }) {
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
        <LetterCard key={letter.id} letter={letter} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: #464646;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 31rem;
  border-radius: 0.8rem;
  padding: 1rem;
`;
