import icon_search from "../../assets/icon_search.png";

export default function Home() {
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex justify-center">
          <div className="relative">
            <img
              className="absolute w-8 h-8 left-4 top-1"
              src={icon_search}
              alt="Ícone de lupa"
            />
            <input
              className="w-379 h-10 p-4 pl-15 outline-none border rounded-xl focus:ring-azul-marinho focus:ring"
              type="text"
              placeholder="Bora lá em uma peça de teatro?"
            />
          </div>
        </div>
        <div>
          <div className="mt-10">
            <h1 className="text-4xl text-azul-marinho">
              <strong>Eventos de hoje</strong>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
