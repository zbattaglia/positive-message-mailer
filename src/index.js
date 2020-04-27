import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

const schedule = require('./components/ScheduledMessages/ScheduledMessages');

// reducer to log user in/out when sending messages
const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_INFO':
            return !state;
        default:
            return state;
    }
}

// reducer to set list of messages on redux state
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.payload;
        default:
            return state;
    }
};

// updates user info on redux state
const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_INFO':
            return action.payload;
        default:
            return state;
    }
}

//makes get request for the messageList
function* getMessageSaga( action ) {
    console.log( 'In getMessageSaga', action );
    try {
        const response = yield axios.get( '/message' );
        console.log( 'Got messageList', response.data );
        yield put( { type: 'SET_MESSAGES', payload: response.data } )
    }
    catch (error) {
        console.log( 'Error getting messageList', error );
    }
}

// makes POST request of server to send email. 
function* sendMessageSaga( action ) {
    console.log( 'In send message saga', action )
    try {
        const response = yield axios.post( '/message', action.payload );
        console.log( 'Sent message', response );
    }
    catch (error) {
        console.log( 'error sending message to server', error );
    }
}

// this is the saga that will watch for actions
function* watcherSaga() {
    yield takeEvery( 'SEND_MESSAGE', sendMessageSaga );
    yield takeEvery( 'GET_MESSAGES', getMessageSaga );
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(

    combineReducers({
        messageReducer,
        userReducer,
        loggedInReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
