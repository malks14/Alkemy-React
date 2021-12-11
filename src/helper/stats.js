export const getAvgHeight = (heroes) => {
  let heights = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      heights.push(parseInt(currentValue.appearance.height[1]))
    );
  }
  return heights.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue / heroes.length,
    0
  );
};

export const getAvgWeight = (heroes) => {
  let weight = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      weight.push(parseInt(currentValue.appearance.weight[1]))
    );
  }
  return weight.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue / heroes.length,
    0
  );
};

export const getAvgIntel = (heroes) => {
  let intel = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      intel.push(parseInt(currentValue.powerstats.intelligence))
    );
  }
  return intel.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getAvgFuerza = (heroes) => {
  let durability = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      durability.push(parseInt(currentValue.powerstats.durability))
    );
  }
  return durability.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getAvgComb = (heroes) => {
  let combat = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      combat.push(parseInt(currentValue.powerstats.combat))
    );
  }
  return combat.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getAvgRes = (heroes) => {
  let durability = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      durability.push(parseInt(currentValue.powerstats.durability))
    );
  }
  return durability.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getAvgPow = (heroes) => {
  let power = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      power.push(parseInt(currentValue.powerstats.power))
    );
  }
  return power.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getAvgSpeed = (heroes) => {
  let speed = [];
  if (heroes.length > 0) {
    heroes.map((currentValue) =>
      speed.push(parseInt(currentValue.powerstats.speed))
    );
  }
  return speed.reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
};

export const getStrongestStat = (heroes) => {
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  let arrStats = [];
  if (heroes.length > 0) {
    heroes.map((h) => {
      let powerstats = Object.values(h.powerstats);
      let maxStat = Math.max(...powerstats).toString();
      let stat = getKeyByValue(h.powerstats, maxStat);
      arrStats.push(stat);
    });
  }
  return Object.entries(
    arrStats.reduce((acc, v) => {
      acc[v] = acc[v] ? acc[v] + 1 : 1;
      return acc;
    }, {})
  ).reduce((acc, v) => (v[1] >= acc[1] ? v : acc), [null, 0])[0];
};
