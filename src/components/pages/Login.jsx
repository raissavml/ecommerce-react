import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    console.log();
  }, []);

  return (
    <>
      <main>
        <section>
          <input type="text" placeholder="Login" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src="../Imagens/icones/olho1.png" className="btn" alt="" />
          <button className="button">Entrar</button>
          <Link to="/">Esqueceu sua senha?</Link>
        </section>
      </main>
    </>
  );
}
