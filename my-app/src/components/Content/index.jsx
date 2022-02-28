import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./style.module.css";

/* consulta api via fetch */
export const Content = (props) => {
  const [listOfArrayProducts, setListOfArrayProducts] = useState([]);

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((result) => setListOfArrayProducts(result));
  }, []);

  
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mais Vendidos</h1>
        <Slider className={styles.content__div} {...settings}>
          {listOfArrayProducts?.map((item) => (
            <div key={item.productId}>
              <img
                className={styles.content__img}
                src={item.imageUrl}
                alt="Imagem"
              />
              <div className={styles.content__div__info}>
                <h4 className={styles.content__div__title}>
                  {item.productName}
                </h4>
                <span>{item.stars}</span>

                {item.listPrice ? (
                  <p className={styles.content__listPrice}>
                    de R$ {item.listPrice}
                  </p>
                ) : (
                  <p className={styles.content__empty}></p>
                )}
                <p className={styles.content__price}>por R$ {item.price}</p>

                {item.installments.map(
                  (subItem) =>
                    subItem && (
                      <p
                        className={styles.content__alternative__price}
                        key={subItem.quantity}
                      >
                        ou em ${subItem.quantity}x de R$ ${subItem.value}`
                      </p>
                    )
                )}
                <button
                  onClick={props.handleWithState}
                  className={styles.content__button}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};