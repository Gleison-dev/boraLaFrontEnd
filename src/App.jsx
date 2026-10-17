import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";

export default function App() {
  return (
    <>
      <div className="flex justify-around p-4">
        <Header />
        <main>
          <Routes></Routes>
        </main>
      </div>
    </>
  );
}
