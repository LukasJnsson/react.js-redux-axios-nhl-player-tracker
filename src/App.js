
import './styles/App.css';
import { Component } from 'react';
import PlayerTracker from './routes/PlayerTracker.jsx';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <PlayerTracker />
      </div>
    );
  };
};