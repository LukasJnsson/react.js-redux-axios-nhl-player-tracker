
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchPlayers } from '../features/players/players.feature';
import { fetchPlayerProps } from '../features/playerStats/playerStats.feature';
import Player from '../routes/Player';


function mapStateToProps(state) {
    return {
      players: state.players.players,
      playerStats: state.playerStats.playerStats,
      isFetching: state.playerStats.isFetching
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlayers, fetchPlayerProps }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);