
/**
 * Method that access the player id from the URL and returns the player object that id
 * @param {Array} players - The array with all players 
 * @returns {Object} - The player with the player id equal to the URL player id 
 * (I miss the hook useParams())
 */
export default function getPlayerById(players) {
    const playerId = Number(window.location.href.split('/')[5]);
    const player = players.find((player) => player.id === playerId);
    return player;
};