import React, { Component, Fragment } from 'react';
import {Header, Body, Footer} from '../index';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }

}

export default Card;
