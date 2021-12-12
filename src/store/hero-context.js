import React from "react";

const HeroContext = React.createContext({
  heroes: [],
  addHero: (hero) => {},
  removeHero: (id) => {},
});

export default HeroContext;
