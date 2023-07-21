
import React, { Component } from 'react';
import Title from '../components/Title';
import Loading from '../components/Loading';
import PlayerCard from '../components/Player/PlayerCard';
import GoaliePlayerStatsTable from '../components/Player/GoaliePlayerStatsTable';
import OutsidePlayerStatsTable from '../components/Player/OutsidePlayerStatsTable';
import getPlayerById from '../utils/player/playerById.util';


export default class Player extends Component {

  /**
   * Method that fetch all players and set them in the state when the component is mounted
   * if they are not in the state. Furthermore it fetch the stats of the selected player
   * and sets the stats in the state
   */
  async componentDidMount() {
    try {
      this.props.players ?? await this.props.fetchPlayers();
      const players = this.props.players;
      const player = getPlayerById(players);
      await this.props.fetchPlayerProps(player);

    } catch (err) {
      return;
    };
  };

  render() {
    return (
      <div className='outer-player'>
      <Title setTitle={'Player'} />
      {this.props.isFetching ?  <Loading size={'medium'} /> :
      <div className='inner-player-player-card'>
        <PlayerCard key={this.props.playerStats.id} player={this.props.playerStats} />
      </div>
      }
      {this.props.playerStats && 
      String(this.props.playerStats.primaryPosition) === 'Goalie' ?
      <GoaliePlayerStatsTable player={this.props.playerStats} /> :
      <OutsidePlayerStatsTable player={this.props.playerStats} />
      }
      </div>
    );
  };
};