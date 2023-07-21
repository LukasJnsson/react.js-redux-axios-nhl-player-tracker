
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';


export default class Title extends PureComponent {
  render() {
    return (
        <Helmet>
            <title>{this.props.setTitle}</title>
        </Helmet>
    );
  };
};