import styled from "styled-components";
import defaultUser from "../assets/user.png";

export default function LetterCard({ letter }) {
  const formattedDate = new Date(letter.createdAt).toLocaleDateString("ko", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <LetterWrapper>
      <UserInfo>
        <AvatarFigure>
          <img src={letter.avatar ?? defaultUser} alt="아바타이미지" />
        </AvatarFigure>
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{formattedDate}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const AvatarFigure = styled.figure`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const NicknameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.p`
  background-color: black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-left: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
