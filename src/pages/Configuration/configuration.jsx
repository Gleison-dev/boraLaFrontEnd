import Input from "../../components/Input/input";
import icon_instagram from "../../assets/icon_instagram.png";
import icon_whatsapp from "../../assets/icon_whatsapp.png";
import icon_email from "../../assets/icon_email.png";

export default function Configuration() {
  return (
    <>
      <section className="w-399 h-screen p-10 bg-creme">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-125 p-6 rounded-2xl shadow-xl">
            <div>
              <h1 className="text-4xl">Configurações</h1>
            </div>
            <hr className="border-gray-400 mt-3" />
            <div className="flex gap-5 items-center mt-3">
              <div className="w-20 h-20 rounded-full bg-azul-marinho"></div>
              <div>
                <p>Nome</p>
                <p className="text-gray-400">Email</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div>
                <label>Novo e-mail</label> <br />
                <Input placeholder="Insira o seu novo e-mail" />
                <button className="w-20 h-8 ml-2 rounded-lg text-creme bg-azul-marinho">
                  Alterar
                </button>
              </div>
              <div>
                <label>Nova senha</label> <br />
                <Input placeholder="Insira sua nova senha" />
                <button className="w-20 h-8 ml-2 rounded-lg text-creme bg-azul-marinho">
                  Alterar
                </button>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <p>Precisa de ajuda? Entre em contato conosco!</p>
              </div>
              <div className="flex gap-5">
                <img className="cursor-pointer" src={icon_instagram} alt="Ícone do instagram" />
                <img className="cursor-pointer" src={icon_whatsapp} alt="Ícone do whatsapp" />
                <img className="cursor-pointer" src={icon_email} alt="Ícone do e-mail" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
