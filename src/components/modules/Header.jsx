import React from "react";
import logo from "../../imagens/Geral/LOGO NOVA.png";

export default function Header() {
  return;
  <>
    <header>
      <div className="logo">
        <a href="index.html">
          <p className="nome-logo">FRAGATTA</p>
        </a>
      </div>
      <div cclassName="funcionalidadesHeader">
        <ul className="procurar">
          <a href="">
            <img
              className="menu"
              src="Imagens/icones/icone-menu.png"
              alt="icone do menu"
            />
          </a>
          <img
            className="menu"
            src="Imagens/icones/icone-lupa.png"
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
            <a href="Carrinho/carrinho.html">
              <img
                className="icone-carrinho"
                src="Imagens/icones/icone-carrinho.png"
                alt="icone do carrinho para acessar suas compras"
              />
            </a>
            <a className="login" href="Login/login.html">
              Login
            </a>
            <a className="login" href="./cadastro/cadastro.html">
              Cadastre-se
            </a>
          </li>
        </ul>
      </div>
    </header>
  </>;
}
