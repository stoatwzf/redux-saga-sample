import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import reducers from './reducers';
import sagas from './sagas';
import Home from './pages/Home';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <Home />
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
