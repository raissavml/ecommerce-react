import React from "react";

import "../../styles/login.css";

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
      <main>
        <section className="cadastro">
          <input
            type="text"
            placeholder="Nome"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={cpf}
            onChange={(e) => {
              setCpf(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Celular"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="CEP"
            name="cepAddress"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Rua"
            name="streetAddress"
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Número"
            name="numberAddress"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Bairro"
            name="neighborhoodAddress"
            value={neighborhood}
            onChange={(e) => {
              setNeighborhood(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Cidade"
            name="cityAddress"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            placeholder="Estado"
            name="stateAddress"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
            onFocus={handleInputFocus}
          />
          <input
            type="email"
            placeholder="exemple@exemple.com"
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
