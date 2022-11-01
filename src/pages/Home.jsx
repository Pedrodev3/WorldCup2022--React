import React, { useEffect } from "react";
import {
  StyledMain,
  StyledSection,
  StyledH1,
  StyledH2,
  StyledPicture,
  StyledFigure,
  StyledFig,
} from "../styles/styleHome";
import nacional from "../assets/paginas/nacional1.jpg";
import internacional from "../assets/paginas/internacional1.jpg";

function Home() {

  /**
   * O objeto da sessão (sessionStorage) está sendo puxado e 
   * junto com ele é trazido o que foi setado lá na validação que teve no componente "Login",
   * que seria "data.login"
   */
  const verificar = sessionStorage.getItem('usuario-validado')

  /**
   * O Item que está sendo pego no sessionStorage é uma String com todos os dados do usuário específico logado, 
   * e terá que ser convertido para JSON para pegar a propriedade específica que quero trazer
   */
  const usuario = JSON.parse(sessionStorage.getItem('usuarioObj'))

  /**
   * Para ele ser executado ele precisa que algo ou que um componente seja executado antes
   */
  useEffect(() => {
    if (verificar == null) {
      alert('Precisa estar logado para acessar a página Home')
      window.location = '/';
    }
  }, [verificar])

  return (
    <>
      <StyledMain>
        <StyledH1>Bem vindo {usuario.login}!</StyledH1>
        <StyledH2>
          <br />
          A Copa do Mundo é a maior competição esportiva do mundo e isso não é
          surpresa para ninguém. Entretanto, quando falamos desse campeonato não
          podemos esquecer de outra característica que se tornou tradição há
          muito tempo (principalmente para nós brasileiros), que é nada mais
          nada menos que o ato de colecionar e trocar figurinhas dos principais
          craques que representam esse esporte.
        </StyledH2>
        <StyledSection>
          <StyledPicture>
            <StyledFigure src={nacional} />
            <StyledFig>
              <strong>Figurinhas Nacionais:</strong> Primeira Página Relacionada as figurinhas
              dos principais jogadores do futebol brasileiro.
            </StyledFig>
          </StyledPicture>
          <StyledPicture>
            <StyledFigure src={internacional} />
            <StyledFig>
              <strong>Figurinhas Internacionais:</strong> Primeira Página Relacionada as
              figurinhas dos principais jogadores do futebol internacional
            </StyledFig>
          </StyledPicture>
        </StyledSection>
      </StyledMain>
    </>
  );
}

export default Home;
