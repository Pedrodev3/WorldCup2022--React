import React from 'react';
import {
  StyledMain,
  StyledPicture,
  StyledFigure,
} from "../styles/styleFigInter";
import messi from '../assets/internacionais/Messi.jfif'
import cristiano from '../assets/internacionais/Cristiano.jfif'
import deBruyne from '../assets/internacionais/DeBruyne.jpg'
import grealish from '../assets/internacionais/Grealish.jfif'
import lewandoski from '../assets/internacionais/Lwandoski.jpg'
import mbappe from '../assets/internacionais/Mbappe.jpg'
import modric from '../assets/internacionais/Modric.jpg'
import ruiPatricio from '../assets/internacionais/RuiPatricio.jfif'
import varane from '../assets/internacionais/Varane.jfif'
import courtouis from '../assets/internacionais/Courtouis.jpg'
import { useEffect } from "react";

function FigInternacionais() {
  /**
   * O objeto da sessão (sessionStorage) está sendo puxado e 
   * junto com ele é trazido o que foi setado lá na validação que teve no componente "Login",
   * que seria "data.login"
   */
   const verificar = sessionStorage.getItem('usuario-validado')

   /**
    * Para ele ser executado ele precisa que algo ou que um componente seja executado antes
    */
   useEffect(() => {
     if (verificar == null) {
      alert('Precisa estar logado para acessar a página Figurinhas Internacionais')
      window.location = '/';
     }
   }, [verificar])

  return (
    <StyledMain>
      <StyledPicture>
        <StyledFigure src={messi} />
        <StyledFigure src={cristiano} />
        <StyledFigure src={deBruyne} />
        <StyledFigure src={grealish} />
      </StyledPicture>
      <StyledPicture>
        <StyledFigure src={lewandoski} />
        <StyledFigure src={mbappe} />
        <StyledFigure src={modric} />
      </StyledPicture>
      <StyledPicture>
        <StyledFigure src={ruiPatricio} />
        <StyledFigure src={varane} />
        <StyledFigure src={courtouis} />
      </StyledPicture>
    </StyledMain>
  );
}

export default FigInternacionais;