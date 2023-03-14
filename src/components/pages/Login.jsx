import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// == Images ==
import olho1 from "../../imagens/icones/olho1.png";

import { saveToken } from "../../helpers/Auth";

export default function Login() {
  const navigate = useNavigate();

  const [showError, setShowError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3080/login", {
        email,
        password,
      })
      .then((response) => response.json())
      .then(({ token }) => {
        saveToken(token);
        navigate("/carrinho");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        setShowError(true);
      });
  };

  const handleInputFocus = () => {
    setShowError(false);
  };

  return (
    <>
      <main>
        <section>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
              setPassword(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <img src={olho1} className="btn" alt="" />
          <button onClick={handleLogin} className="button">
            Entrar
          </button>
          <Link to="/">Esqueceu sua senha?</Link>
        </section>
      </main>
    </>
  );
}
