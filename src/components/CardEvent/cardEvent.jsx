export default function CardEvent() {
  return (
    <>
      <section className="w-88 p-4 rounded-xl cursor-pointer transform transition-shadow duration-300 ease-in-out shadow hover:shadow-xl">
        <div className="w-80 h-40 rounded-xl bg-azul-marinho"></div>
        <div className="flex flex-col gap-1 mt-2">
          <h1 className="text-3xl">
            <strong>Charlie Brown Jr.</strong>
          </h1>
          <p>Bom Jesus da Lapa - Bahia</p>
          <p className="text-gray-600">
            <strong>21/10/2026 às 19:30</strong>
          </p>
        </div>
      </section>
    </>
  );
}
