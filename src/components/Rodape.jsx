import React from "react";

function Rodape() {
  const footerUl = {
    borderTop: '1px solid black',
    borderRadius: '.8rem',
    width: '100vw',
    minHeight: '5vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    listStyle: 'none',
  }
  const footerLi = {
    paddingTop: '3.5rem',
    fontSize: '.9rem',
  }

  return (
    <>
      <ul style={footerUl}>
        <li style={footerLi}>Nome: Daniel Henrique  <br/> RM: 94615</li>
        <li>Nome: Luis Felipe  <br/> RM: 94051</li>
        <li>Nome: Lucas Guerra <br/> RM: 95084</li>
        <li>Nome: Pedro Chueiri <br/> RM: 93939</li>
        <li>Nome: Pedro Victor <br/> RM: 93627</li>
      </ul>
    </>
  );
}

export default Rodape;
