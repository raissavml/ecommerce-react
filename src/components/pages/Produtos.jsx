import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/produtos.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";
import ProductCard from "../modules/ProductCard";

import ProductImage1 from "../../imagens/Geral/Camisa Listrada.jpg";
import ProductImage2 from "../../imagens/Geral/Camisa social azul.jpg";
import ProductImage3 from "../../imagens/Geral/Casaco vermelho.jpg";
import ProductImage4 from "../../imagens/Geral/camisa listrada mais distante.jpg";
import ProductImage5 from "../../imagens/Geral/Casaco vermelho2.jpg";
import ProductImage6 from "../../imagens/Geral/Camisa social detalhes tecido.jpg";

const imagesMap = {
  "camisa social azul": ProductImage2,
  "camisa social azul detalhes": ProductImage6,
  "camisa listrada": ProductImage1,
  "camisa listrada mais de perto": ProductImage4,
  "casaco vermelho": ProductImage3,
  "calça marrom": ProductImage5,
};

export default function Produtos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_backEndPort}/products`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [setProducts]);

  return (
    <>
      <Header />
      <main className="products">
        <div className="buttonsContainer">
          <button>Filtros</button>
          <button>Ordenar por</button>
        </div>
        {products.map((product) => (
          <ProductCard
            name={product.product}
            price={product.price}
            imageAdress={imagesMap[product.imageAdress]}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
