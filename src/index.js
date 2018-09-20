import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedRouter} from 'react-router-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {withRouter} from 'react-router-dom'

import App from './App'
import configureStore, {runSaga, history} from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import './fonts/font.css'
import './fonts/fontawesome/css/font-awesome.min.css'

const WrappedApp = withRouter(App)
const store = configureStore()
export const persistor = persistStore(store)
runSaga()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <WrappedApp/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root')
)
registerServiceWorker()