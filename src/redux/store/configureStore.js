import createEncryptor from 'redux-persist-transform-encrypt'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {persistReducer} from 'redux-persist'
import {routerMiddleware} from 'react-router-redux'

import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

// create logger
const logger = createLogger({
	diff: true,
	collapsed: (getState, action, logEntry) => !logEntry.error,
})

// create history
export const history = createHistory()

// create Saga middleware
const sagaMiddleware = createSagaMiddleware()

// create middleware to dispatch navigation actions
const navMiddleware = routerMiddleware(history)

const encryptor = createEncryptor({
	secretKey: 'my-super-secret-key',
	onError: (error) => {
		throw new Error(error)
	}
})

const persistConfig = {key: 'root', transforms: [encryptor], storage, blacklist:['form', 'other']}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
	return createStore(persistedReducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
			applyMiddleware (
					navMiddleware,
					sagaMiddleware,
					logger
			)
	)
}

export const runSaga = () => sagaMiddleware.run(rootSaga)

export default configureStore