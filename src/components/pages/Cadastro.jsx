import React from "react";
import Login from "./Login.jsx";
import Olho1 from "../../imagens/icones/olho1.png";

export default function Cadastro() {
  return (
    <>
      <main>
        <section className="cadastro">
          <input type="text" placeholder="exemple@exemple.com" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src={Olho1} className="btn" alt="" />
          <input type="password" placeholder="confirmar senha" />
          <button className="button">Cadastre-se</button>
          <div className="haveLogin">
            <span>
              já tem login?{" "}
              <a href={Login} target="_blank" rel="noreferrer">
                entre
              </a>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
