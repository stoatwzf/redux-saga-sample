import { takeEvery, put, call } from 'redux-saga/effects';

import request from '../util/request';


function* fetchData(action){
	const data = yield call(request, action.payload);

	yield put({
		type: 'SUCCEEDED',
		data
	})
}

export default function* watchFetchData(){
	yield takeEvery('FETCH_REQUESTED', fetchData);
}