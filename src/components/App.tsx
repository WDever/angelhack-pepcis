import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import VictimUploader from './VictimUploader';
import VictimFinder from './VictimFinder';
import MainComponent from './Main';

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <Route exact path="/register" component={VictimUploader} />
      <Route exact path="/find" component={VictimFinder} />
      <Route exact payh="/" component={MainComponent} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
