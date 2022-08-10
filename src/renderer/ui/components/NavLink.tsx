import styled from 'styled-components';
import { NavLink as MuiNavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types

const NavLink = styled(MuiNavLink)`
  && {
    background: white;
    color: black;
    padding: 19px 20px;
    width: 100%;
    font-weight: bold;
    font-size: 0.9375rem;
    text-transform: none;
    text-align: center;
    border-radius: 3px;
    margin-top: 10px;
    transition: all ease-in 0.1s;
    cursor: pointer;
    opacity: 0.9;
  }

  &&:hover {
    background: white;
    transform: scale(1.05);
    opacity: 1;
  }

  @media (min-width: 960px) {
    && {
      font-size: 1.125rem;
    }
  }
`;

export default NavLink;
