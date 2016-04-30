import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import './App.scss';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default Main;
