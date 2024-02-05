import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate } from "util/date";

export default function Detail({ letters }) {
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );
  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="홈으로" />
        </HomeBtn>
      </Link>
      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>{nickname}</Nickname>
          </AvatarAndNickname>
          <time>{getFormattedDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To: {writedTo}</ToMember>
        <Content>{content}</Content>
        <BtnsWrapper>
          <Button text="수정" />
          <Button text="삭제" />
        </BtnsWrapper>
      </DetailWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
`;

const DetailWrapper = styled.section`
  background-color: #8d7a57e4;
  color: white;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 44rem;
  min-height: 25rem;
  border-radius: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Nickname = styled.span`
  font-size: 2rem;
`;

const ToMember = styled.span`
  font-size: 1.5rem;
`;

const Content = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0.8rem;
  background-color: #464646;
  border-radius: 0.8rem;
  height: 12.5rem;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;
