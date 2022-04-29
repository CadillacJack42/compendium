import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ChordDetail from './ChordDetail';
// import App from '../App';

describe('Chord Detail View Testing', () => {
  it('Should display one chord with relevant data', async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/B',
            state: {
              chord: {
                chordName: 'B',
                enharmonicChordName: 'B,,,',
                fingering: 'X 1 2 3 4 1',
                strings: 'X 2 4 4 4 2',
                tones: 'B,D#,F#',
                voicingID: '9223372036926214239',
              },
            },
          },
        ]}
      >
        <ChordDetail />
      </MemoryRouter>
    );
    screen.debug();

    const chordNameHeader = await screen.findByRole('heading');
    expect(chordNameHeader).toHaveTextContent('Chord Name B');

    const chordImg = await screen.findByAltText(/image of an b chord/i);

    const chordTones = await screen.findByText(/tones/i);
    expect(chordTones).toHaveTextContent('Tones: B,D#,F#');

    const chordStrings = await screen.findByText(/strings/i);
    expect(chordStrings).toHaveTextContent('Strings: X 2 4 4 4 2');

    const chordFingering = await screen.findByText(/fingering/i);
    expect(chordFingering).toHaveTextContent('Fingering: X 1 2 3 4 1');
  });
});
