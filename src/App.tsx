import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import TextInput from './components/TextInput';
import styles from './App.modules.css';

const Hello = () => {
  return (
    <div className={styles.App}>
      <InputGroup>
        <FormControl
          className={styles.Input}
          as="textarea"
          aria-label="With textarea"
        />
      </InputGroup>
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
