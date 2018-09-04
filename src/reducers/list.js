const list = (state = [], action) => {
	switch (action.type){
		case 'SUCCEEDED':
			return action.data;
		default:
			return state;
	}
}

export default list;