import React, { useEffect, useState } from 'react';
import styles from '../styles/Chords.css';
import chordCard from './chordCard';

export default function Chords() {
  const [chords, setChords] = useState([]);
  const [filteredChords, setFilteredChords] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  const handleChange = (e) => {
    setFilterInput(e.target.value);
    // checkFunc();
  };

  // const checkFunc = () => {
  //   const filterResults = chords.filter((chord) => {
  //     return chord.chordName
  //       .toLowerCase()
  //       .includes(filterInput.toLowerCase().trim());
  //   });
  //   setFilteredChords(filterResults);
  // };

  useEffect(() => {
    const filterResults = chords.filter((chord) => {
      return chord.chordName
        .toLowerCase()
        .includes(filterInput.toLowerCase().trim());
    });
    setFilteredChords(filterResults);
  }, [filterInput]);

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
  // console.log(chords);

  const ChordList = filteredChords.length > 0 ? filteredChords : chords;
  return (
    <>
      <input
        className={styles['input']}
        placeholder="Filter Chords Here"
        onChange={(e) => handleChange(e)}
        value={filterInput}
      />
      <div className={styles['container']} aria-label="chords-container">
        {ChordList.length ? (
          ChordList.map((chord, index) => {
            return chordCard(chord, index);
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
