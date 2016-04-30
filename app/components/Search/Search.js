import React, { Component, PropTypes } from 'react';

// import './search.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const wut = document.getElementById('search-info');
    this.props.send(wut.value);
    wut.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input id="search-info" placeholder="search"></input>
        <button >Search</button>
      </form>
    )
  }
}
//
function mapStateToProps(state) {
  return {
    artistName: state.artist.artistName
  }
}
function mapDispatchToProps(dispatch) {
  return {
    send: function(value){dispatch(Actions.updateArtistName(value)); }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search)
