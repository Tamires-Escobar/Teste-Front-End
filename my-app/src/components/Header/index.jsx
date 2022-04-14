import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import styles from "./style.module.css";

import { GrFormSearch } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

export const Header = (props) => {
  const [noEffect, setNoEffect] = useState(false);/* usestate usa o estado local de um componente de função
                                                    pode ser passado o estado inicial p esta função e ela retorna
                                                    uma variavel com o valor do estado atual. */
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
            <GrFormSearch /> {/* icon lupa */}
          </span>
        </div>
        <div className={styles.user}>
          <div className={styles.user__div}>
            <span>
              <AiOutlineUser /> {/* icon usuario */}
            </span>
            <p>Minha Conta</p>
          </div>

          <div className={styles.user__div__secondary}>
            <span>
              <GiShoppingCart /> {/* icon carrinho */}
            </span>
            <span>{props.handleWithValueLocalStorage()}</span>{/* ahndlewithlocalestorage > lida com armazenamento local de um valor */}
          </div>
        </div>
      </nav>
    </header>
  );
};