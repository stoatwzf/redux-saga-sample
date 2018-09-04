const list = (state = [], action) => {
	switch (action.type){
		case 'FETCH_SUCCEEDED':
			return action.data;
		default:
			return state;
	}
}

export default list;