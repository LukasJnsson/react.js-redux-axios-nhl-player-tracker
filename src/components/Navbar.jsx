
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>
            <div className='navlinks'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nhl/players'>Players</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nhl/players/search'>Search</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
  };
};