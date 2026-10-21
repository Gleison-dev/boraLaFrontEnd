import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/siderbar";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";

export default function App() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}
