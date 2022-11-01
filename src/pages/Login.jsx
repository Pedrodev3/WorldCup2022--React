import React, { useState } from "react";
import {
  StyledMain,
  StyledH1,
  StyledP,
  StyledSection,
  StyledForm,
  StyledField,
  StyledLeg,
  StyledDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "../styles/styleLogin";

function Login() {
  const [usuario, setUsuario] = useState({
    login: "",
    senha : "",
  })

  const handleChange = e => {
    setUsuario({...usuario, [e.target.name]: e.target.value})
  }

  // Função que vai conter todo o processo de envio e consumo dos dados
  const logar = async (e) => {
    e.preventDefault()

    // 
    /**
     * Resume: Aqui é configurado a requisição que será feita e enviada ao Banco, similar ao que é feito no Postman
     * 
     *  @body -> Todos os valores que estão contidos nas propriedades do objeto que vem como JSON 
     * é convertido em String ao chegar no front
     * 
     * Lembre-se que todas essas configurações poderiam ser criadas dentro do Fetch,
     * e apenas foram criadas aqui para abstrair mais e para melhor entendimento do código
     */
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }

    /**
     * Enviando os dados que foram inseridos para a API
     */
    const response = await fetch(
      'http://localhost:8080/API/rest/login', requestOptions
    );

    /**
     * Momento que será retornado uma resposta da API para o front-end.
     * (Vai chegar no TO, entrar na regra de negócio (BO) que a partir disso chamará o DAO
     * que fará a conexão com os dados do Banco e a partir do método "loginDAO" poderá
     * retornar uma resposta para o "client-side" após passar pela validação).
     * 
     * Resposta essa que será trazida como json por esse método abaixo .
     */
    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem('usuario-validado', `${data.login} `);
      // Vai ser trazido todo o objeto que veio como resposta no "data", e ele será convertido em String
      sessionStorage.setItem('usuarioObj', JSON.stringify(data))
    }
    
    /**
     * Essa validação vai fazer que caso o usuário esteja no sistema, ele seja redirecionado para a página "home"
     * 
     * Caso não passe na validação e consequentemente não entre no "if", ele vai ser redirecionado novamente para o login
     * que foi teve sua rota configura no MainRoutes como "/"
     */
    if (data) {
      window.location = "/home"
    } else {
      window.location = "/"
    }
  }

  return (
    <StyledMain>
      <StyledH1>Login</StyledH1>
      <StyledP>O Login é necessário para que você possa acessar o website e interagir com as sessões da página, <br/> sendo elas: Home; Figurinhas Nacionais; Figurinhas Internacionais.</StyledP>
      <StyledSection>
        <StyledForm onSubmit={logar}>
          <StyledField>
            <StyledLeg>Faça seu login</StyledLeg>
            <StyledDiv>
              <StyledLabel>Nome: </StyledLabel>
              <StyledInput type="text" name="login" id="sn" value={usuario.login} onChange={ handleChange } />
            </StyledDiv>
            <StyledDiv>
              <StyledLabel>Senha: </StyledLabel>
              <StyledInput type="password" name="senha" id="sn" value={usuario.senha} onChange={ handleChange } />
            </StyledDiv>
            <StyledDiv>
              <StyledButton>Logar</StyledButton>
            </StyledDiv>
          </StyledField>
        </StyledForm>
      </StyledSection>
    </StyledMain>
  );
}

export default Login;
