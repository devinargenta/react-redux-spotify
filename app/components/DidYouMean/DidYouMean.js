import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import * as Actions from '../../actions';

class DidYouMean extends Component {
  constructor(props) {
    super(props);
    this.state = {showTitle: false};
  }
  componentDidMount(){

  }
  componentWillReceiveProps(nextProps){
    const {other} = nextProps
    console.log(nextProps.other);
    nextProps.other.length > 0 ? this.setState({showTitle: true}) : this.setState({showTitle: false})
//    const title = "DOG";
  }
  handleClick(e){
    e.preventDefault();
    this.props.send(e.target.text)
  }
  render() {
    let other = this.props.other ? other = this.props.other.map((artist) => {
      return <li key={artist.name}><a onClick={this.handleClick.bind(this)} href="#" >{artist.name}</a></li>
      }) : null;
      let theTitle;
      this.state.showTitle ? theTitle = "Did you mean:" : theTitle = null;
    return (
      <div>
        <h5>{theTitle}</h5>
      <ul className="other-artists">
        { other }
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

export default connect(null, mapDispatchToProps)(DidYouMean)
