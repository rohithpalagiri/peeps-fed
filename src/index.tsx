import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App/App'

import {
  BrowserRouter as Router
} from "react-router-dom"



import './index.scss'
import './scripts/main'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)