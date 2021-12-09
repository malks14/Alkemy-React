import React from "react";
import styles from "./HeroesDetails.module.css";

const HeroesDetails = ({ image, biography, appearance, name, work }) => {
  return (
    <div className={styles["heroes__details-container"]}>
      <div className={styles["heroes__details-img"]}>
        <img alt={name} src={image.url} />
      </div>
      <div>
        <h1>{name}</h1>
        <p>
          <span>Nombre:</span> {biography["full-name"]}
        </p>
        <p>
          <span>Alias:</span> {biography["aliases"].join(", ")}
        </p>
        <p>
          <span>Trabajo:</span> {work["base"]}
        </p>
        <p>
          <span>Peso:</span> {appearance["weight"][1]}
        </p>
        <p>
          <span>Height:</span> {appearance["height"][1]}
        </p>
        <p>
          <span>Color de pelo:</span> {appearance["hair-color"]}
        </p>
        <p>
          <span>Color de ojos:</span> {appearance["eye-color"]}
        </p>
      </div>
    </div>
  );
};

export default HeroesDetails;