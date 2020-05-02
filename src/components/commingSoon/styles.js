import styled from 'styled-components';

export const Container = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1315px;
  margin: 0px auto;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`

export const Title = styled.h1 `
  color: ${props => props.theme.text};
  font-weight: 900;
  font-size: 4rem;

  small {
    display: block;
    font-size: 2rem;
  }

  a {
    color: ${props => props.theme.primary};
    position: relative;
    text-decoration: none;
    transition: .2s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      width: 100%;
      height: 0.5rem;
      bottom: 0;
      z-index: -1;
      transform: rotate(-1deg);
      background: ${props => props.theme.text};
      transition: .2s ease-in-out;
    }

    &:hover {
      color: ${props => props.theme.text};

      &:before {
        background: ${props => props.theme.primary};
      }
    }
  }

  @media (max-width: 767px) {
    font-size: 2.1rem;
    text-align: center;

    small {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`
