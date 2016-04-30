import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import * as Actions from '../../actions';

class SimilarArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {showTitle: false};
  }
  componentDidMount(){

  }
  componentWillReceiveProps(nextProps){
    const {related} = nextProps
    nextProps.related.length > 0 ? this.setState({showTitle: true}) : this.setState({showTitle: false})
//    const title = "DOG";
  }
  handleClick(e){
    e.preventDefault();
    this.props.send(e.target.text)
  }
  render() {
    let related = this.props.related ? related = this.props.related.map((artist) => {
      return <li key={artist.name}><a onClick={this.handleClick.bind(this)} href="#" >{artist.name}</a></li>
      }) : null;
      let theTitle;
      this.state.showTitle ? theTitle = "Related Artists" : theTitle = null;
    return (
      <div>
        <h5>{theTitle}</h5>
      <ul className="related-artists">
        { related }
      </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    send: function(value){dispatch(Actions.updateArtistName(value)); }
  }
}

export default connect(null, mapDispatchToProps)(SimilarArtists)
