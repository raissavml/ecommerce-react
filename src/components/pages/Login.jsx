import React from "react";

export default function Login() {
  return (
    <>
      <main>
        <section>
          <input type="text" placeholder="Login" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src="../Imagens/icones/olho1.png" className="btn" />
          <button className="button">entrar</button>
          <a href="">esqueceu sua senha?</a>
        </section>
      </main>
    </>
  );
}
