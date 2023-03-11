import React from "react";
import Home from "./Home.jsx";

export default function Login() {
  return (
    <>
      <main>
        <section>
          <input type="text" placeholder="Login" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src="../Imagens/icones/olho1.png" className="btn" alt="" />
          <button className="button">Entrar</button>
          <a href={Home}>Esqueceu sua senha?</a>
        </section>
      </main>
    </>
  );
}
