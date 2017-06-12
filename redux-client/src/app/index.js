// @flow weak

import React                from 'react';
import { render }           from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './redux/reducers';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import Root                 from './Root';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.scss';


const logger = createLogger();
const store = createStore(
	allReducers,
	applyMiddleware(thunk, promise, logger)
);
const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

const renderApp = RootComponent =>
{
	render(
		<Provider store={store}>
			<AppContainer>
				<RootComponent />
			</AppContainer>
		</Provider>,
		BootstrapedElement
	);
};

renderApp(Root);

if (module.hot)
{
	module.hot.accept(
		'./Root',
		() =>
		{
			const RootComponent = require('./Root').default;
			renderApp(RootComponent);
		}
	);
}
