import { combineReducers } from 'redux';

import counter from './counter';
import list from './list';

const reducer = combineReducers({
	counter,
	list
});

export default reducer;