import * as React from 'react';

export default function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logo1} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.pageTitle}</h1>
    </header>
  );
};