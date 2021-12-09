import { useContext, useState } from "react";
import styles from "./CardsResults.module.css";
import Chart from "react-apexcharts";
import HeroContext from "../../store/hero-context";
import { optionsCard, averageStats } from "../../helper/chart";

const CardsResults = ({ searchData }) => {
  const heroCtx = useContext(HeroContext);
  const [errors, setErrors] = useState("");

  const { name, image, id, biography, powerstats } = searchData;

  const addHeroHandler = () => {
    heroCtx.addHero({
      id,
      name,
      image,
      powerstats,
    });
  };

  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const statsArr = [intelligence, strength, speed, durability, power, combat];
  const alignment = biography.alignment === "good" ? "Hero" : "Villain";

  if (heroCtx.heroes.length === 7) {
    setErrors("Tu equipo ya esta completo");
  }
  console.log(heroCtx);
  return (
    <div className={styles["heroes__result-content"]}>
      <div className={styles["heroes__identity"]}>
        <h1 className={styles["heroes__name"]}>{name}</h1>
        <span className={styles["heroes__alignment"]}>{alignment}</span>
      </div>
      <div className="">
        <div className="">
          <img className={styles.probando} src={image.url} alt={name} />
        </div>
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
          <button onClick={addHeroHandler}>Agregar</button>
        </div>
      )}
    </div>
  );
};

export default CardsResults;
