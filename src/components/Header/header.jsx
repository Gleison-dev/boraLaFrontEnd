import icon_config from "../../assets/icon_config.png";
import icon_house from "../../assets/icon_house.png";
import icon_local from "../../assets/icon_local.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <section className="w-80 h-screen shadow-xl bg-creme">
        <div className="flex flex-col h-full p-6 ">
          <div>
            <img className="" src={logo} alt="Logo do site" />
          </div>
          <div className="mt-50">
            <ul className="flex flex-col gap-3 text-preto text-2xl">
              <div className="flex items-center gap-1 cursor-pointer">
                <img src={icon_house} alt="Ícone de casa" />
                <li className="hover:underline">Home</li>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <img src={icon_local} alt="Ícone de categoria" />
                <li className="hover:underline">Categorias</li>
              </div>
            </ul>
            <hr className="mt-5 mb-5" />
            <ul className="text-preto text-xl">
              <div className="flex items-center gap-1 cursor-pointer">
                <img src={icon_config} alt="Ícone de configuração" />
                <li className="hover:underline">Configurações</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center mt-auto">
            <button className="w-90 h-16 text-xl rounded-xl cursor-pointer bg-azul-marinho text-creme">
              Acessar conta
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
