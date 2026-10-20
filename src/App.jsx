import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/siderbar";

export default function App() {
  return (
    <>
      <div>
        <Sidebar />
        <main>
          <Routes></Routes>
        </main>
      </div>
    </>
  );
}
