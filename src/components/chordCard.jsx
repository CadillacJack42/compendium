import React from 'react';
import { Link } from 'react-router-dom';
import chordStyles from '../styles/Chords.css';
import styles from '../styles/ChordDetail.css';

const chordCard = (chord, index) => {
  chord.chordName = chord.chordName.split(',').join('');
  console.log('IM IN THE CHORD CARD', chord);
  return (
    <div key={index + 'chord'} className={chordStyles['chords']}>
      <Link
        to={{
          pathname: `/${chord.chordName}`,
          search: null,
          state: { chord: chord },
        }}
      >
        <p>{chord.chordName}</p>
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
