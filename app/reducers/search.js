//import {FETCH_ARTIST} from '../actions';
const FETCH_ARTIST = 'FETCH_ARTIST';
const PUT_SONGS = 'PUT_SONGS';
const ALL_ARTISTS = 'ALL_ARTISTS';
const GET_RELATED = 'GET_RELATED';

export default function artist(state = {}, action) {
    switch (action.type) {
        case ALL_ARTISTS:
            return Object.assign({}, state, {other: action.artists});
        case FETCH_ARTIST:

            return Object.assign({}, state, {artistName: action.artist});
        case PUT_SONGS:

            return Object.assign({}, state, {songs: action.songs});
        case GET_RELATED:
            return Object.assign({}, state, {related: action.artists});
        default:
            return state;
    }
}
