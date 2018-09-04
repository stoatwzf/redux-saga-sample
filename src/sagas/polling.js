import { delay } from 'redux-saga';
import { take, call, cancel, fork, put } from 'redux-saga/effects';

import request from '../util/request';

function* bgSync(action){
	while (true){
		const date = yield call(request, 'http://127.0.0.1:8484/date')

		yield put({
			type: 'BACKGROUND_SYNC',
			date
		});
		yield delay(1000);
	}
}

export default function* main(){
	while(true){
		const { payload } = yield take('START_BACKGROUND_SYNC')
		const bgSyncTask = yield fork(bgSync);
		yield take('STOP_BACKGROUND_SYNC');
		yield cancel(bgSyncTask);
	}
}