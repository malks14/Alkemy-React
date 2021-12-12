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

  // const addAlignment = () => {
  //   if (biography.alignment === "good") {
  //     if (heroCtx.alignment.good < 3) {
  //       heroCtx.addAlignment({
  //         good: heroCtx.alignment.good + 1,
  //       });
  //     }
  //   }
  // };

  const onSetNewMember = (searchData) => {};

  const addingHeroHandler = useCallback(() => {
    setIsAdded(true);
    const countAlignment = (alignment) => {
      return heroCtx.heroes.reduce(
        (acc, cur) => (cur.biography.alignment === alignment ? ++acc : acc),
        0
      );
    };
    if (heroCtx.heroes.length === 6) {
      return setErrors("Tu equipo ya esta completo");
    } else if (
      heroCtx.heroes.some((hero) => hero.id === searchData.id) ||
      isAdded
    ) {
      return setErrors("El Heroe ya pertenece a tu equipo");
    } else if (
      countAlignment("good") === 3 &&
      searchData.biography.alignment === "good"
    ) {
      return setErrors("Hay suficientes Heroes en tu equipo");
    } else if (
      countAlignment("bad") === 3 &&
      searchData.biography.alignment === "bad"
    ) {
      return setErrors("Hay suficientes Villanos en tu equipo");
    }

    heroCtx.addHero({
      id,
      name,
      image,
      powerstats,
      biography,
      appearance,
    });
  }, [heroCtx, searchData, id, name, image, powerstats, biography, appearance]);

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
        <div
          className={`${styles["heroes__result-action"]} ${`${
            isAdded ? styles.added : null
          }`}`}
        >
          <button onClick={addingHeroHandler}>
            {!isAdded ? "Agregar Heroe" : "Ya esta en tu equipo"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardsResults;

// else if (
//       biography.alignment === "good" &&
//       heroCtx.heroes.heroeContador.length > 2
//     ) {
//       return setErrors("Ya tiene suficientes Heroes");
//     } else if (
//       biography.alignment === "bad" &&
//       heroCtx.heroes.biography.alignment.bad.length > 2
//     ) {
//       return setErrors("Ya tiene suficientes Villanos");
//     }
