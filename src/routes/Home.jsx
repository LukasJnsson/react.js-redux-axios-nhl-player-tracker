
import React, { Component } from 'react';
import Loading from '../components/Loading';
import Title from '../components/Title';
import PlayerTable from '../components/Player/PlayerTable';


export default class Home extends Component {

  /**
   * Method that fetch all players and set them in the state when the component is mounted
   */
  async componentDidMount() {
    try {
      this.props.players ?? await this.props.fetchPlayers();

    } catch (err) {
      return;
    };
  };

  render() {
    return (
      <div>
        <Title setTitle={'Home'} />
        {this.props.isFetching ? (
          <Loading size={'medium'} />
        ) : this.props.players.length > 0 ? (
          <PlayerTable players={this.props.players} />
        ) : <p className='not-found'>Could not find any players...</p>}
      </div>
    );
  };
};