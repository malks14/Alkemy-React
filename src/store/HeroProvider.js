import { useReducer } from "react";
import HeroContext from "./hero-context";

const defaultHeroState = {
  heroes: [],
  alignment: [{ good: 0, bad: 0 }],
};

const heroReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HERO":
      return {
        ...state,
        heroes: [...state.heroes, action.hero],
      };
    case "ADD_ALIGNMENT":
      return {
        ...state,
        alignment: [...state.alignment, action.alignment],
      };
    case "REMOVE_HERO":
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
    dispatchHeroAction({ type: "ADD_HERO", hero: hero });
  };
  const addAlignmentHandler = (alignment) => {
    dispatchHeroAction({ type: "ADD_ALIGNMENT", alignment: alignment });
  };

  const removeHeroHandler = (id) => {
    dispatchHeroAction({ type: "REMOVE_HERO", id: id });
  };

  const heroContext = {
    heroes: heroState.heroes,
    alignment: heroState.alignment,
    addAlignment: addAlignmentHandler,
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
