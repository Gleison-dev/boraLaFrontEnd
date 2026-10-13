export default function Header() {
  return (
    <>
      <section className="flex flex-col gap-5 w-103 h-220 p-4 rounded-2xl bg-creme">
        <section className="flex justify-around items-center">
          <div className="w-25 h-25 rounded-2xl bg-azul-marinho"> </div>
          <div>
            <h1 className="text-5xl text-azul-marinho">Bora Lá</h1>
            <span className="text-azul-marinho">Hub de Eventos</span>
          </div>
        </section>
        <section>
          <ul className="flex flex-col gap-2 text-xl">
            <hr className="border-gray-400" />
            <li>Página Principal</li>
            <li>Meus eventos</li>
            <hr className="border-gray-400" />
            <li>Configurações</li>
          </ul>
        </section>
        <section className="flex justify-around items-center">
          <div className="w-25 h-25 rounded-full bg-azul-marinho"></div>
          <div>
            <h1 className="text-xl text-azul-marinho">
              <strong>Gleison Ribeiro Gomes</strong>
            </h1>
            <p className="text-azul-marinho">Participante</p>
          </div>
        </section>
        <section className="flex justify-center">
          <div>
            <button className="w-86 h-19 rounded-2xl text-2xl bg-azul-marinho text-creme">
              Entrar
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
