import React from "react";

import "../../styles/carrinho.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

import CamisaListrada from "../../imagens/Geral/Camisa Listrada.jpg";
import CorCamisaListrada from "../../imagens/Geral/corcamisalistrada.png";

export default function Carrinho() {
  const reduceProductQuantity = () =>
    "alteraQuantidade(false, 'QuantidadeProduto')";
  const addProductQuantity = () =>
    "alteraQuantidade(true, 'QuantidadeProduto')";

  return (
    <>
      {Header()}
      <main className="d-flex flex-column">
        <section className="d-flex carrinhoCount">
          <h1 className="CartTitle">Meu carrinho</h1>
          <div className="d-flex justify-content-space-around aling-itens-center">
            <h2 id="QuantidadeDeProdutos" type="number">
              1
            </h2>
            <h2 id="indicadorProdutos" type="text">
              produtos
            </h2>
          </div>
        </section>
        <div>
          <section className="carrinhoVazio">
            <ul className="CarrinhoLista">
              <li className="CarrinhoItem">
                <a href>
                  <img
                    className="ImagemProduto"
                    src={CamisaListrada}
                    alt="Homem vestindo camisa branca com listras cinzas e textura, apoiado no parapeito de uma ponte. Foto tirada ao pôr do sol."
                  />
                </a>
                <div className="DetalhesProduto">
                  <h4 className="nomeProduto">
                    Camisa branca com listras cinzas, botões e textura
                  </h4>
                  <div className="d-flex">
                    <p>R$</p>
                    <p className="PrecoProduto">100,00</p>
                  </div>
                  <div className="d-flex PreferenciasCliente">
                    <img
                      className="CorProduto"
                      src={CorCamisaListrada}
                      alt="Cor selecionada: Branco e cinza"
                    />
                    <p className="TamanhoProduto">PP</p>
                    <button
                      className="ReduzirQuantidade"
                      onclick={reduceProductQuantity}
                    >
                      -
                    </button>
                    <p id="QuantidadeProduto">0</p>
                    <button
                      className="AumentarQuantidade"
                      onclick={addProductQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ExcluirProduto"
                  onclick="console.log('remove')"
                >
                  X
                </button>
              </li>
            </ul>
          </section>
          <div className="d-flex carrinhoCount">
            <p className="valueOrganizer">Subtotal</p>
            <div className="d-flex justify-content-center aling-itens-center">
              <p>R$</p>
              <p id="ValorSubtotal">0,00</p>
            </div>
          </div>
          <form>
            <div className="singleInput">
              <label>Cupom de desconto</label>
              <input
                type="text"
                placeholder="Adicione seu cupom aqui"
                id="inputCupomDesconto"
              />
            </div>
            <section className="dadosCarrinho">
              <div className="container-fluid content">
                <div className="dubleInput">
                  <div className="organizeInput">
                    <label>CEP de entrega</label>
                    <input
                      type="text"
                      placeholder="Digite o CEP de entrega"
                      id="cep"
                    />
                  </div>
                  <div className="organizeInput">
                    <label>Logradouro</label>
                    <input
                      type="text"
                      placeholder="Digite o nome da rua"
                      id="logradouro"
                    />
                  </div>
                </div>
                <div className="dubleInput">
                  <div className="organizeInput">
                    <label>Número</label>
                    <input
                      type="text"
                      placeholder="Digite o número da residência"
                      id="numero"
                    />
                  </div>
                  <div className="organizeInput">
                    <label>Complemento</label>
                    <input
                      type="text"
                      placeholder="Digite o complemento da residência"
                      id="complementoEndereco"
                    />
                  </div>
                </div>
                <div className="dubleInput">
                  <div className="organizeInput">
                    <label>Cidade</label>
                    <input
                      type="text"
                      placeholder="Digite a cidade da entrega"
                      id="localidade"
                    />
                  </div>
                  <div className="organizeInput">
                    <label>Estado</label>
                    <input
                      type="text"
                      placeholder="Digite o estado da entrega"
                      id="uf"
                    />
                  </div>
                </div>
              </div>
              <div className="frete">
                <p className="valueOrganizer">
                  Frete: R$<span id="Frete">0,00</span>
                </p>
              </div>
            </section>
          </form>
        </div>
        <div className="d-flex carrinhoCount total">
          <p className="total valueOrganizer">Total:</p>
          <div className="d-flex justify-content-center aling-itens-center">
            <p className="total">R$</p>
            <p className="total" id="ValorTotal">
              0,00
            </p>
          </div>
        </div>
        <button className="finalizarCompra">Finalizar Carrinho</button>
      </main>
      {Footer()}
    </>
  );
}
