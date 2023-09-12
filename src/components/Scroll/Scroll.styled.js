import styled from 'styled-components';

export const ButtonUp = styled.button`
  position: fixed;
  font-size: 30px;
  bottom: 50px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: yellow;
  background-color: #3f51b5;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 250ms ease-in, scale 250ms ease-in,
    box-shadow 250ms ease-in;
  &:is(:hover, :focus) {
    opacity: 1;
    scale: 0.9;
    box-shadow: 0px 0px 21px 2px rgba(10, 36, 105, 0.73);
    -webkit-box-shadow: 0px 0px 21px 2px rgba(10, 36, 105, 0.73);
    -moz-box-shadow: 0px 0px 21px 2px rgba(10, 36, 105, 0.73);
  }
`;
