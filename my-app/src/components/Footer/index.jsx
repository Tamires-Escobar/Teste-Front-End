import React from "react";
import footerParteThree from "../assets/img/footerParteThree.png";
import footerPartOne from "../assets/img/footerPartOne.png";
import footerPartTwo from "../assets/img/footerPartTwo.png";
import styles from "./style.module.css";

import { MdEmail } from "react-icons/md";
import { MdHeadphones } from "react-icons/md";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
          {/* container localização */}
      <div className={styles.container}>
        <div className={styles.container__one}>
          <h3>Localização</h3>
          <div className={styles.container__bar}></div>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP <br />
            brasil@corebiz.ag <br />
            +55 11 3090 1039
          </p>
        </div>

          {/* container button */}
        <div className={styles.container__two}>
          {/* button 1 */}
          <button className={styles.container__two__div}>
            <span className={styles.container__two__span}><MdEmail/></span> {/* icon email */}
            <p>Entre em contato</p>
          </button>

           {/* button 2 */}
          <button className={styles.container__two__div}>
            <span className={styles.container__three__span}><MdHeadphones/></span>
            <p className={styles.container__two__p}>
              Fale com nosso consultor online
            </p>
          </button>
        </div>

          {/* logo footer */}
        <div className={styles.container__three}>
          <div>
            <img src={footerParteThree} alt="Logo footer" /> {/* img created by */}
            <img src={footerPartOne} alt="Logo footer" /> {/* img corebiz */}
          </div>
          <img src={footerPartTwo} alt="Logo footer" /> {/* img powered by vtex */}
        </div>
      </div>
    </footer>
  );
};