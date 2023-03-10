import React from "react";
import Produto from "./Produto.jsx";
import Carrossel1 from "../../imagens/Carrossel/1.jpg";
import Carrossel2 from "../../imagens/Carrossel/2.jpg";
import Carrossel3 from "../../imagens/Carrossel/3.jpg";
import CamisaMasculina from "../../imagens/Geral/camisa_masc.png";
import CalcaMasculina from "../../imagens/Geral/Calça_masc.png";
import DestaqueMasculino from "../../imagens/Geral/destaque.png";
import CamisaFeminina from "../../imagens/Geral/Camisa_fem.png";
import CalcaFeminina from "../../imagens/Geral/Calça_fem.png";
import DestaqueFeminino from "../../imagens/Geral/destaque.png";

export default function Home() {
  return;
  <>
    <div className="carrossel">
      <div className="container" id="img">
        <img src={Carrossel1} alt="" />
        <img src={Carrossel2} alt="" />
        <img src={Carrossel3} alt="" />
      </div>
    </div>
    <h1 className="moda-masculina">Moda Masculina</h1>
    <section className="card">
      <div className="camisa-masc">
        <a href={Produto}>
          <figure>
            <img src={CamisaMasculina} alt="Camisa-masculina" />
          </figure>
        </a>
      </div>
      <div className="calca-masc">
        <a href={Produto}>
          <figure>
            <img src={CalcaMasculina} alt="Calça-masculina" />
          </figure>
        </a>
      </div>
      <div className="destaques-masc">
        <a href={Produto}>
          <figure>
            <img src={DestaqueMasculino} alt="Destaques-masculinos" />
          </figure>
        </a>
      </div>
    </section>
    <h1 className="moda-feminina">Moda Feminina</h1>
    <section className="card">
      <div className="camisa-fem">
        <a href={Produto}>
          <figure>
            <img src={CamisaFeminina} alt="Camisa-feminina" />
          </figure>
        </a>
      </div>
      <div className="calca-fem">
        <a href={Produto}>
          <figure>
            <img src={CalcaFeminina} alt="Calça-feminina" />
          </figure>
        </a>
      </div>
      <div className="destaque-fem">
        <a href={Produto}>
          <figure>
            <img src={DestaqueFeminino} alt="Destaques-femininos" />
          </figure>
        </a>
      </div>
    </section>
  </>;
}
