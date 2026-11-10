import { useContext, useState } from "react";
import Input from "../../components/Input/input";
import { api } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function RegisterEvent() {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/createEvent",
        {
          title,
          description,
          date,
          time,
          location,
          address,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.newEvent);
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erro ao cadastrar evento.";
      return console.error(message);
    }
  };

  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-125 p-6 rounded-2xl shadow-xl">
            <div>
              <div className="text-azul-marinho">
                <h1 className="text-4xl">
                  <strong>Cadastrar evento</strong>
                </h1>
                <p className="text-lg">
                  Cadastre o seu evento pelo formulário abaixo!
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-10 mt-5"
            >
              <div>
                <label>Título</label> <br />
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Digite o nome do evento"
                />
              </div>
              <div>
                <label>Data</label> <br />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label>Horário</label> <br />
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <label>Local</label> <br />
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: Teatro municipal"
                />
              </div>
              <div>
                <label>Endereço</label> <br />
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ex: Rua A, Primavera II, Montes Claros, 00000-000"
                />
              </div>
              <div>
                <label>Preço (Opcional)</label> <br />
                <input
                  className="w-50 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={"Valor do ingresso"}
                />
              </div>
              <div>
                <label>Descrição</label> <br />
                <textarea
                  className="w-110 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Escreva aqui a descrição do evento"
                ></textarea>
              </div>{" "}
              <br />
              <div>
                <button className="w-111 h-14 rounded-xl text-xl cursor-pointer text-creme bg-azul-marinho hover:underline">
                  Cadastrar evento
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
