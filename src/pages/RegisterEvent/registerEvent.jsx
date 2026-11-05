import { useState } from "react";
import Input from "../../components/Input/input";

export default function RegisterEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
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
            <form className="grid grid-cols-2 gap-10 mt-5">
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
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Valor do ingresso"
                />
              </div>
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
