import { useContext } from "react";
import HeroContext from "../../store/hero-context";
import {
  getAvgPow,
  getAvgSpeed,
  getAvgRes,
  getAvgComb,
  getAvgFuerza,
  getAvgHeight,
  getAvgWeight,
  getAvgIntel,
  getStrongestStat,
} from "../../helper/stats";
import HomeCards from "./HomeCards";
import styles from "./Home.module.css";

import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";
import BatteryStdIcon from "@mui/icons-material/BatteryStd";

const Home = () => {
  const heroCtx = useContext(HeroContext);
  const hasHeroes = heroCtx.heroes.length > 0;

  const avgIntel = `${getAvgIntel(heroCtx.heroes).toFixed(0)}`;
  const avgComb = `${getAvgComb(heroCtx.heroes).toFixed(0)}`;
  const avgRes = `${getAvgRes(heroCtx.heroes).toFixed(0)}`;
  const avgPow = `${getAvgPow(heroCtx.heroes).toFixed(0)}`;
  const avgSpe = `${getAvgSpeed(heroCtx.heroes).toFixed(0)}`;
  const avgFuerza = `${getAvgFuerza(heroCtx.heroes).toFixed(0)}`;
  const avgWeigh = `${getAvgWeight(heroCtx.heroes).toFixed(0)}`;
  const avgHeight = `${getAvgHeight(heroCtx.heroes).toFixed(0)}`;

  return (
    <div className={styles["heroes__home-display"]}>
      <div className={styles["heroes__home-stats_container"]}>
        <div className={styles["heroes__home-stats_grid"]}>
          <div className={styles["grid-box"]}>
            <p>
              <span>COMBATE</span>: {avgComb}
            </p>
            <SportsKabaddiIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>RESISTENCIA</span>: {avgRes}
            </p>
            <BatteryStdIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>INTELIGENCIA</span>: {avgIntel}
            </p>
            <PsychologyIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>PODER</span>: {avgPow}
            </p>
            <ShieldIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>VELOCIDAD</span>: {avgSpe}
            </p>
            <BoltIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>FUERZA</span>: {avgFuerza}
            </p>
            <FitnessCenterIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>PESO</span>: {avgWeigh}Kg
            </p>
            <ScaleIcon />
          </div>
          <div className={styles["grid-box"]}>
            <p>
              <span>ALTURA</span>: {avgHeight}cm
            </p>
            <StraightenIcon />
          </div>
        </div>
        <div className={styles["heroes__home-stats_avg"]}>
          <p>
            <span>Categoria Equipo</span>:
            {getStrongestStat(heroCtx.heroes).charAt(0).toUpperCase() +
              getStrongestStat(heroCtx.heroes).slice(1)}
          </p>
        </div>
      </div>
      <div>
        {hasHeroes ? (
          <div className={styles["heroes__home"]}>
            <p className={styles.team}>TU EQUIPO ES:</p>
            <HomeCards />
          </div>
        ) : (
          <p className={styles.team}>NO ARMASTE TU EQUIPO AUN</p>
        )}
      </div>
    </div>
  );
};

export default Home;
