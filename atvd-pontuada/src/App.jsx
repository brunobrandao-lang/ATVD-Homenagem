import React from "react";
import Header from "./assets/components/Header";
import Home from "./assets/components/pages"; // <--- Caminho corrigido aqui!
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;