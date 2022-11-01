import React from "react";
import { Link } from "react-router-dom";
import { StyledUl, StyledLi, StyledButton } from "../styles/styleMenu";

function Menu() {

  const logout = () => {
    sessionStorage.removeItem('usuario-validado');
    window.location = '/';
  }

  const usuario = sessionStorage.getItem('usuario-validado');

  return (
    <>
      <StyledUl>
        <Link to="/">
          <StyledLi>Login</StyledLi>
        </Link>
        <Link to="/home">
          <StyledLi>Home</StyledLi>
        </Link>
        <Link to="/figNacionais">
          <StyledLi>Figurinhas Nacionais</StyledLi>
        </Link>
        <Link to="/figInternacionais">
          <StyledLi>Figurinhas Internacionais</StyledLi>
        </Link>
        <StyledLi><StyledButton onClick={logout}><strong>{ usuario } </strong>Logout</StyledButton></StyledLi>
      </StyledUl>
    </>
  );
}

export default Menu;
