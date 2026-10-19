import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes></Routes>
        </main>
      </div>
    </>
  );
}
