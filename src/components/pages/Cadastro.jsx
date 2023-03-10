import React from "react";

export default function Cadastro() {
  return (
    <>
      <main>
        <section className="cadastro">
          <input type="text" placeholder="exemple@exemple.com" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src="../Imagens/icones/olho1.png" className="btn" />
          <input type="password" placeholder="confirmar senha" />
          <button className="button">Cadastre-se</button>
          <div className="haveLogin">
            <span>
              já tem login?{" "}
              <a href="../Login/login.html" target="_blank">
                entre
              </a>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
