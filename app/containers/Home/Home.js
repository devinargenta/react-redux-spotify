import React, { Component } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions';
import Search from '../../components/Search/Search'
import SongList from '../../components/SongList/SongList'
import DidYouMean from  '../../components/DidYouMean/DidYouMean'
import SimilarArtists from  '../../components/SimilarArtists/SimilarArtists'
import './Home.scss';

class Home extends Component {
  componentDidMount(){
     const { artistName } = this.props
  }
  componentWillReceiveProps(nextProps){
  console.log(nextProps);
  if (nextProps.artistName !== this.props.artistName) {
    const { artistName, songs, other, related } = nextProps
  }
    //this.props.artistName(nextProps.artistName);
  }
  render() {

    const {artistName, songs, other, related} = this.props
  //  let what = this.props.artistName;
    return (
      <div className="homepage">
        <h2>Find Top Songs</h2>
        <Search />
        <div className="flex-parent">

        <div className="three-four-box">
        <h3>{artistName}</h3>
        <SongList songs={songs} />
        <DidYouMean other={other} />
        </div>

        <div className="one-four-box">
        <SimilarArtists related={related} />
        </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    artistName: state.artist.artistName,
    songs: state.artist.songs,
    other: state.artist.other,
    related: state.artist.related
  }
}
function mapDispatchToProps(dispatch) {
  return {
    send: function(value){dispatch(Actions.updateArtistName(value)); }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
