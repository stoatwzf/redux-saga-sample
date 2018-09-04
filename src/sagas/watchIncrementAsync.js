import { delay } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


function* incrementAsync(){
	yield delay(1000);
	yield put({
		type: 'INCREMENT'
	})
}

export default function* (){
	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}