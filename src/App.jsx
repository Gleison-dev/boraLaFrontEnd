import Configuration from "./pages/Configuration/configuration";
import RegisterEvent from "./pages/RegisterEvent/registerEvent";
import { PrivateRoute } from "./routes/PrivateRoute";
import Sidebar from "./components/Sidebar/siderbar";
import MyEvents from "./pages/MyEvents/myEvents";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";

export default function App() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/registerEvent" element={<RegisterEvent />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/myEvents" element={<MyEvents />}></Route>
              <Route path="/config" element={<Configuration />}></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </>
  );
}
