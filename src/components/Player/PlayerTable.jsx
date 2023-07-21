
import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default class PlayerTable extends Component {

  /**
   * Method that returns the columns for the player table
   * @returns {Array} - The columns
   */
  getColumns() {
    return [
        //{ field: 'id', headerName: 'ID', width: 60 },
        { field: 'primaryNumber', headerName: 'Number', width: 80 },
        { field: 'nationality', headerName: 'Nationality', width: 110 },
        { field: 'birthCity', headerName: 'Birth City', width: 140 },
        { field: 'firstName', headerName: 'First Name', width: 105 },
        { field: 'lastName', headerName: 'Last Name', width: 105 },
        { field: 'team', headerName: 'Team', width: 140 },
        { field: 'position', headerName: 'Position', width: 110 }
    ];
  };

  /**
   * Method that maps and returns the rows for the player table
   * @param {Array} players - The players
   * @returns {Array} - The rows, each row corresponds to a player
   */
  getRows(players) {
    try {
      return players.map((player) => ({
        id: player.id,
        image: player.image,
        primaryNumber: `#${player.primaryNumber}`,
        nationality: player.nationality,
        birthCity: player.birthCity,
        firstName: player.firstName,
        lastName: player.lastName,
        team: player.currentTeam,
        position: player.primaryPosition
    }));

    } catch (err) {
      return [];
    };
  };

  /**
   * Method that set the initial pagination for the player table
   * @returns {Object} - The pagination
   */
  setInitialPagination() {
    return {
        pagination: {
            paginationModel: { page: 0, pageSize: 20 },
            },
    };
  };

  /**
   * Method that set the page size options
   * @returns {Array} - The page size options
   */
  setPageSizeOptions() {
    return [10, 20, 40, 60, 80];
  };

  render() {
    return (
        <div className='outer-player-table'>
            <DataGrid className='inner-player-table' columns={this.getColumns()} rows={this.getRows(this.props.players)}
            initialState={this.setInitialPagination()} pageSizeOptions={this.setPageSizeOptions()} checkboxSelection
            />
      </div>
    );
  };
};