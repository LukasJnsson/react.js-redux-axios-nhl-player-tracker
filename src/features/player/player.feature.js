
import { createSlice } from "@reduxjs/toolkit";


/**
 * Player Slice
 */
export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        player: null
    },
    reducers: {
        setPlayer: (state, action) => {
            state.player = action.payload;
        }
    }
});


export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;