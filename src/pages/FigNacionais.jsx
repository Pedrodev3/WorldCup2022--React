import React from "react";
import {
  StyledMain,
  StyledPicture,
  StyledFigure,
} from "../styles/styleFigNan";
import neymar from "../assets/nacionais/Neymar.png"
import alisson from "../assets/nacionais/Alisson.png"
import cafu from "../assets/nacionais/Cafu.png"
import casemiro from "../assets/nacionais/Casemiro.png"
import coutinho from "../assets/nacionais/Coutinho.png"
import danilo from "../assets/nacionais/Danilo.png"
import marquinhos from "../assets/nacionais/Marquinhos.png"
import pedro from "../assets/nacionais/Pedro.png"
import thiago from "../assets/nacionais/Thiago.png"
import vini from "../assets/nacionais/vini.png"
import { useEffect } from "react";

function FigNacionais() {
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
      alert('Precisa estar logado para acessar a página Figurinhas Nacionais')
      window.location = '/';
     }
   }, [verificar])

  return (
    <StyledMain>
      <StyledPicture>
        <StyledFigure src={neymar} />
        <StyledFigure src={alisson} />
        <StyledFigure src={cafu} />
        <StyledFigure src={casemiro} />
      </StyledPicture>
      <StyledPicture>
        <StyledFigure src={coutinho} />
        <StyledFigure src={danilo} />
        <StyledFigure src={marquinhos} />
      </StyledPicture>
      <StyledPicture>
        <StyledFigure src={pedro} />
        <StyledFigure src={thiago} />
        <StyledFigure src={vini} />
      </StyledPicture>
    </StyledMain>
  );
}

export default FigNacionais;
