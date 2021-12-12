import React from "react";

const HeroContext = React.createContext({
  heroes: [],
  alignment: [{ good: 0, bad: 0 }],
  addHero: (hero) => {},
  addAlignment: (alig) => {},
  removeHero: (id) => {},
});

export default HeroContext;
