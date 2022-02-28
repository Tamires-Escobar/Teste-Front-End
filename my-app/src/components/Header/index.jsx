import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import styles from "./style.module.css";

import { GrFormSearch } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

export const Header = (props) => {
  const [noEffect, setNoEffect] = useState(false);
  const handleClick = () => setNoEffect((first) => !first);

  return (
    <header className={styles.container}>
      <nav className={styles.container__secondary}>
        <div className={styles.div__mobile}>
          <span
            onClick={handleClick}
            className={`${styles.spanH} ${noEffect ? styles.active : ""}`}
          ></span>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={styles.containerInput}>
          <input
            className={styles.inputWrapper}
            type="text"
            placeholder="O que está procurando?"
          />
          <span className={styles.icon}>
            <GrFormSearch />
          </span>
        </div>
        <div className={styles.user}>
          <div className={styles.user__div}>
            <span>
              <AiOutlineUser />
            </span>
            <p>Minha Conta</p>
          </div>

          <div className={styles.user__div__secondary}>
            <span>
              <GiShoppingCart />
            </span>
            <span>{props.handleWithValueLocalStorage()}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};