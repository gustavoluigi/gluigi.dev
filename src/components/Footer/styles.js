import styled from 'styled-components';

export const Footer = styled.footer`
  max-width: 1315px;
  margin: 0px auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.5rem 0;

  a {
    color: ${props => props.theme.text};
    /* font-size: 2.5rem; */
    font-size: 4rem;
    transition: .2s ease-in-out;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    &:hover {
      color: ${props => props.theme.primary};
    }
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;

    a {
      /* font-size: 1.75rem; */
      font-size: 3rem;
    }
  }
`;
