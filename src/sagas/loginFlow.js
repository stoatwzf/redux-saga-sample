import { take, put, call, race } from 'redux-saga/effects';

import request from '../util/request';


export default function* (){
	while (true){
		const { payload } = yield take('FETCH_LOGIN');
		const user = yield call(request, payload);

		yield put({
			type: 'LOGIN',
			user
		});

		const action = yield take('FETCH_LOGOUT');
		const [userData, list] = yield [
			call(request, 'http://127.0.0.1:8484/user'),
			call(request, 'http://127.0.0.1:8484/list'),
		];
		const {data1, data2} = yield race({
			data1: call(request, 'http://127.0.0.1:8484/user'),
			data2: call(request, 'http://127.0.0.1:8484/list')
		});

		yield put({
			type: 'LOGOUT'
		})
	}
}