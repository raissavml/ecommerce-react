import React from "react";
import Home from "../pages/Home.jsx";

export default function Footer() {
  return;
  <>
    <footer>
      <div className="palavras-chaves-footer">
        <a href={Home}>
          <h1>FRAGATTA</h1>
        </a>
        <ul>
          <li>
            <a className="itemFooter" href="">
              Newsletter
            </a>
            <a className="itemFooter" href="Contato/contato.html">
              Contato
            </a>
            <a className="itemFooter" href="">
              Redes Sociais
            </a>
            <a className="itemFooter" href="">
              Condições Legais e Privacidade
            </a>
            <a className="itemFooter" href="">
              Carreiras
            </a>
            <a className="itemFooter" href="">
              Mapa do Site
            </a>
          </li>
        </ul>
        <p id="endereco">Rua da Boa Vontade, 300. Cajuzinho - SP</p>
      </div>
    </footer>
  </>;
}
