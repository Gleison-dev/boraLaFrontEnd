import CardEvent from "../../components/CardEvent/cardEvent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const { token } = useContext(AuthContext);

  const handleSearchEvents = async () => {
    try {
      const response = await api.get("/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(response.data.events);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar os eventos.";
      return console.error(message);
    }
  };

  useEffect(() => {
    handleSearchEvents();
  }, [token]);
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div>
          <div>
            <h1 className="text-4xl text-azul-marinho">
              <strong>Meus eventos</strong>
            </h1>
          </div>
          <div>
            {events.map((event) => (
              <CardEvent
                key={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                time={event.time}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
