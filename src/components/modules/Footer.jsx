import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="palavras-chaves-footer">
          <Link to="/">
            <h1>FRAGATTA</h1>
          </Link>
          <ul>
            <li>
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
            </li>
          </ul>
          <p id="endereco">Rua da Boa Vontade, 300. Cajuzinho - SP</p>
        </div>
      </footer>
    </>
  );
}
