import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    fetch("localhost:3080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log("dentro");

  const handleLogin = () => console.log("on click");

  return (
    <>
      <main>
        <section>
          <input type="text" placeholder="Login" />
          <input type="password" className="senha" placeholder="Senha" />
          <img src="../Imagens/icones/olho1.png" className="btn" alt="" />
          <button onClick={handleLogin} className="button">
            Entrar
            {users.map((user) => (
              value={user.password})
              (user.id) => setCurrentUser(user.id)
            )
            }
          </button>
          <Link to="/">Esqueceu sua senha?</Link>
        </section>
      </main>
    </>
  );
}
