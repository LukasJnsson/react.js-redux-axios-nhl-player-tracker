
import React, { Component } from 'react';
import Title from '../components/Title';
import Loading from '../components/Loading';
import PlayerCard from '../components/Player/PlayerCard';


export default class Players extends Component {

  /**
   * Method that fetch all players and set them in the state when the component is mounted
   * if they are not in the state
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
      <div className="outer-player-cards">
        <Title setTitle={'Players'} />
        {this.props.isFetching ? (
          <Loading size={'medium'} />
        ) : this.props.players.length > 0 ? (
          this.props.players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          )))
          : (!this.props.isFetching && <p className='not-found'>Could not find any players...</p>)}
      </div>
    );
  };
};