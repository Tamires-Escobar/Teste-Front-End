import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./style.module.css";
import {Rating} from 'react-simple-star-rating';




/* consulta api via fetch */
export const Content = (props) => {
  const [listOfArrayProducts, setListOfArrayProducts] = useState([]); /* mostra set list */

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")  /* consimundo api via fetch */
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
  
  const [rating, setRating] = useState(0)/* os dois const servem para criar as estrelas
                                            de avaliação */
  const handleRating = (rate) => {
    setRating(rate)
  }

  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mais Vendidos</h1>
        <Slider className={styles.content__div} {...settings}>
          {listOfArrayProducts?.map((item) => (/* map manipula itens de uma matriz (array) interando e acessando itens individuais */
            <div key={item.productId}> {/* key  atribui aos itens da listOfarayproducts?.map.  */}
              <img
                className={styles.content__img}
                src={item.imageUrl}
                alt="Imagem"
              />
              <div className={styles.content__div__info}>
                <h4 className={styles.content__div__title}>
                  {item.productName}
                </h4>
                <span className={handleRating}>   
                  <Rating className={handleRating} onClick={handleRating} ratingValue={item.stars}/>    
                  {/* rating cria as stars e ratingValue puxando o item.stars da api */}
                </span>

                {item.listPrice ? (
                  <p className={styles.content__listPrice}>
                    de {item.listPrice.toLocaleString('pt-BR', {style:"currency", currency: "BRL"})}
                    
                  </p>
                ) : (
                  <p className={styles.content__empty}></p>
                )}
                <p className={styles.content__price}>por {item.price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</p>

                {item.installments.map(
                  (subItem) =>
                    subItem && (
                      <p
                        className={styles.content__alternative__price}
                        key={subItem.quantity}
                      >
                        ou em {subItem.quantity}x de {subItem.value.toLocaleString('pt-BR', {style:"currency", currency: "BRL"})}`
                      </p>
                    )
                )}
                <button
                  onClick={props.handleWithState} /* props >> propriedade, handlewithstate lidar com estado */
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

