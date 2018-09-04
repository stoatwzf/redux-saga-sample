import { combineReducers } from 'redux';

import counter from './counter';
import list from './list';
import user from './login';
import date from './date';

const reducer = combineReducers({
	counter,
	list,
	user,
	date
});

export default reducer;