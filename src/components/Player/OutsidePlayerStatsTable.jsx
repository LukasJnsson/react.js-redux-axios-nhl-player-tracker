
import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default class OutsidePlayerStatsTable extends Component {

  /**
   * Method that returns the columns for the outside player stats table
   * @returns {Array} - The columns
   */
  getColumns() {
    return [
        //{ field: 'id', headerName: 'ID', width: 60 },
        { field: 'gamesPlayed', headerName: 'GP', width: 20 },
        { field: 'assists', headerName: 'A', width: 20 },
        { field: 'goals', headerName: 'G', width: 20 },
        { field: 'points', headerName: 'TP', width: 20 },
        { field: 'plusMinus', headerName: '+/-', width: 20 },
        { field: 'faceOffPct', headerName: 'FOFFP', width: 80 },
        { field: 'penaltyMinutes', headerName: 'PIM', width: 80 },
        { field: 'powerPlayTimeOnIce', headerName: 'PPT', width: 80 },
        { field: 'powerPlayPoints', headerName: 'PPP', width: 80 },
        { field: 'timeOnIcePerGame', headerName: 'AVG TOI', width: 100 },
        { field: 'powerPlayTimeOnIcePerGame', headerName: 'AVG PP TOI', width: 100 },
        { field: 'shortHandedTimeOnIcePerGame', headerName: 'AVG BP TOI', width: 100 },
    ];
  };

  /**
   * Method that returns the rows for the outside player stats table
   * @param {Object} player - The player
   * @returns {Array} - The rows which corresponds to the player stats
   */
  getRows(player) {
    try {
        return [{
            id: player.id,
            gamesPlayed: player.gamesPlayed,
            assists: player.assists,
            goals: player.goals,
            points: player.points,
            plusMinus: player.plusMinus,
            faceOffPct: player.faceOffPct,
            penaltyMinutes: player.penaltyMinutes,
            powerPlayTimeOnIce: player.powerPlayTimeOnIce,
            powerPlayPoints: player.powerPlayPoints,
            timeOnIcePerGame: player.timeOnIcePerGame,
            powerPlayTimeOnIcePerGame: player.powerPlayTimeOnIcePerGame,
            shortHandedTimeOnIcePerGame: player.shortHandedTimeOnIcePerGame,
        }];
    } catch (err) {
        return [];
    };
  };

  render() {
    return (
        <div className='outer-outside-player-stats-table'>
            <DataGrid className='inner-outside-player-stats-table' 
            columns={this.getColumns()} rows={this.getRows(this.props.player)}/>
      </div>
    );
  };
};