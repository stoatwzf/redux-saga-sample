import { all } from 'redux-saga/effects';

import watchAndLog from './watchAndLog';
import watchFetchData from './watchFetchData';
import watchIncrementAsync from './watchIncrementAsync';
import loginFlow from './loginFlow';
import polling from './polling';

export default function * (){
	yield all([
		// watchAndLog(),
		watchIncrementAsync(),
		watchFetchData(),
		loginFlow(),
		polling()
	]);
}