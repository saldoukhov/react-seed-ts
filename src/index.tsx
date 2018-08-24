import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {IStoreState, VisibilityFilter} from './types';
import {todoReducers} from "./reducers";
import {Provider} from "react-redux";

// @ts-ignore
const store = createStore<IStoreState>(todoReducers, { todoList: [], visibilityFilter: VisibilityFilter.ShowAll});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
