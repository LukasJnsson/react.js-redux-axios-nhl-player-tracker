
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchPlayers } from '../features/players/players.feature';
import { setPlayer } from '../features/player/player.feature';
import Search from '../routes/Search';


function mapStateToProps(state) {
    return {
      players: state.players.players,
      player: state.player.player,
      isFetching: state.players.isFetching,
    };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlayers, setPlayer }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);