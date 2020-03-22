export default (players, playersRevealed) => players
  .filter(player => player.card)
  .forEach(player => {
    if (playersRevealed.every((playerRevealed) => playerRevealed.id !== player.id))
    {
      playersRevealed.push(player);
    }
  });;
