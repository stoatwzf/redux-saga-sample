import { delay } from 'redux-saga';
import { takeEvery, put, all, call } from 'redux-saga/effects';

const request = (url, options) => {
	return fetch(url)
		.then(res => res.json())
		.then(rj => rj.data)
}
function * helloSaga(){
	console.log('hello saga');
}

function * incrementAsync(){
	yield delay(1000);
	yield put({
		type: 'INCREMENT'
	})
}

function * watchIncrementAsync(){
	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function * fetchData(action){
	const data = yield call(request, action.payload);

	console.log(data)
	yield put({
		type: 'FETCH_SUCCEEDED',
		data
	})
}

function * watchFetchData(){
	yield takeEvery('FETCH_REQUESTED', fetchData);
}

export default function * (){
	yield all([
		helloSaga(),
		watchIncrementAsync(),
		watchFetchData()
	]);
}