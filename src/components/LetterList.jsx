import { useContext } from "react";
import LetterCard from "./LetterCard";
import styled from "styled-components";
import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";

export default function LetterList() {
  const { activeMember } = useContext(MemberContext);
  const { letters } = useContext(LetterContext);
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
          되보세요!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
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
  color: white;
`;
