import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Play from './pages/Play';
import logo from './trivia.png';
import Config from './pages/Config';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/play" component={ Play } />
          {/* <Route path="/feedback" component={ Feedback } /> */}
          <Route exact path="/config" component={ Config } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
      </main>
    </div>
  );
}
