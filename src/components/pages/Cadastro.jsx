import React from "react";
import Olho1 from "../../imagens/icones/olho1.png";
import { Link } from "react-router-dom";
import { Axios } from "axios";

export default function Cadastro() {
  const [emailRegister, setEmailRegister] = React.useState("");
  const [passwordRegister, setPasswordRegister] = React.useState("");

  const Register = () => {
    Axios.post("http://localhost:3080/users", {
      email: emailRegister,
      password: passwordRegister,
    }).then((response) => console.log("response"));
  };

  return (
    <>
      <main>
        <section className="cadastro">
          <input
            type="email"
            placeholder="exemple@exemple.com"
            name="email"
            value={email}
            onChange={(e) => {
              setEmailRegister(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="password"
            className="senha"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <img src={Olho1} className="btn" alt="" />
          <input type="password" placeholder="confirmar senha" />
          <button className="button" onClick={Register}>
            Cadastre-se
          </button>
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
