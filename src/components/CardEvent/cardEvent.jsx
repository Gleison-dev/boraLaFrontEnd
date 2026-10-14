import icon_calendar from "../../assets/icon_calendar.png";
import icon_clock from "../../assets/icon_clock.png";
import icon_money from "../../assets/icon_money.png";
import icon_local from "../../assets/icon_local.png";

export default function CardEvent() {
  return (
    <>
      <section>
        <div></div>
        <div>
          <h1>Charlie Brown Jr.</h1>
        </div>
        <div>
          <div>
            <img src={icon_calendar} alt="Ícone de calendário" />
            <p>08/10/2026</p>
          </div>
          <div>
            <img src={icon_clock} alt="Ícone de relógio" />
            <p>21:30</p>
          </div>
          <div>
            <img src={icon_money} alt="Ícone de dinheiro" />
            <p>R$100,00</p>
          </div>
        </div>
        <div>
          <img src={icon_local} alt="Ícone de local" />
          <p>Mega Show Predileto - Bom Jesus da Lapa/BA</p>
        </div>
      </section>
    </>
  );
}
