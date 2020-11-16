import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  img {
    width: 100%;
    max-width: 1440px;
    margin: auto;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 8px 27px -2px rgba(0, 0, 0, 0.15);
  border-radius: 0 12px 12px 0;
  padding: 1rem;
  top: 0;
  left: 0;
  position: fixed;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    color: black;
    transition: 0.2s ease-in-out;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;
