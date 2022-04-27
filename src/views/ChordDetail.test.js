import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ChordDetail from './ChordDetail';
import App from '../App';

describe('Chord Detail View Testing', () => {
  it('Should display one chord with relevant data', async () => {
    render(
      <MemoryRouter>
        {/* <ChordDetail /> */}
        <App />
      </MemoryRouter>
    );
  });
});
