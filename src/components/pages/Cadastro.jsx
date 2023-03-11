import React from "react";
import Olho1 from "../../imagens/icones/olho1.png";
import { Link } from "react-router-dom";

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
              já está cadastrado?{" "}
              <Link to="/login" target="_blank" rel="noreferrer">
                Fazer login
              </Link>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
