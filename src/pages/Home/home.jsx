export default function Home() {
  return (
    <>
      <section className="w-310 rounded-2xl p-6 bg-creme">
        <div>
          <input
            className="w-250 h-12 p-2 rounded-xl border outline-none bg-creme"
            type="text"
            placeholder="Bora lá em uma de teatro?"
          />
        </div>
        <section className="mt-8">
          <div>
            <h1 className="text-5xl text-azul-marinho">Eventos de hoje</h1>
          </div>
        </section>
      </section>
    </>
  );
}
