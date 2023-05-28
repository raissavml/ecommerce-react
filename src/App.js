import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Produtos from "./components/pages/Produtos";
import Produto from "./components/pages/Produto";
import Carrinho from "./components/pages/Carrinho";
import {BrowserRouter, Routes, Navigate, Route, Outlet} from "react-router-dom";
import {isLogged} from "./helpers/Auth.js";


const ProtectedRoute = () => {
 if (!isLogged()){
 return <Navigate to="/login" replace />;
 }
  return <Outlet/>;
}
       //<Route path="/produtos/:produtoId" element={<Produto/>}/> rota correta, trocar quando acabarem os testes
function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute />}>
        <Route path="/carrinho" element={<Carrinho/>}/>            
        </Route>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/produtos" element={<Produtos/>}/> 
        <Route path="/produto" element={<Produto/>}/>
        <Route path="*" element={(<div>Página não encontrada</div>)}/>
      </Routes>
  </BrowserRouter>
  );
}


export default App;