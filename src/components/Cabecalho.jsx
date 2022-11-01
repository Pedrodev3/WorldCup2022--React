import React from "react";

export default function Cabecalho() {
  const header = {
    width: '100vw',
    minHeight: '10vh',
    display: 'grid',
    placeItems: 'center',
    fontSize: 'max("1.3vw", "1.5rem")',
  }

  return (
    <>
      <h1 style={header}>FIAP na COPA</h1>
    </>
  );
}

