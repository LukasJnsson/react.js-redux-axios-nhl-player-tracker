
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchPlayerProps } from '../features/playerStats/playerStats.feature';
import Home from '../routes/Home';


function mapStateToProps(state) {
    return {
      players: state.players.players,
      isFetching: state.players.isFetching
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlayerProps }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);