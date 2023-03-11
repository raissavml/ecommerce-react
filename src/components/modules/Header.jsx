import React from "react";
import Home from "../pages/Home.jsx";
import Produto from "../pages/Produto.jsx";
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Carrinho from "../pages/Carrinho.jsx";
import IconeMenu from "../../imagens/icones/icone-menu.png";
import IconeLupa from "../../imagens/icones/icone-lupa.png";
import IconeCarrinho from "../../imagens/icones/icone-carrinho.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <a href={Home}>
            <p className="nome-logo">FRAGATTA</p>
          </a>
        </div>
        <div cclassName="funcionalidadesHeader">
          <ul className="procurar">
            <a href={Produto}>
              <img className="menu" src={IconeMenu} alt="icone do menu" />
            </a>
            <img
              className="menu"
              src={IconeLupa}
              alt="ícone de lupa para realizar pesquisa"
            />
            <input
              id="pesquisa"
              type="text"
              placeholder="O que você está procurando?"
            />
          </ul>

          <ul className="navegadores">
            <li>
              <a href={Carrinho}>
                <img
                  className="icone-carrinho"
                  src={IconeCarrinho}
                  alt="icone do carrinho para acessar suas compras"
                />
              </a>
              <a className="login" href={Login}>
                Login
              </a>
              <a className="login" href={Cadastro}>
                Cadastre-se
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
