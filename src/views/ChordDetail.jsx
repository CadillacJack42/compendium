import React from 'react';
import styles from '../styles/ChordDetail.css';
import { useParams } from 'react-router-dom';

export default function ChordDetail() {
  const { chord } = useParams();
  return (
    <div>
      <h2>Chord Name {chord}</h2>
      <img
        className={styles['chord-img']}
        src={`../${chord}-chord.png`}
        alt={`Image of an ${chord} chord`}
      ></img>
      <p>Tones: {chord.tones}</p>
      <p>Strings: {chord.strings}</p>
      <p>Fingering: {chord.fingering}</p>
    </div>
  );
}
