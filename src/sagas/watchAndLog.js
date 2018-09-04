import { takeEvery, select, take } from 'redux-saga/effects';

const logs = function* (action){
	const state = yield select();

	console.log('action', action);
	console.log('state after', state);
}

export default function* (){
	// yield takeEvery('*', logs);
	while(true){
		const action = yield take('*');
		const state = yield select();

		console.log('action', action);
		console.log('state', state);
	}
}