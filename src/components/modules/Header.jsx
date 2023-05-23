import React from "react";
import Menu from "./Menu.jsx";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../../imagens/Geral/LOGO NOVA.png";
import { Link } from "react-router-dom";

export default function Header(isLogin = false, isRegister = false) {
  return (
    <>
      <header className="headerContainer">
        {!isLogin && !isRegister && (
          <div className="procurar">
            {Menu()}
            <button className="searchButton">
              <FiSearch color="#D4A373" size={40} />
            </button>
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
              <button>
                <FiShoppingCart color="#D4A373" size={40} />
              </button>
            </Link>
          )}
          <Link className="loginRegister" to="/login">
            Login
          </Link>
          <Link className="loginRegister" to="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </header>
    </>
  );
}
