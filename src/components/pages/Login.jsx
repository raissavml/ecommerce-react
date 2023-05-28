import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
//import { FiEyeOff } from "react-icons/fi";

import "../../styles/login.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

import { saveToken } from "../../helpers/Auth";

export default function Login() {
  const navigate = useNavigate();

  //const [showError, setShowError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:${process.env.REACT_APP_backEndPort}/login`, {
        email,
        password,
      })
      //.then((response) => response.json())
      .then(({ data: { token } }) => {
        //console.log("saveToken", token);
        saveToken(token);
        navigate("/carrinho");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        //   setShowError(true);
      });
  };

  const handleInputFocus = () => {
    // setShowError(false);
  };

  return (
    <>
      {Header(true)}
      <main className="loginContainer">
        <h1 className="titleLogin">Faça seu login</h1>
        <section className="loginSection">
          <label>Email:</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <label>Senha:</label>
          <input
            type="password"
            className="senha"
            placeholder="******"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <button className="eyeButton">
            <FiEye color="#D4A373" size={25} />
          </button>
          <Link to="/">
            <p className="changePassword"> Esqueceu sua senha?</p>
          </Link>
          <button onClick={handleLogin} className="button">
            Entrar
          </button>
        </section>
      </main>
      {Footer()}
    </>
  );
}
