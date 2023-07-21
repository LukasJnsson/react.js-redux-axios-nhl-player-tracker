
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import checkFalsyObject from "../../utils/validation/checkFalsyObject.util.js";


/**
 * Function that fetch the NHL teams and their rosters
 * @async
 * @returns {Array} - The array with player objects each object includes the player link and team abbreviation
 */
async function fetchPlayerLinks() {
    try {
        const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster`);
        const teams = response.data.teams;

        const players = [];

        for (let i = 0; i < teams.length; i++) {
            const team = teams[i];
            const roster = team.roster.roster;
            for (let x = 0; x < roster.length; x++) {
                const player = checkFalsyObject({
                    currentTeamAbbreviation: team.abbreviation,
                    playerLink: roster[x].person.link
                });
                players.push(player);
            };
        };
        return players;

    } catch (err) {
        return [];
    };
};

/**
 * Function that fetch player
 * @async
 * @param {String} playerLink - The player link
 * @returns {Object} - The default props of the player
 */
async function fetchPlayer(playerLink) {
    try {
        const response = await axios.get(`https://statsapi.web.nhl.com/${playerLink}`);
        const player = response.data.people[0];
        return checkFalsyObject({
            id: player.id,
            link: player.link,
            image: `http://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}.jpg`,
            firstName: player.firstName,
            lastName: player.lastName,
            primaryNumber: player.primaryNumber,
            birthCity: player.birthCity,
            nationality: player.nationality,
            currentTeam: player.currentTeam.name,
            currentTeamAbbreviation: player.teamAbbreviation,
            primaryPositionCode: player.primaryPosition.code,
            primaryPosition: player.primaryPosition.name,
            profile: `https://www.nhl.com/player/${player.firstName}-${player.lastName}-${player.id}`
        });
  
      } catch (err) {
          return;
      };
};

/**
 * Function that fetch all players
 * @async
 */
export const fetchPlayers = createAsyncThunk('players/fetch', async () => {
        try {
            const playerLinks = await fetchPlayerLinks();
            const players = [];
    
            for (const link of playerLinks) {
                const player = await fetchPlayer(link.playerLink);
                player && players.push({...player, ...link});
            };
            return players;
    
        } catch (err) {
            return;
        }; 
    }
);


/**
 * Players Slice
 */
export const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: null,
        isFetching: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlayers.pending, (state, action) => {
            state.isFetching = true;
        })
        .addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isFetching = false;
            state.players = action.payload;
        })
        .addCase(fetchPlayers.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
        })
    }
});


export default playersSlice.reducer;