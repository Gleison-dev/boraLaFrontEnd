export default function Register() {
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex justify-center items-center h-center">
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
                <input
                  className="w-50 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="text"
                  placeholder="Nome"
                />
              </div>
              <div>
                <label>Sobrenome</label> <br />
                <input
                  className="w-50 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="text"
                  placeholder="Sobrenome"
                />
              </div>
              <div>
                <label>Email</label> <br />
                <input
                  className="w-60 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <label>Senha</label> <br />
                <input
                  className="w-50 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="password"
                  placeholder="Senha"
                />
              </div>
              <div>
                <label>Tipo de usuário</label> <br />
                <select className="w-50 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho">
                  <option>PARTICIPANTE</option>
                  <option>ORGANIZADOR</option>
                </select>
              </div>
            </form>
            <div>
              <button className="w-50 h-12 rounded-xl text-xl cursor-pointer text-creme bg-azul-marinho hover:underline">
                Criar conta
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
