import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List } from 'antd';


@connect(({ counter, list, user, date }) => ({ counter, list, user, date }))
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

	loginHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'FETCH_LOGIN',
			payload: 'http://127.0.0.1:8484/user'
		})
	}

	logoutHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'FETCH_LOGOUT'
		});
	}

	startHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'START_BACKGROUND_SYNC',
			payload: 'http://127.0.0.1:8484/date'
		});
	}

	endHandler = event => {
		const { dispatch } = this.props;

		dispatch({
			type: 'STOP_BACKGROUND_SYNC'
		});
	}

	render (){
		const { counter, list, user, date } = this.props;

		return ( <div>
      <Button type="primary" onClick={this.asHandler}>Increment after 1 second</Button>
      <Button type="primary" onClick={this.inHandler}>Increment</Button>
      <Button type="primary" onClick={this.deHandler}>Decrement</Button>
      <Button onClick={this.feHandler}>Decrement</Button>
      <p>Counter: {counter}</p>
      <br />
      <Button onClick={this.loginHandler}>LOGIN</Button>
      <Button onClick={this.logoutHandler}>LOGOUT</Button>
      <p>name: {user.name}<br />pass: {user.pass}</p>
      <br />
      <Button type="primary" onClick={this.startHandler}>start</Button>
      <Button type="primary" onClick={this.endHandler}>end</Button>
      <h1>Date: {date}</h1>
      <List 
      	dataSource={list}
      	renderItem={({ text, price }) => <List.Item>{price}</List.Item>}
      />
    </div>);
	}
}

export default Home;