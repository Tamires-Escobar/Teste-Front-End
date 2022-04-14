import React, { useState } from "react";

import styles from "./style.module.css";


export const Form = () => {
  /* define  name, email, error */
  const [name, setName] = useState(); 
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);

  /* aponta um valor para o alvo name */
  const handleWithValueName = ({ target }) => 
    setName(validateName(target.value));

    /* aponta um valor para  o alvo email */
  const handleWithValueEmail = ({ target }) =>
    setEmail(validateEmail(target.value));

    /* validação de name */
  const validateName = (value) => {
    const Regex = /[a-z]{3}/; /* puxa alfabato e exige ao menos 3 caracteres */
    if (value.length === "") {
      setError("Preencha seu nome");
    } else if (!Regex.test(value)) {
      setError("Nome incorreto");
    } else {
      setError(null);
    }
  };

  /* validação de email */
  const validateEmail = (value) => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; /* puxa todos caracteres validos p email */
    if (value.length === "") {
      setError("Preencha seu email");
    } else if (!regex.test(value)) {
      setError("Email incorreto");
    } else {
      setError(null);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Participe de nossas news com promoções e novidades!
        </h1>
        <div className={styles.mobile}>
          <input /* input name */
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleWithValueName}
          />
          {error && <p> {error}</p>}
          <input /* input email */
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={handleWithValueEmail}
          />
          {error && <p> {error}</p>}
          <button className={styles.button}>Eu quero!</button>
        </div>
      </div>
    </form>
  );
};