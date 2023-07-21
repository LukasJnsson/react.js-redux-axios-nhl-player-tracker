
import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default class GoaliePlayerStatsTable extends Component {

  /**
   * Method that returns the columns for the goalie player stats table
   * @returns {Array} - The columns
   */
  getColumns() {
    return [
        //{ field: 'id', headerName: 'ID', width: 60 },
        { field: 'gamesPlayed', headerName: 'GP', width: 80 },
        { field: 'savePercentage', headerName: '%', width: 100 },
        { field: 'saves', headerName: 'Saves', width: 100 },
        { field: 'goalAgainstAverage', headerName: 'GAA', width: 100 },
        { field: 'wins', headerName: 'Wins', width: 100 },
        { field: 'losses', headerName: 'Losses', width: 100 },
        { field: 'powerPlaySavePercentage', headerName: 'PP %', width: 100 },
        { field: 'shortHandedSavePercentage', headerName: 'BP %', width: 100 }
    ];
  };

  /**
   * Method that returns the rows for the goalie player stats table
   * @param {Object} player - The player
   * @returns {Array} - The rows which corresponds to the player stats
   */
  getRows(player) {
    try {
        return [{
            id: player.id,
            gamesPlayed: player.gamesPlayed,
            savePercentage: player.savePercentage,
            saves: player.saves,
            goalAgainstAverage: player.goalAgainstAverage,
            wins: player.wins,
            losses: player.losses,
            powerPlaySavePercentage: player.powerPlaySavePercentage,
            shortHandedSavePercentage: player.shortHandedSavePercentage
        }];
    } catch (err) {
        return [];
    };
  };

  render() {
    return (
        <div className='outer-goalie-player-stats-table'>
            <DataGrid className='inner-goalie-player-stats-table' 
            columns={this.getColumns()} rows={this.getRows(this.props.player)}/>
      </div>
    );
  };
};