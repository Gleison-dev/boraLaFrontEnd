import icon_config from "../../assets/icon_config.png";
import icon_house from "../../assets/icon_house.png";
import icon_categories from "../../assets/icon_categories.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <section className="w-80 h-screen shadow-xl bg-creme">
        <div className="flex flex-col h-full p-6 ">
          <div>
            <img className="" src={logo} alt="Logo do site" />
          </div>
          <div className="mt-20">
            <ul className="flex flex-col gap-3 text-preto text-2xl">
              <NavLink to="/">
                <div className="flex items-center gap-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300">
                  <img src={icon_house} alt="Ícone de casa" />
                  <li>Home</li>
                </div>
              </NavLink>
              <div className="flex items-center gap-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300">
                <img src={icon_categories} alt="Ícone de categoria" />
                <li>Categorias</li>
              </div>
            </ul>
            <hr className="mt-5 mb-5" />
            <ul className="text-preto text-2xl">
              <div className="flex items-center gap-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300">
                <img src={icon_config} alt="Ícone de configuração" />
                <li>Configurações</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center mt-auto">
            <NavLink to="/login">
              <button className="w-72 h-16 text-2xl rounded-xl cursor-pointer bg-azul-marinho text-creme hover:underline">
                Acessar conta
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
