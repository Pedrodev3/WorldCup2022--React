import React from 'react';
import Menu from "./components//Menu";
import MainRoutes from "./routes/MainRoutes";
import Cabecalho  from "./components/Cabecalho";
import Rodape  from "./components/Rodape";

function App() {

    return (
        <>
            <Cabecalho />
            <Menu />
            <MainRoutes />
            <Rodape />
        </>
  );
}

export default App;