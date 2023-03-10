import React from "react";

export default function Carrinho() {
  return (
    <>
      <main classname="d-flex flex-column">
        <section classname="d-flex carrinhoCount">
          <h1>Meu carrinho</h1>
          <div classname="d-flex justify-content-space-around aling-itens-center">
            <h2 id="QuantidadeDeProdutos" type="number">
              1
            </h2>
            <h2 id="indicadorProdutos" type="text">
              produtos
            </h2>
          </div>
        </section>
        <div>
          <section classname="carrinhoVazio">
            <ul classname="CarrinhoLista">
              <li classname="CarrinhoItem">
                <a href>
                  <img
                    classname="ImagemProduto"
                    src="../Imagens/Geral/Camisa Listrada.jpg"
                    alt="Homem vestindo camisa branca com listras cinzas e textura, apoiado no parapeito de uma ponte. Foto tirada ao pôr do sol."
                  />
                </a>
                <div classname="DetalhesProduto">
                  <h4 classname="nomeProduto">
                    Camisa branca com listras cinzas, botões e textura
                  </h4>
                  <div classname="d-flex">
                    <p>R$</p>
                    <p classname="PrecoProduto">100,00</p>
                  </div>
                  <div classname="d-flex PreferenciasCliente">
                    <img
                      classname="CorProduto"
                      src="../Imagens/Geral/corcamisalistrada.png"
                      alt="Cor selecionada: Branco e cinza"
                    />
                    <p classname="TamanhoProduto">PP</p>
                    <button
                      classname="ReduzirQuantidade"
                      onclick="alteraQuantidade(false, 'QuantidadeProduto')"
                    >
                      -
                    </button>
                    <p id="QuantidadeProduto">0</p>
                    <button
                      classname="AumentarQuantidade"
                      onclick="alteraQuantidade(true, 'QuantidadeProduto')"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  classname="ExcluirProduto"
                  onclick="console.log('remove')"
                >
                  X
                </button>
              </li>
            </ul>
          </section>
          <div classname="d-flex carrinhoCount">
            <p classname="valueOrganizer">Subtotal</p>
            <div classname="d-flex justify-content-center aling-itens-center">
              <p>R$</p>
              <p id="ValorSubtotal">0,00</p>
            </div>
          </div>
          <form>
            <div classname="singleInput">
              <label>Cupom de desconto</label>
              <input
                type="text"
                placeholder="Caso tenha um cupom de desconto, digite aqui"
                id="cupomDesconto"
              />
            </div>
            <section classname="dadosCarrinho">
              <div classname="container-fluid content">
                <div classname="dubleInput">
                  <div classname="organizeInput">
                    <label>CEP de entrega</label>
                    <input
                      type="text"
                      placeholder="Digite o CEP de entrega"
                      id="cep"
                    />
                  </div>
                  <div classname="organizeInput">
                    <label>Logradouro</label>
                    <input
                      type="text"
                      placeholder="Digite o nome da rua"
                      id="logradouro"
                    />
                  </div>
                </div>
                <div classname="dubleInput">
                  <div classname="organizeInput">
                    <label>Número</label>
                    <input
                      type="text"
                      placeholder="Digite o número da residência"
                      id="numero"
                    />
                  </div>
                  <div classname="organizeInput">
                    <label>Complemento</label>
                    <input
                      type="text"
                      placeholder="Digite o complemento da residência"
                      id="complementoEndereco"
                    />
                  </div>
                </div>
                <div classname="dubleInput">
                  <div classname="organizeInput">
                    <label>Cidade</label>
                    <input
                      type="text"
                      placeholder="Digite a cidade da entrega"
                      id="localidade"
                    />
                  </div>
                  <div classname="organizeInput">
                    <label>Estado</label>
                    <input
                      type="text"
                      placeholder="Digite o estado da entrega"
                      id="uf"
                    />
                  </div>
                </div>
              </div>
              <div classname="frete">
                <p classname="valueOrganizer">
                  Frete: R$<span id="Frete">0,00</span>
                </p>
              </div>
            </section>
          </form>
        </div>
        <div classname="d-flex carrinhoCount total">
          <p classname="total valueOrganizer">Total:</p>
          <div classname="d-flex justify-content-center aling-itens-center">
            <p classname="total">R$</p>
            <p classname="total" id="ValorTotal">
              0,00
            </p>
          </div>
        </div>
        <button classname="finalizarCompra">Finalizar Carrinho</button>
      </main>
    </>
  );
}
