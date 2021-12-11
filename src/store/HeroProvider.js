import { useReducer } from "react";
import HeroContext from "./hero-context";

const defaultHeroState = {
  heroes: [],
};

const heroReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, heroes: [...state.heroes, action.hero] };
    case "REMOVE":
      return {
        heroes: [...state.heroes.filter((heroe) => heroe.id !== action.id)],
      };
    default:
      return state;
  }
};

const HeroProvider = (props) => {
  const [heroState, dispatchHeroAction] = useReducer(
    heroReducer,
    defaultHeroState
  );

  const addHeroHandler = (hero) => {
    dispatchHeroAction({ type: "ADD", hero: hero });
  };

  const removeHeroHandler = (id) => {
    dispatchHeroAction({ type: "REMOVE", id: id });
  };

  const heroContext = {
    heroes: heroState.heroes,
    addHero: addHeroHandler,
    removeHero: removeHeroHandler,
  };

  return (
    <HeroContext.Provider value={heroContext}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
