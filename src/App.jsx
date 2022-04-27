// import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import styles from './styles/App.css';
import Chords from './components/Chords';
import ChordDetail from './views/ChordDetail';
export default function App() {
  return (
    <>
      <h1 className={styles['welcome-header']}>
        Welcome to Cadillac Jacks Chord Finder App
      </h1>
      <Router>
        <Route path="/:chord">
          <ChordDetail />
        </Route>
        <Route exact path="/">
          <Chords />
        </Route>
      </Router>
    </>
  );
}
