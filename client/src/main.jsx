import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar.jsx'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <NavBar />
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,

);