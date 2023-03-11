import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Produto from "./components/pages/Produto";
import Carrinho from "./components/pages/Carrinho";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/produtos" element={<Produto/>}/>
        <Route path="/produtos/:produtoId" element={<Produto/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="*" element={(<div>Página não encontrada</div>)}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
