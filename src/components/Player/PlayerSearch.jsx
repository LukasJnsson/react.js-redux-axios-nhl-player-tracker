
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default class PlayerSearch extends Component {
  render() {
    return (
      <div className='outer-player-search'>
        <Autocomplete className='inner-player-search' disablePortal options={this.props.players}
        getOptionLabel={(player) => `${player.firstName} ${player.lastName} (${player.primaryPositionCode}) - ${player.currentTeam}`}
        renderInput={(params) => <TextField className='inner-player-search-text' {...params} label="Player..." />} 
        onChange={(event, player) => this.props.setPlayer(player)}
        />
      </div>
    );
  };
};