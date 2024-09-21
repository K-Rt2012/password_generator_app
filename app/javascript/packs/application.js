import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 新規ファイル

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
});
