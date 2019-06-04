import { call, put } from 'redux-saga/effects';
import * as api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.fetchGET, `playlists/${action.payload.id}?_embed=songs`);
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response));
  } catch (err) {}
}
