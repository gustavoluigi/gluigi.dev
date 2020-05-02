import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1315px;
  margin: 0px auto;
  position: fixed;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.5rem 0;

  img {
    width: 150px;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;
