
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import checkFalsyObject from "../../utils/validation/checkFalsyObject.util.js";


/**
 * Function that fetch the player stats props
 * @async
 * @param {String} playerId - The id of the player
 * @returns {Object} - The player stats props
 */
async function fetchPlayerStats(playerId) {
    try {
        const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason&season=20222023`);
        const playerStats = response.data.stats[0].splits[0].stat;
        return playerStats;

    } catch (err) {
        return;
    };
};

/**
 * Function that fetch the default and stats props for a player
 * @async
 * @returns {Object} - The player props
 */
export const fetchPlayerProps = createAsyncThunk('players/fetchStats', async (player) => {
    try {
        const playerStatsProps = await fetchPlayerStats(player.id);

        if (String(player.primaryPosition) === 'Goalie') {
        return {...player, ...checkFalsyObject({
            gamesPlayed: playerStatsProps.games,
            wins: playerStatsProps.wins,
            losses: playerStatsProps.losses,
            saves: playerStatsProps.saves,
            savePercentage: Math.round(playerStatsProps.savePercentage * 100) / 100,
            goalAgainstAverage: Math.round(playerStatsProps.goalAgainstAverage * 100) / 100,
            powerPlaySavePercentage: Math.round(playerStatsProps.powerPlaySavePercentage * 100) / 100,
            shortHandedSavePercentage: Math.round(playerStatsProps.shortHandedSavePercentage * 100) / 100
        })}};
        return {...player, ...checkFalsyObject({
            gamesPlayed: playerStatsProps.games,
            assists: playerStatsProps.assists,
            goals: playerStatsProps.goals,
            points: playerStatsProps.points,
            plusMinus: playerStatsProps.plusMinus,
            faceOffPct: playerStatsProps.faceOffPct,
            penaltyMinutes: playerStatsProps.penaltyMinutes,
            powerPlayTimeOnIce: playerStatsProps.powerPlayTimeOnIce,
            powerPlayPoints: playerStatsProps.powerPlayPoints,
            timeOnIcePerGame: playerStatsProps.timeOnIcePerGame,
            powerPlayTimeOnIcePerGame: playerStatsProps.powerPlayTimeOnIcePerGame,
            shortHandedTimeOnIcePerGame: playerStatsProps.shortHandedTimeOnIcePerGame
        })};

    } catch (err) {
        return;
    };
});


/**
 * Player Stats Slice
 */
export const playerStatsSlice = createSlice({
    name: 'playerStats',
    initialState: {
        playerStats: null,
        isFetching: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlayerProps.pending, (state, action) => {
            state.isFetching = true;
        })
        .addCase(fetchPlayerProps.fulfilled, (state, action) => {
            state.isFetching = false;
            state.playerStats = action.payload;
        })
        .addCase(fetchPlayerProps.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
        })
    }
});


export default playerStatsSlice.reducer;