import React from "react";

import "../../styles/cadastro.css";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

import Olho1 from "../../imagens/icones/olho1.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cadastro() {
  const [showError, setShowError] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const Register = () => {
    axios
      .post(`http://localhost:${process.env.REACT_APP_backEndPort}/user`, {
        email: email,
        password: password,
        cepAddress: cep,
        stateAddress: state,
        cityAddress: city,
        neighborhoodAddress: neighborhood,
        numberAddress: number,
        streetAddress: street,
        phone: phone,
        cpf: cpf,
        lastName: lastName,
        firstName: firstName,
      })
      .then((response) => console.log("response"))
      .catch(() => {
        setPassword("");
        setShowError(true);
      });
  };

  const handleInputFocus = () => {
    setShowError(false);
  };

  return (
    <>
      {Header(false, true)}
      <main className="register">
        <h1 className="registerTitle">Faça seu cadastro</h1>
        <div className="haveLogin">
          <span>
            Já está cadastrado?{" "}
            <Link to="/login" target="_blank" rel="noreferrer">
              <p className="goToLogin">Fazer login</p>
            </Link>
          </span>
        </div>
        <section className="cadastro">
          <div className="inputContainer">
            <label className="registerLabel">Nome:</label>
            <input
              type="text"
              placeholder="Fulana"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Sobrenome:</label>
            <input
              type="text"
              placeholder="Souza de Freitas"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">CPF:</label>
            <input
              type="text"
              placeholder="999.999.999-99"
              name="cpf"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Celular:</label>
            <input
              type="text"
              placeholder="11 99999-9999"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">CEP:</label>
            <input
              type="text"
              placeholder="99999-999"
              name="cepAddress"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Rua:</label>
            <input
              type="text"
              placeholder="Rua da Alegria"
              name="streetAddress"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Número:</label>
            <input
              type="text"
              placeholder="99"
              name="numberAddress"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="inputContainer">
            <label className="registerLabel">Bairro:</label>
            <input
              type="text"
              placeholder="Sorrisos"
              name="neighborhoodAddress"
              value={neighborhood}
              onChange={(e) => {
                setNeighborhood(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Cidade:</label>
            <input
              type="text"
              placeholder="Felicidade"
              name="cityAddress"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Estado:</label>
            <input
              type="text"
              placeholder="Maranhão"
              name="stateAddress"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Email:</label>
            <input
              type="email"
              placeholder="exemplo@exemplo.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <label className="registerLabel">Senha:</label>
            <input
              type="password"
              className="******"
              placeholder="Senha"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={handleInputFocus}
            />
            <img src={Olho1} className="eyeIcon" alt="" />
            <input type="password" placeholder="Confirmar senha" />
            <button className="button" onClick={Register}>
              Cadastre-se
            </button>
          </div>
        </section>
      </main>
      {Footer()}
    </>
  );
}
