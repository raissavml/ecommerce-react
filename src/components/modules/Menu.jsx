import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "../../styles/menu.css";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenMenu(true)}>
        <FiMenu color="#D4A373" size={40} />
      </button>
      <div className={`optionsMenu ${openMenu ? "openMenu" : "closeMenu"}`}>
        <button className="buttonClose" onClick={() => setOpenMenu(false)}>
          <FiX color="#D4A373" size={30} />
        </button>
        <div className="descriptions">
          <p>Roupas Masculinas</p>
          <p>Camisas</p>
          <p>Camisetas</p>
          <p>Calças</p>
          <p>Bermudas</p>
          <p>Casacos</p>
          <p>Roupas Femininas</p>
          <p>Blusas</p>
          <p>Calças</p>
          <p>Saias</p>
          <p>Shorts</p>
          <p>Vestidos</p>
          <p>Casacos</p>
        </div>
      </div>
    </div>
  );
}
