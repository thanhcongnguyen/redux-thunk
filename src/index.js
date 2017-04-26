import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux' //them applyMiddleware neu su dung redux-thunk
import thunk from 'redux-thunk' //import redux-thunk vao
import Reduxapp from './components/App.js'
import rootReducer from'./rootReducer.js'
let store = createStore(rootReducer,applyMiddleware(thunk))// truyen thunk vao applyMiddleware

ReactDOM.render(
	<Provider store={store}>
		<Reduxapp/>
	</Provider>,
	document.getElementById('root')
)




