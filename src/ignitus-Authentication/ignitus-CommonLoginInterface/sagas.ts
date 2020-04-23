import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* signIn(action) {
  const { email, password, userType } = action;
  try {
    const data = yield call(api.signIn, email, password, userType);
    if (!data.data.data) {
      throw new Error({ ...data });
    } else {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('data', JSON.stringify(data.data.data.clientData));
      yield put(a.logInResponse(data.data));
    }
  } catch (e) {
    yield put(a.logInResponse(e.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.LOG_IN_REQUEST, signIn);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
