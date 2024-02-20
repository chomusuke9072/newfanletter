import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Avatar from "./common/Avatar";
import { getFormattedDate } from "util/date";

export default function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <Avatar src={letter.avatar} />
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
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
  border: 1px solid #8d7a57e4;
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

const NicknameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.p`
  background-color: #8d7a57e4;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-left: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
