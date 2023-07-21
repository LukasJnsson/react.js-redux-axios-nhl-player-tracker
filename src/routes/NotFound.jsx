
import React, { Component } from 'react';
import Title from '../components/Title';


export default class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <Title setTitle={'Not Found'} />
        Not Found
      </div>
    );
  };
};