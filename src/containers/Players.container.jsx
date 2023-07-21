
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchPlayers } from '../features/players/players.feature';
import Players from '../routes/Players';


function mapStateToProps(state) {
    return {
      players: state.players.players,
      isFetching: state.players.isFetching,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlayers }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Players);