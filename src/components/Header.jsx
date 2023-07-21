
import React, { Component } from 'react';
import Navbar from './Navbar';


export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className='nhl-title'>NHL Player Tracker</h1>
        <Navbar />
      </div>
    );
  };
};