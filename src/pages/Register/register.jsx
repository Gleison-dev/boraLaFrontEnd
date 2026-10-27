import Input from "../../components/Input/input";
import { NavLink } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("PARTICIPANT", "ORGANIZER");
  const [messageError, setMessageError] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/createUser", {
        name,
        last_name: lastName,
        email,
        password,
        role,
      });
      setMessage(response.data.user);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao cadastrar usuário.";
      setMessageError(message);
      setTimeout(() => {
        setMessageError("");
      }, 3000);
    }
  };

  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex flex-col justify-center items-center h-full">
          {message ? (
            <div className="w-63 p-2 rounded-xl bg-green-200">
              <b className="text-green-800">{message}</b>
            </div>
          ) : (
            <div></div>
          )}
          {messageError ? (
            <div className="w-71 p-2 rounded-xl bg-red-200">
              <b className="text-red-800">{messageError}</b>
            </div>
          ) : (
            <div></div>
          )}
          <div className="w-150 p-6 rounded-2xl flex flex-col justify-center gap-4 shadow-xl">
            <div>
              <h1 className="text-4xl text-azul-marinho">
                <strong>Registre-se</strong>
              </h1>
              <p className="text-xl text-azul-marinho">
                Crie sua conta e aproveite o melhor hub de eventos!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>Nome</label> <br />
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                  />
                </div>
                <div>
                  <label>Sobrenome</label> <br />
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Sobrenome"
                  />
                </div>
                <div>
                  <label>Email</label> <br />
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <label>Senha</label> <br />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                  />
                </div>
                <div>
                  <label>Tipo de usuário</label> <br />
                  <select
                    onChange={(e) => setRole(e.target.value)}
                    className="w-50 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  >
                    <option value="PARTICIPANT">PARTICIPANTE</option>
                    <option value="ORGANIZER">ORGANIZADOR</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="w-150 h-14 rounded-xl text-2xl cursor-pointer text-creme bg-azul-marinho hover:underline"
                >
                  Criar conta
                </button>
              </div>
            </form>

            <hr />
            <div className="flex justify-center">
              <p>
                Já tem um conta?{" "}
                <NavLink to="/login">
                  <span className="text-azul-marinho underline cursor-pointer">
                    Clique aqui!
                  </span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
