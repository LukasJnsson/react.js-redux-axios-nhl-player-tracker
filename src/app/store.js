
import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/players.feature.js";
import playerReducer from "../features/player/player.feature.js";
import playerStatsReducer from "../features/playerStats/playerStats.feature.js";


export default configureStore({
    reducer: {
        players: playersReducer,
        player: playerReducer,
        playerStats: playerStatsReducer
    }
});