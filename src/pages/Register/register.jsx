import { NavLink } from "react-router-dom";
import Input from "../../components/Input/input";

export default function Register() {
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex justify-center items-center h-full">
          <div className="w-150 p-6 rounded-2xl flex flex-col justify-center gap-4 shadow-xl">
            <div>
              <h1 className="text-4xl text-azul-marinho">
                <strong>Registre-se</strong>
              </h1>
              <p className="text-xl text-azul-marinho">
                Crie sua conta e aproveite o melhor hub de eventos!
              </p>
            </div>
            <form className="grid grid-cols-2 gap-4 items-center">
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
                <Input type="text" value={lastName}
                  onChange={(e) => setLastName(e.target.value)} placeholder="Sobrenome" />
              </div>
              <div>
                <label>Email</label> <br />
                <Input type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
              </div>
              <div>
                <label>Senha</label> <br />
                <Input type="text" value={password}
                  onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
              </div>
              <div>
                <label>Tipo de usuário</label> <br />
                <select className="w-50 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho">
                  <option value="PARTICIPANT">PARTICIPANTE</option>
                  <option value="ORGANIZER">ORGANIZADOR</option>
                </select>
              </div>
            </form>
            <div className="flex justify-center">
              <button className="w-150 h-14 rounded-xl text-2xl cursor-pointer text-creme bg-azul-marinho hover:underline">
                Criar conta
              </button>
            </div>
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
