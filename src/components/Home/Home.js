import { useContext } from "react";
import { useHistory } from "react-router-dom";
import HeroContext from "../../store/hero-context";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();
  const heroCtx = useContext(HeroContext);
  const hasHeroes = heroCtx.heroes.length > 0;

  const addHeroHandler = (id) => {
    heroCtx.removeHero(id);
  };

  const heroesDisplay = (
    <div className={styles["heroes__home-display"]}>
      {heroCtx.heroes.map((heroe, i) => {
        return (
          <>
            <div className={styles["heroes__team-display"]} key={i}>
              <div className={styles["heroes__team-card"]}>
                <img
                  className={styles["heroes__team-image"]}
                  src={heroe.image.url}
                  alt={heroe.name}
                />
                <div>
                  <h2 className={styles.name}>{heroe.name}</h2>
                  <p className={styles.name}>
                    Intelligence: {heroe.powerstats.intelligence}
                  </p>
                  <p className={styles.name}>Power: {heroe.powerstats.power}</p>
                  <p className={styles.name}>
                    Combat: {heroe.powerstats.combat}
                  </p>
                  <p className={styles.name}>Speed: {heroe.powerstats.speed}</p>
                  <p className={styles.name}>
                    Strength: {heroe.powerstats.strength}
                  </p>
                  <p className={styles.name}>
                    Durability: {heroe.powerstats.durability}
                  </p>
                  <div className={styles["heroes__result-button"]}>
                    <button
                      onClick={() => history.replace(`/heroes/${heroe.id}`)}
                      className={styles["heroes__result-details"]}
                    >
                      Detalles
                    </button>
                    <button
                      onClick={addHeroHandler.bind(null, heroe.id)}
                      className={styles["heroes__result-remove"]}
                    >
                      Remover Heroe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );

  return (
    <div className={styles["heroes__home-display"]}>
      {hasHeroes ? (
        <div>
          <p className={styles.team}>TU EQUIPO ES:</p>
          {heroesDisplay}
        </div>
      ) : (
        <p className={styles.team}>NO ARMASTE TU EQUIPO AUN</p>
      )}
    </div>
  );
};

export default Home;
