import { NavLink } from "react-router-dom";
import icon_email from "../../assets/icon_email.png";
import icon_padlock from "../../assets/icon_padlock.png";

export default function Login() {
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex justify-center items-center h-full">
          <div className="w-120 p-6 rounded-2xl flex flex-col justify-center gap-4 shadow-xl">
            <div>
              <h1 className="text-5xl text-azul-marinho">
                <strong>Login</strong>
              </h1>
              <p className="text-xl text-azul-marinho">
                Faça o login e Bora Lá!
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex items-center relative">
                <img
                  className="absolute left-2"
                  src={icon_email}
                  alt="Ícone de E-mail"
                />
                <input
                  className="w-80 h-10 p-4 pl-12 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="flex items-center relative">
                <img
                  className="absolute left-2"
                  src={icon_padlock}
                  alt="Ícone de senha"
                />
                <input
                  className="h-10 p-4 pl-12 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="password"
                  placeholder="Senha"
                />
              </div>
              <div>
                <button className="w-80 h-14 rounded-xl text-2xl cursor-pointer text-creme bg-azul-marinho hover:bg-blue-900 hover:underline">
                  Entrar
                </button>
              </div>
              <hr />
              <div className="flex justify-center">
                <p>
                  Não tem uma conta? {""}
                  <span className="underline text-azul-marinho">
                    <NavLink to="/register">
                      <strong>Clique aqui!</strong>
                    </NavLink>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
