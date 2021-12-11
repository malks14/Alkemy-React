import { useContext, useState, useCallback } from "react";
import styles from "./CardsResults.module.css";
import Chart from "react-apexcharts";
import HeroContext from "../../store/hero-context";
import { optionsCard, averageStats } from "../../helper/chart";

const CardsResults = ({ searchData }) => {
  const heroCtx = useContext(HeroContext);
  const [errors, setErrors] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const { name, image, id, biography, powerstats, appearance } = searchData;

  // const colocarNuevoHeroe = searchData => {
  //   const contadorAlianza = (alignment) => {
  //     return heroes.reduce((previousValue, currentValue) => currentValue.biography.alignment === alignment > ++previousValue : previousValue), 0);
  //   }
  // }

  const addingHeroHandler = useCallback(() => {
    setIsAdded(true);
    // colocarNuevoHeroe(searchData);
    if (heroCtx.heroes.length === 6) {
      return setErrors("Tu equipo ya esta completo");
    } else if (heroCtx.heroes.some((h) => h.id === searchData.id) || isAdded) {
      return setErrors("El Heroe ya pertenece a tu equipo");
    }

    heroCtx.addHero({
      id,
      name,
      image,
      powerstats,
      biography,
      appearance,
    });
  }, [heroCtx, searchData, id.name, image, powerstats, biography, appearance]);

  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;

  const statsArr = [intelligence, strength, speed, durability, power, combat];

  const alignment = biography.alignment === "good" ? "Hero" : "Villain";

  console.log(heroCtx);
  return (
    <div className={styles["heroes__result-content"]}>
      <div className={styles["heroes__identity"]}>
        <h1 className={styles["heroes__name"]}>{name}</h1>
        <div
          className={`${styles["heroes__alignment-container"]} ${
            alignment !== "Hero" ? styles.villain : styles.hero
          }`}
        >
          <span className={styles["heroes__alignment"]}>{alignment}</span>
        </div>
      </div>
      <div className="">
        <img className={styles.probando} src={image.url} alt={name} />

        <h6 className={styles["heroes__avg"]}>
          Powerstats avg: {averageStats(...statsArr)}
        </h6>
        <Chart
          options={optionsCard}
          series={[
            {
              name: "Score",
              data: statsArr,
            },
          ]}
          type="radar"
          width="350"
          height="310"
        />
      </div>
      {errors ? (
        <p className={styles.error}>{errors}</p>
      ) : (
        <div className={styles["heroes__result-action"]}>
          <button onClick={addingHeroHandler}>
            {!isAdded ? "Agregar Heroe" : "Ya esta en tu equipo"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardsResults;
