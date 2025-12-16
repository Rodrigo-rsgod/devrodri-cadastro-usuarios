import styled from "styled-components";

export const Button = styled.button`
  border: none;
  font-size: 22px;
  padding: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 500;

  background: ${({ $variant }) =>
    $variant === 'primary'
      ? 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)'
      : 'transparent'};

  color: ${({ $variant }) =>
    $variant === 'primary' ? '#fff' : '#5f5f5fff'};

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1.05);
      opacity: 0.7;
    }
  `}
`;