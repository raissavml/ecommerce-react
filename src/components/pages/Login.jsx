import React from "react";
import { Link } from "react-router-dom";

// == Images ==
import olho1 from "../../imagens/icones/olho1.png";

export default function Login() {
  const [currentUser, setCurrentUser] = React.useState("");
  const [emailLogin, setEmailLogin] = React.useState("");
  const [passwordLogin, setPasswordLogin] = React.useState("");

  //const validation = (email, password) => {
  // const user = users.find((user) => login === user.email);
  // if (typeof user !== "undefined") {
  //   return user.password === password;
  // }
  // return false;
  // };
  React.useEffect(() => {
    fetch("http://localhost:3080/users")
      .then((response) => response.json())
      .then((data) => setCurrentUser(data));
  }, []);

  const handleLogin = {};

  return (
    <>
      <main>
        <section>
          <input
            type="text"
            placeholder="Login"
            name="email"
            onChange={(e) => {
              setEmailLogin(e.target.value);
            }}
          />
          <input
            type="password"
            className="senha"
            placeholder="Senha"
            name="password"
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
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
