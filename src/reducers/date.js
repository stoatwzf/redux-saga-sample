const date = (state = new Date().toString(), action) => {
	switch (action.type){
		case 'BACKGROUND_SYNC':
			return action.date;
		default:
			return state
	}
}

export default date;