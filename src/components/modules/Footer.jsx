import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imagens/Geral/LOGO NOVA.png";

export default function Footer() {
  return (
    <>
      <footer>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo da loja Fragatta escrito em marrom, com margem em formato de losango"
          />
        </Link>
        <div>
          <div className="linksContainer">
            <Link className="itemFooter" to="/produtos">
              Newsletter
            </Link>
            <Link className="itemFooter" to="/produtos">
              Contato
            </Link>
            <Link className="itemFooter" to="/produtos">
              Redes Sociais
            </Link>
            <Link className="itemFooter" to="/produtos">
              Condições Legais e Privacidade
            </Link>
            <Link className="itemFooter" to="/produtos">
              Carreiras
            </Link>
            <Link className="itemFooter" to="/produtos">
              Mapa do Site
            </Link>
          </div>
          <p id="endereco">Rua da Boa Vontade, 300. Cajuzinho - SP</p>
        </div>
      </footer>
    </>
  );
}
