import styled, { css } from "styled-components";
import defaultUser from "assets/user.png";

export default function Avatar({ src, size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src ?? defaultUser} alt="아바타이미지" />
    </AvatarFigure>
  );
}

const AvatarFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 5rem;
          height: 5rem;
        `;
      default:
        return css`
          width: 3.5rem;
          height: 3.5rem;
        `;
    }
  }}
  border-radius: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
