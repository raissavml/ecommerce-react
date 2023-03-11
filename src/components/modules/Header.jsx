import React from "react";
import IconeMenu from "../../imagens/icones/icone-menu.png";
import IconeLupa from "../../imagens/icones/icone-lupa.png";
import IconeCarrinho from "../../imagens/icones/icone-carrinho.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <p className="nome-logo">FRAGATTA</p>
          </Link>
        </div>
        <div cclassName="funcionalidadesHeader">
          <ul className="procurar">
            <Link to="/produtos">
              <img className="menu" src={IconeMenu} alt="icone do menu" />
            </Link>
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
              <Link to="/carrinho">
                <img
                  className="icone-carrinho"
                  src={IconeCarrinho}
                  alt="icone do carrinho para acessar suas compras"
                />
              </Link>
              <Link className="login" to="/login">
                Login
              </Link>
              <Link className="login" to="/cadastro">
                Cadastre-se
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
