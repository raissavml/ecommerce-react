import React, { useState } from "react";

import "../../styles/productCard.css";

import ProductImage1 from "../../imagens/Geral/Camisa Listrada.jpg";
import ProductImage2 from "../../imagens/Geral/camisa listrada mais distante.jpg";
import ProductColor1 from "../../imagens/Geral/corcamisalistrada.png";

export default function ProductCard({ image, name, price }) {
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");

  return (
    <div className="productCard">
      <div className="productModule">
        <img src={image} alt="Homem utilizando camisa listrada" />
        <div className="productOptions">
          <div className="sizeContainer">
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
          <div className="colorContainer">
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
      <div className="productInformation">
        <div className="informationContainer">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  );
}