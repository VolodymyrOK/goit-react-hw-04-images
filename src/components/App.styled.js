import styled from 'styled-components';
import background from '../images/funart.jpg';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 16px; */
  padding-bottom: 24px;
  align-content: space-between;
  &:before {
    content: '';
    background-image: linear-gradient(
        rgba(106, 191, 235, 0),
        rgba(106, 191, 235, 1)
      ),
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }
`;

export const Loading = styled.div`
  font-size: 58px;
  font-weight: 500;
`;

export const CountPages = styled.div`
  top: 22px;
  margin-left: auto;
  margin-right: 20px;
  position: sticky;
  z-index: 1100;
  font-size: 24px;
  font-weight: 500;
  background-color: transparent;
  color: white;
`;
