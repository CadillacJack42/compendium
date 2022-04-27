import React from 'react';
import styles from '../styles/ChordDetail.css';
import { useParams, useLocation } from 'react-router-dom';

export default function ChordDetail() {
  //   const { chord } = useParams();
  const location = useLocation();
  console.log(location.state);
  const chord = location.state.chord;
  return (
    <div className={styles['detail-display']}>
      <h2>Chord Name {chord.chordName}</h2>
      <img
        className={styles['chord-img']}
        src={`../${chord.chordName}-chord.png`}
        alt={`Image of an ${chord.chordName} chord`}
      ></img>
      <p>Tones: {chord.tones}</p>
      <p>Strings: {chord.strings}</p>
      <p>Fingering: {chord.fingering}</p>
    </div>
  );
}
