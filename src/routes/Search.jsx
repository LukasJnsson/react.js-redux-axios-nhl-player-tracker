
import React, { Component } from 'react';
import Title from '../components/Title';
import Loading from '../components/Loading';
import PlayerSearch from '../components/Player/PlayerSearch';
import PlayerCard from '../components/Player/PlayerCard';


export default class Search extends Component {

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
      <div className='outer-search-player-card'>
        <Title setTitle={'Search'} />
        {this.props.isFetching ? <Loading size={'medium'} />
        : <PlayerSearch players={this.props.players} setPlayer={this.props.setPlayer} />}
        {this.props.player &&
        <div className='inner-player-player-card'>
        <PlayerCard player={this.props.player} />
        </div>
        }
      </div>
    );
  };
};