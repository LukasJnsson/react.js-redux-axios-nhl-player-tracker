
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from '../components/Title';
import Header from '../components/Header';
import Home from '../containers/Home.container';
import Players from '../containers/Players.container';
import Search from '../containers/Search.container';
import Player from '../containers/Player.container';
import NotFound from './NotFound';


export default class PlayerTracker extends Component {
  render() {
    return (
      <div>
        <Title setTitle={'Player Tracker'} />
          <BrowserRouter>
            <Header />
            <div>
              <Routes>
                <Route index exact path="/" element={<Home />} />
                <Route path="/nhl/players" element={<Players />} />
                <Route path="/nhl/players/search" element={<Search />} />
                <Route path="/nhl/players/:id" element={<Player />} />
                <Route path="/*" element={NotFound} />
              </Routes>
            </div>
          </BrowserRouter>
      </div>
    );
  };
};