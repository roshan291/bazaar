import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/createNewCustomer';
import { FETCH_DATA_REQUEST } from '../constants/createNewCustomer';
import axios from 'axios';

// Simulate an asynchronous API call
const fetchDataApi = () => {
    return axios.get("http://localhost:8001/createCustomer").then(res => res.data)
}

// Worker Saga: Handles the fetchData action
function* fetchDataWorker(): Generator<any, void, any> {
    // console.log("fetchDataWorker")
  try {
    const data = yield call(fetchDataApi as any);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

// Watcher Saga: Watches for fetchDataRequest action
function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataWorker);
}

export default watchFetchData;