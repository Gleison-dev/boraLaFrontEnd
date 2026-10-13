import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";

export default function App() {
  return (
    <>
      <div className="flex justify-around p-4">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}
