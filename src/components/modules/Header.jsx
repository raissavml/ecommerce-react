import React from "react";
import IconeMenu from "../../imagens/icones/icone-menu.png";
import IconeLupa from "../../imagens/icones/icone-lupa.png";
import IconeCarrinho from "../../imagens/icones/icone-carrinho.png";
import Logo from "../../imagens/Geral/LOGO NOVA.png";
import { Link } from "react-router-dom";

export default function Header(isLogin = false, isRegister = false) {
  return (
    <>
      <header>
        {!isLogin && !isRegister && (
          <div className="procurar">
            <img className="menu" src={IconeMenu} alt="icone do menu" />
            <img
              className="lupa"
              src={IconeLupa}
              alt="ícone de lupa para realizar pesquisa"
            />
            <input
              id="pesquisa"
              type="text"
              placeholder="O que você está procurando?"
            />
          </div>
        )}
        <div className="logo">
          <Link to="/">
            <img
              className="nome-logo"
              src={Logo}
              alt="Logo da Loja Fragatta escrito em marrom, com margem fina em formato de losango"
            />
          </Link>
        </div>
        <div className="navegadores">
          {!isLogin && !isRegister && (
            <Link to="/carrinho">
              <img
                className="icone-carrinho"
                src={IconeCarrinho}
                alt="icone do carrinho para acessar suas compras"
              />
            </Link>
          )}
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="login" to="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </header>
    </>
  );
}
