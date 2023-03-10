import React from "react";

export default function Home() {
  return;
  <>
    <main>
      <div className="carrossel">
        <div className="container" id="img">
          <img src="./Imagens/Carrossel/1.jpg" alt="" />
          <img src="./Imagens/Carrossel/2.jpg" alt="" />
          <img src="./Imagens/Carrossel/3.jpg" alt="" />
        </div>
      </div>
      <h1 className="moda-masculina">Moda Masculina</h1>
      <section className="card">
        <div className="camisa-masc">
          <a href="Produto/produto.html">
            <figure>
              <img src="Imagens/Geral/camisa_masc.png" alt="Camisa-masculina" />
            </figure>
          </a>
        </div>
        <div className="calca-masc">
          <a href="Produto/produto.html">
            <figure>
              <img src="Imagens/Geral/Calça_masc.png" alt="Calça-masculina" />
            </figure>
          </a>
        </div>
        <div className="destaques-masc">
          <a href="Produto/produto.html">
            <figure>
              <img
                src="Imagens/Geral/destaque.png"
                alt="Destaques-masculinos"
              />
            </figure>
          </a>
        </div>
      </section>
      <h1 className="moda-feminina">Moda Feminina</h1>
      <section className="card">
        <div className="camisa-fem">
          <a href="Produto/produto.html">
            <figure>
              <img src="Imagens/Geral/Camisa_fem.png" alt="Camisa-feminina" />
            </figure>
          </a>
        </div>
        <div className="calca-fem">
          <a href="Produto/produto.html">
            <figure>
              <img src="Imagens/Geral/Calça_fem.png" alt="Calça-feminina" />
            </figure>
          </a>
        </div>
        <div className="destaque-fem">
          <a href="Produto/produto.html">
            <figure>
              <img src="Imagens/Geral/destaque.png" alt="Destaques-femininos" />
            </figure>
          </a>
        </div>
      </section>
    </main>
  </>;
}
