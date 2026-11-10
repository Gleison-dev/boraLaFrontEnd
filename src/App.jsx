import RegisterEvent from "./pages/RegisterEvent/registerEvent";
import Sidebar from "./components/Sidebar/siderbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/register";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import { PrivateRoute } from "./routes/PrivateRoute";
import MyEvents from "./pages/MyEvents/myEvents";

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
            </Route>
          </Routes>
        </main>
      </div>
    </>
  );
}
