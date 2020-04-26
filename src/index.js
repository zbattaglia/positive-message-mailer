import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; // must be imported for saga function
import logger from 'redux-logger';
import axios from 'axios';

function* sendMessageSaga( action ) {
    console.log( 'In send message saga', action )
    try {
        const response = yield axios.post( '/message', {message: action.payload} );
        console.log( 'Sent message', response );
    }
    catch (error) {
        console.log( 'error sending message to server', error );
    }
}

// this is the saga that will watch for actions
function* watcherSaga() {
    yield takeEvery( 'SEND_MESSAGE', sendMessageSaga );
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(

    combineReducers({

    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
