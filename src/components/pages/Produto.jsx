import React, { useState } from "react";

import "../../styles/produto.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

import Image1 from "../../imagens/Geral/Camisa social azul.jpg";
import Image2 from "../../imagens/Geral/Camisa social detalhes tecido.jpg";

export default function Produto() {
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");

  return (
    <>
      {Header()}
      <main className="productContainer">
        <div className="productImages">
          <img src={Image1} alt="Camisa social azul claro com botões pretos" />
          <img
            src={Image2}
            alt="Camisa social azul claro com botões pretos, detalhes do tecido com quadriculado azul bem pequeno."
          />
        </div>
        <div className="productDetails">
          <h1>Camisa masculina social azul</h1>
          <h3>Descrição</h3>
          <p>
            Modelo: Camisa social quadriculadinha fio tinto e botões escuros
            Tecido: Algodão Abertura: Abotoamento frontal Estampa:
            quadriculadinha Manga: Manga longa Punho: Abotoamento nos punhos
          </p>
          <div className="optionsProduct">
            <h3>Tamanho:</h3>
            <div className="containerSize">
              <span
                className={activeSize === "PP" ? "activeSize" : ""}
                onClick={() => setActiveSize("PP")}
              >
                PP
              </span>
              <span
                className={activeSize === "P" ? "activeSize" : ""}
                onClick={() => setActiveSize("P")}
              >
                P
              </span>
              <span
                className={activeSize === "M" ? "activeSize" : ""}
                onClick={() => setActiveSize("M")}
              >
                M
              </span>
              <span
                className={activeSize === "G" ? "activeSize" : ""}
                onClick={() => setActiveSize("G")}
              >
                G
              </span>
              <span
                className={activeSize === "GG" ? "activeSize" : ""}
                onClick={() => setActiveSize("GG")}
              >
                GG
              </span>
            </div>
            <h3>Cor:</h3>
            <div className="containerColor">
              <span
                className={activeColor === "color1" ? "activeColor" : ""}
                onClick={() => setActiveColor("color1")}
              />
              <span
                className={activeColor === "color2" ? "activeColor" : ""}
                onClick={() => setActiveColor("color2")}
              />
              <span
                className={activeColor === "color3" ? "activeColor" : ""}
                onClick={() => setActiveColor("color3")}
              />
              <span
                className={activeColor === "color4" ? "activeColor" : ""}
                onClick={() => setActiveColor("color4")}
              />
            </div>
          </div>
        </div>
      </main>
      {Footer()}
    </>
  );
}
