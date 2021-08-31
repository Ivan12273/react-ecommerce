import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  
  a {
    text-decoration: none;
    color: #000000;
    margin-left: 1.5rem;
    font-size: 1.5rem
  }
  .brand {
    width: 100%;
  }
  .hamburguer-menu-wrapper {
    width: 20%;
  }
  .hamburguer-menu-wrapper .brand a.logo {
    font-size: 2.5rem;
    font-weight: bold;
  }
  a {
    margin-top: 0;
  }
  @media (max-width: 1015px) {
    .hamburguer-menu-wrapper {
      width: 25%;
    }
  }
  @media (max-width: 870px) {
    .hamburguer-menu-wrapper {
      width: 30%;
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;

    .hamburguer-menu-wrapper {
      display: flex;
      width: 100%;
    }
    a {
      font-size: 2rem;
      margin-top: 10px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
  }
  .header-links a {
    font-size: 2.5rem;
  }
  .header-links a .icon {
    display: initial;
  }
  .header-links a .link-title {
    display: none;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    display: none;
    .header-links a {
      font-size: 2rem;
    }
    &.open {
      display: inherit;
    }
    div {
      flex-direction: column;
      align-items: start;
    }
    .header-links a .icon {
      display: none;
    }
    .header-links a .link-title {
      display: initial;
    }
  }
`;

export const HamburguerMenuButton = styled.button`
  background: none;
  font-size: 2.5rem;
  border: none;
  display: none;
  @media (max-width: 769px) {
    display: inherit;
  }
`;
