import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TextInput from './components/TextInput';
import styles from './App.modules.css';

const Hello = () => {
  return (
    <div className={styles.App}>
      <TextInput />
      <button />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
