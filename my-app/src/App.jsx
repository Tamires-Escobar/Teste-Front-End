import React, { useState, useCallback } from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";
import { Content } from "./components/Content";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

export default function App() {
  const [addOneMoreToCart, setAddOneMoreToCart] = useState(0);

  const saveToLocalStorage = (key, value) =>
    localStorage.setItem(key, value + 1);

  const handleWithState = () => {
    setAddOneMoreToCart(addOneMoreToCart + 1);
    saveToLocalStorage("key", addOneMoreToCart);
  };

  const handleWithValueLocalStorage = useCallback(() => {
    return localStorage.getItem("key");
  }, []);

  return (
    <>
      <Header handleWithValueLocalStorage={handleWithValueLocalStorage} />
      <Carousel />
      <Content handleWithState={handleWithState} />
      <Form />
      <Footer />
    </>
  );
}