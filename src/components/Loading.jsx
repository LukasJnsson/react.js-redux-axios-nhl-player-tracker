
import React, { Component } from 'react';
import ReactLoading from 'react-loading';


export default class Loading extends Component {

  /**
   * Method that set the size of the loading animation
   * @param {String} size - The size of the loading animation
   * @returns {Number} - The size of the loading animation
   */
  setSize(size) {
    switch
     (size) {
      case 'xsmall':
        return 50;
      case 'small':
        return 100;
      case 'medium':
        return 200;
      case 'large':
        return 400;
        default:
          return 100;
     };
  };

  render() {
    return (
     <div className='outer-loading'>
          <ReactLoading type={'bars'} color={'#000'} width={this.setSize(this.props.size)} height={this.setSize(this.props.size)}/>
      </div>
    );
  };
};