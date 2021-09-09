import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  a {
    text-decoration: none;
    color: #000000;
    margin-left: 15px;
    font-size: 1.5rem
  }
  .brand {
    width: 100%;
  }
  .brand a {
    margin-left: 0;
  }
  .hamburguer-menu-wrapper {
    min-width: max-content;
  }
  .hamburguer-menu-wrapper .brand a.logo {
    font-size: 2.5rem;
    font-weight: bold;
  }
  a {
    margin-top: 0;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    .hamburguer-menu-wrapper {
      display: flex;
      width: 100%;
    }
    a {
      font-size: 2rem;
      margin-left: 0;
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
  .header-links {
    align-items: center;
  }
  .header-links a {
    font-size: 2.5rem;
    align-items: center;
  }
  .header-links .cart {
    position: relative;
    margin: 0;
  }
  .header-links a .icon {
    display: initial;
    
  }
  .header-links a .link-title {
    display: none;
  }
  .header-links a.button, button.button {
    font-size: 1.5rem;
    padding: 5px 15px;
    border-radius: 7px;
    margin: 0px 5px;
  }
  .header-links a.button.left {
    background: black;
    color: white;
    padding: 5px 15px;
    border: 1px solid black;
  }
  .header-links a.button.left:hover {
    background: none;
    color: black;
  }
  .header-links a.button.right {
    border: 1px solid black;
  }
  .header-links a.button.right:hover {
    background: black;
    color: white;
  }
  .header-links .button.danger {
    color: red;
    border: 1px solid red;
    background: none;
  }
  .header-links .button.danger:hover {
    background: red;
    color: white;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    display: none;
    .header-links {
      align-items: start;
    }
    .header-links a {
      font-size: 2rem;
    }
    .header-links a.button.right,
    .header-links a.button.left,
    .header-links a.button.danger {
      border: none;
      background: none;
      color: black;
      font-size: 2rem;
      margin: 10px 0 0 0;
      padding: 0;
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
