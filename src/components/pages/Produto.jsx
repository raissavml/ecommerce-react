import React from "react";

import "../../styles/produto.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

export default function Produto() {
  return (
    <>
      {Header()}
      <div>Produto</div>

      {Footer()}
    </>
  );
}
