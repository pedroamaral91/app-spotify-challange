import { call, put } from 'redux-saga/effects';
import * as api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const response = yield call(api.fetchGET, 'playlists');
    yield put(PlaylistsActions.getPlaylistsSuccess(response));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as playlists.'));
  }
}
