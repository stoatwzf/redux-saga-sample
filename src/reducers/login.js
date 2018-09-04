const login = (state = {
	name: null,
	pass: null
}, action) => {
	switch (action.type){
		case 'LOGIN':
			return action.user;
		case 'LOGOUT':
			return {
				name: null,
				pass: null
			}
		default:
			return state;
	}
};

export default login;