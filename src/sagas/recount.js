import { delay } from 'redux-saga';
import { fork, take, cancel, call } from 'redux-saga/effects';

function* count(num){
	while(num >= 0){
		console.log(num--);
		yield delay(1000);
	}
}

function* recount(){
	while(true){
		const { payload } = yield take('BEGIN_COUNT');
		const countId = yield fork(count, payload);

		yield take('STOP_TASK');
		yield cancel(countId);
	}
}

export default recount;