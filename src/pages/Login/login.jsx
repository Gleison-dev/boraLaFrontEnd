export default function Login() {
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="w-96 p-6 rounded-2xl flex flex-col justify-center gap-4 shadow">
          <div>
            <h1 className="text-5xl text-azul-marinho">
              <strong>Login</strong>
            </h1>
            <p className="text-xl text-azul-marinho">Faça o login e Bora Lá!</p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <input className="w-70 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho" type="text" placeholder="E-mail" />
            </div>
            <div>
              <input className="h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho" type="password" placeholder="Senha" />
            </div>
            <div>
              <button className="w-80 h-14 rounded-xl text-xl text-creme bg-azul-marinho">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
