import { call, put } from 'redux-saga/effects';
import * as api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.fetchGET, 'playlists');
    yield put(PlaylistsActions.getPlaylistsSuccess(response));
  } catch (err) {}
}
