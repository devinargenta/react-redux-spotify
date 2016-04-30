import React, { Component, PropTypes } from 'react';


class SongList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(song){
    console.log(song);
  }
  componentWillReceiveProps(){
//    this.setState({date: new Date()});
  }
  render() {
    let songs = this.props.songs.length > 0 ? songs = this.props.songs.map((song, i) => {
      let photos = song.album.images.length;
        return (
          <li key={song + i} >


            {photos > 0 ? <img src={song.album.images[Math.floor(photos / 2)].url} /> : null}
            <audio controls preload="metadata" key={song.name}>
              <source src={song.preview_url} type="audio/mpeg" />
              You Don't Support Audio :(
            </audio>
            <a target="_blank" href={song.external_urls.spotify}>
              {song.name}
            </a>


      </li> );
      }) : null;
    return (
      <ol className="song-list">
        { songs }
      </ol>
    )
  }
}


export default SongList;
