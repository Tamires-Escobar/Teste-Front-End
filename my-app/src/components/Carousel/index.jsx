import React from "react";
import styles from "./style.module.css";

export const Carousel = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__div__img}>
        <div className={styles.container__secondary}>
          <div>
            <p className={styles.paragraphOne}>
              Olá, o que você está buscando?
            </p>
            <p className={styles.paragraphTwo}>
              Criar ou migrar seu e-commerce?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};