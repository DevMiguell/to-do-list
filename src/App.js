import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '../src/store/'
import { Global } from './Styles/Global'

import Home from './pages/Home'
import Login from './pages/Login'
import NewUser from './pages/NewUser'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/newuser' component={NewUser} />
            <Route exact path='/home' component={Home} />
          </Router>
        </PersistGate>
      </Provider>
      <Global />
    </>
  )
}

export default App;
