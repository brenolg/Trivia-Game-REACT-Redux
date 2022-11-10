import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Play from './pages/Play';
import Login from './pages/Login';
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
          <Route exact path="/config" component={ Config } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
      </main>
    </div>
  );
}
