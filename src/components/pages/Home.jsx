import React from "react";

import "../../styles/style.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

import Carrossel1 from "../../imagens/Carrossel/1.jpg";
import Carrossel2 from "../../imagens/Carrossel/2.jpg";
import Carrossel3 from "../../imagens/Carrossel/3.jpg";

import CamisaMasculina from "../../imagens/Geral/Camisa Listrada.jpg";
import CalcaMasculina from "../../imagens/Geral/Camisa social azul.jpg";
import DestaqueMasculino from "../../imagens/Geral/Camisa social azul.jpg";
import CamisaFeminina from "../../imagens/Geral/Casaco vermelho.jpg";
import CalcaFeminina from "../../imagens/Geral/Casaco vermelho2.jpg";
import DestaqueFeminino from "../../imagens/Geral/Casaco vermelho.jpg";

import { Link } from "react-router-dom";

export default function Home() {
  const handleClothesSection = () => console.log("onClick");

  return (
    <>
      {Header()}
      <main className="homeContainer">
        <div className="carrossel">
          <div className="container" id="img">
            <img src={Carrossel1} alt="" />
            <img src={Carrossel2} alt="" />
            <img src={Carrossel3} alt="" />
          </div>
        </div>
        <h1 onClick={handleClothesSection} className="moda-masculina">
          Moda Masculina
        </h1>
        <section className="productCategory">
          <Link to="/Produtos">
            <p>Camisas Masculinas</p>
            <img src={CamisaMasculina} alt="Camisa-masculina" />
          </Link>
          <Link to="/produtos">
            <p>Calças Masculinas</p>
            <img src={CalcaMasculina} alt="Calça-masculina" />
          </Link>
          <Link to="/produtos">
            <p>Destaques</p>
            <img src={DestaqueMasculino} alt="Destaques-masculinos" />
          </Link>
        </section>
        <h1 onClick={handleClothesSection} className="moda-feminina">
          Moda Feminina
        </h1>
        <section className="productCategory">
          <Link to="/produtos">
            <p>Camisas Femininas</p>
            <img src={CamisaFeminina} alt="Camisa-feminina" />
          </Link>
          <Link to="/produtos">
            <p>Calças Femininas</p>
            <img src={CalcaFeminina} alt="Calça-feminina" />
          </Link>
          <Link to="/produtos">
            <p>Destaques</p>
            <img src={DestaqueFeminino} alt="Destaques-femininos" />
          </Link>
        </section>
      </main>
      {Footer()}
    </>
  );
}
