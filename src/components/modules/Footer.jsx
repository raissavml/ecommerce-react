import React from "react";
import Home from "../pages/Home.jsx";
import Produto from "../pages/Produto.jsx";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="palavras-chaves-footer">
          <a href={Home}>
            <h1>FRAGATTA</h1>
          </a>
          <ul>
            <li>
              <a className="itemFooter" href={Produto}>
                Newsletter
              </a>
              <a className="itemFooter" href={Produto}>
                Contato
              </a>
              <a className="itemFooter" href={Produto}>
                Redes Sociais
              </a>
              <a className="itemFooter" href={Produto}>
                Condições Legais e Privacidade
              </a>
              <a className="itemFooter" href={Produto}>
                Carreiras
              </a>
              <a className="itemFooter" href={Produto}>
                Mapa do Site
              </a>
            </li>
          </ul>
          <p id="endereco">Rua da Boa Vontade, 300. Cajuzinho - SP</p>
        </div>
      </footer>
    </>
  );
}
