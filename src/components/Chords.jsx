import React, { useEffect, useState } from 'react';
import styles from '../styles/Chords.css';
import { Link } from 'react-router-dom';
import chordCard from './chordCard';

export default function Chords() {
  const [chords, setChords] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      const response = await fetch(
        `https://api.uberchord.com/v1/chords?names=A,B,C,D,E,F,G,Ab,Bb,Db,Eb,Gb`
      );
      const json = await response.json();
      setChords(json);
    };
    asyncFunc();
  }, []);
  console.log(chords);
  return (
    <div className={styles['container']}>
      {chords ? (
        chords.map((chord, index) => {
          return chordCard(chord, index);
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
