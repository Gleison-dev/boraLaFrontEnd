import icon_calendar from "../../assets/icon_calendar.png";
import icon_clock from "../../assets/icon_clock.png";
import icon_money from "../../assets/icon_money.png";
import icon_local from "../../assets/icon_local.png";

export default function CardEvent() {
  return (
    <>
      <section className="w-133 h-96 p-4 rounded-2xl border border-azul-marinho">
        <div className="flex flex-col gap-2">
          <div className="w-125 h-45 rounded-2xl bg-gray-400"></div>
          <div>
            <h1 className="text-3xl text-azul-marinho">
              <strong>Charlie Brown Jr.</strong>
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img src={icon_calendar} alt="Ícone de calendário" />
              <p>08/10/2026</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={icon_clock} alt="Ícone de relógio" />
              <p>21:30</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={icon_money} alt="Ícone de dinheiro" />
              <p>R$100,00</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={icon_local} alt="Ícone de local" />
            <p>Mega Show Predileto - Bom Jesus da Lapa/BA</p>
          </div>
        </div>
      </section>
    </>
  );
}
