import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import reduxThunk from 'redux-thunk'

import {isBrowser, isDev} from '../config'
import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'

const devtools = isDev && isBrowser && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn

const configureStore = (initialState, services = {}) => {
    const sagaMiddleware = createSagaMiddleware()

    const enhancers = [
        applyMiddleware(
            ...middlewares,
            sagaMiddleware,
            reduxThunk,
            createLogger({
                diff: true,
                collapsed: true,
            }),
        ),
        devtools(),
    ]

    const store = createStore(reducer, initialState, compose(...enhancers))
    sagaMiddleware.run(sagas, services)

    return store
}

export default configureStore
