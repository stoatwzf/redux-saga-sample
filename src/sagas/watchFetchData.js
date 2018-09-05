import { takeEvery, put, call } from 'redux-saga/effects';

import request from '../util/request';


function* fetchData(action){
	const data = yield call(request, 'http://127.0.0.1:8484/list');

	console.log(data);
	yield put({
		type: 'SUCCEEDED',
		data
	})
}

const iterator = fetchData();

console.log(iterator.next().value);


export default function* watchFetchData(){
	yield takeEvery('FETCH_REQUESTED', fetchData);
}