// fonte: projeto frontend online store - grupo 3
if (!JSON.parse(localStorage.getItem('player'))) {
  localStorage.setItem('player', JSON.stringify([]));
}

const readPlayer = () => JSON.parse(localStorage.getItem('player')) || [];

export const savePlayer = (score) => localStorage
  .setItem('player', JSON.stringify(score));

export const getPlayer = () => {
  const players = readPlayer();
  return players;
};

export const addPlayer = (player) => {
  if (player) {
    const players = readPlayer();
    savePlayer([...players, player]);
  }
};
