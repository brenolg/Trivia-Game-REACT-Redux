// fonte: projeto frontend online store - grupo 3
if (!JSON.parse(localStorage.getItem('score'))) {
  localStorage.setItem('score', JSON.stringify([]));
}

if (!JSON.parse(localStorage.getItem('name'))) {
  localStorage.setItem('name', JSON.stringify([]));
}

if (!JSON.parse(localStorage.getItem('gravatar'))) {
  localStorage.setItem('gravatar', JSON.stringify([]));
}

const readScore = () => JSON.parse(localStorage.getItem('score'));
const readName = () => JSON.parse(localStorage.getItem('name'));

export const saveScore = (score) => localStorage
  .setItem('score', JSON.stringify(score));

export const saveName = (name) => localStorage
  .setItem('name', JSON.stringify(name));

export const saveGravatar = (name) => localStorage
  .setItem('name', JSON.stringify(name));

export const getScore = () => {
  const shoppingCart = readScore();
  return shoppingCart;
};

export const getName = () => {
  const shoppingCart = readName();
  return shoppingCart;
};

export const addScore = (score) => {
  if (score) {
    const scores = readScore();
    saveScore([...scores, score]);
  }
};

export const addName = (name) => {
  if (name) {
    const names = readName();
    saveName([...names, name]);
  }
};
