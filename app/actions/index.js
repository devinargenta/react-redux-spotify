export const FETCH_ARTIST = 'FETCH_ARTIST';
export const PUT_SONGS = 'PUT_SONGS';
export const ALL_ARTISTS = 'ALL_ARTISTS';
export const GET_RELATED = 'GET_RELATED';
import axios from 'axios';

export function artistName(artist) {
    return {type: FETCH_ARTIST, artist};
}
export function allArtists(artists) {
    return {type: ALL_ARTISTS, artists}
}

export function sendRelated(artists) {
    return {type: GET_RELATED, artists}
}

export function listSongs(songs) {
    return {type: PUT_SONGS, songs}
}

export function getSongs(artistName) {
    return function(dispatch) {
        return axios.get(artistName + '/top-tracks?country=US').then(response => {
          console.log(response.data)
            dispatch(listSongs(response.data.tracks));
        });
        //.then(response => console.log(response.data.tracks));
    }
}
export function getRelated(artistName) {
    return function(dispatch) {
        return axios.get(artistName + '/related-artists').then(response => {
          console.log('fuck');
          //  console.log(response.data);
            dispatch(sendRelated(response.data.artists));
        });
        //.then(response => console.log(response.data.tracks));
    }
}
export function updateArtistName(artist) {
    return function(dispatch) {
        return axios.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(response => {
            let res = response.data.artists.items;
            let otherArtists = res.slice(1, 8)
          //  console.log(res[0]);
            dispatch(allArtists(otherArtists))
            dispatch(artistName(res[0].name))
            dispatch(getSongs(res[0].href))
          //  console.log(res[0].href)
            dispatch(getRelated(res[0].href));
        });
    };
}
