import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

@connect(state => ({ value: state }))
class Home extends Component {
	asHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'INCREMENT_ASYNC'
		})
	}

	inHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'INCREMENT'
		})
	}

	deHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'DECREMENT'
		})
	}

	render (){
		const { value } = this.props;

		return ( <div>
      <Button type="primary" onClick={this.asHandler}>Increment after 1 second</Button>
      <Button type="primary" onClick={this.inHandler}>Increment</Button>
      <Button type="primary" onClick={this.deHandler}>Decrement</Button>
      <p>Counter: {value}</p>
    </div>);
	}
}

export default Home;