import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Chords.css';

const chordCard = (chord, index) => {
  return (
    <div key={index + 'chord'} className={styles['chords']}>
      <Link to={`/${chord.chordName.split(',').join('')}`}>
        <p>{chord.chordName.split(',').join('')}</p>
      </Link>
      <img
        className={styles['chord-img']}
        src={`../${chord.chordName}-chord.png`}
        alt={`Image of an ${chord} chord`}
      ></img>
    </div>
  );
};

export default chordCard;
