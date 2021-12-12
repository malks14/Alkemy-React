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

export const getIntel = (heroes) => {
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

export const getFuerza = (heroes) => {
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

export const getComb = (heroes) => {
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

export const getRes = (heroes) => {
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

export const getPow = (heroes) => {
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

export const getSpeed = (heroes) => {
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
