import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBhRx4SXE_-ZupoR_GBNJUeK7sIoPhSWSU',
  authDomain: 'evernote-clone-bc.firebaseapp.com',
  databaseURL: 'https://evernote-clone-bc.firebaseio.com',
  projectId: 'evernote-clone-bc',
  storageBucket: 'evernote-clone-bc.appspot.com',
  messagingSenderId: '110667985766',
  appId: '1:110667985766:web:357872db2b96b2ed600ea7',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
