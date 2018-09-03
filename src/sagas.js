import { delay } from 'redux-saga';
import { takeEvery, put, all } from 'redux-saga/effects';


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

export default function * (){
	yield all([
		helloSaga(),
		watchIncrementAsync()
	]);
}