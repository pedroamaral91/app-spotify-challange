import { all, takeLatest } from 'redux-saga/effects';
import { Types as PLaylistsTypes } from '../ducks/playlists';
import { getPlaylists } from './playlists';

export default function* rootSaga() {
  yield all([
    takeLatest(PLaylistsTypes.GET_REQUEST, getPlaylists),
  ]);
}
