import React from "react";

import "../../styles/produtos.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";
import ProductCard from "../modules/ProductCard";

import ProductImage1 from "../../imagens/Geral/Camisa Listrada.jpg";
import ProductImage2 from "../../imagens/Geral/Camisa social azul.jpg";
import ProductImage3 from "../../imagens/Geral/Casaco vermelho.jpg";
import ProductImage4 from "../../imagens/Geral/camisa listrada mais distante.jpg";
import ProductImage5 from "../../imagens/Geral/Casaco vermelho2.jpg";
import ProductImage6 from "../../imagens/Geral/Camisa social azul.jpg";

export default function Produtos() {
  const products = [
    {
      image: ProductImage1,
      name: "Camisa Listrada de Botões",
      price: "RS125,00",
    },
    {
      image: ProductImage2,
      name: "Camisa Social Azul",
      price: "RS200,00",
    },
    {
      image: ProductImage3,
      name: "Casaco Vermelho",
      price: "RS350,00",
    },
    {
      image: ProductImage4,
      name: "Camisa de Botões Listrada",
      price: "RS99,90",
    },
    {
      image: ProductImage5,
      name: "Casaco da cor vermelha",
      price: "RS175,50",
    },
    {
      image: ProductImage6,
      name: "Camisa Social azulada",
      price: "RS220,80",
    },
  ];
  return (
    <>
      {Header()}
      <main className="products">
        <div className="buttonsContainer">
          <button>Filtros</button>
          <button>Ordenar por</button>
        </div>
        {products.map((product) => ProductCard(product))}
      </main>

      {Footer()}
    </>
  );
}
