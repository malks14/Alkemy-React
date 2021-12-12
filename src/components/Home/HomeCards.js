import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import HeroContext from "../../store/hero-context";
import styles from "./HomeCards.module.css";

const HomeCards = () => {
  const heroCtx = useContext(HeroContext);
  const history = useHistory();
  const removeHeroHandler = (id) => {
    heroCtx.removeHero(id);
  };

  return (
    <div className={styles["heroes__home-display"]}>
      {heroCtx.heroes.map((heroe, i) => {
        return (
          <div className={styles["heroes__team-display"]} key={i}>
            <div className={styles["heroes__team-card"]}>
              <img
                className={styles["heroes__team-image"]}
                src={heroe.image.url}
                alt={heroe.name}
              />
              <div>
                <h2 className={styles.title}>{heroe.name}</h2>
                <div className={styles["heroes__team-card_stats"]}>
                  <h3 className={styles.name}>Intelligence:</h3>
                  <p>{heroe.powerstats.intelligence}</p>
                  <h3 className={styles.name}>Power:</h3>
                  <p>{heroe.powerstats.power}</p>
                  <h3 className={styles.name}>Combat:</h3>
                  <p>{heroe.powerstats.combat}</p>
                  <h3 className={styles.name}>Speed:</h3>
                  <p>{heroe.powerstats.speed}</p>
                  <h3 className={styles.name}>Strength:</h3>
                  <p>{heroe.powerstats.strength}</p>
                  <h3 className={styles.name}>Durability:</h3>
                  <p>{heroe.powerstats.durability}</p>
                </div>
                <div className={styles["heroes__result-button"]}>
                  <button
                    onClick={() => history.replace(`/heroes/${heroe.id}`)}
                    className={styles["heroes__result-details"]}
                  >
                    Detalles
                  </button>
                  <button
                    onClick={removeHeroHandler.bind(null, heroe.id)}
                    className={styles["heroes__result-remove"]}
                  >
                    Remover Heroe
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCards;
