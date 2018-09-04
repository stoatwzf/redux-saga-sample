import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List } from 'antd';


@connect(({ counter, list }) => ({ counter, list }))
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

	feHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'FETCH_REQUESTED',
			payload: 'http://127.0.0.1:8484/list'
		})
	}

	render (){
		const { counter, list } = this.props;

		return ( <div>
      <Button type="primary" onClick={this.asHandler}>Increment after 1 second</Button>
      <Button type="primary" onClick={this.inHandler}>Increment</Button>
      <Button type="primary" onClick={this.deHandler}>Decrement</Button>
      <Button onClick={this.feHandler}>Decrement</Button>
      <p>Counter: {counter}</p>
      <List 
      	dataSource={list}
      	renderItem={({ text, price }) => <List.Item>{price}</List.Item>}
      />
    </div>);
	}
}

export default Home;