import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Chords from './Chords';

describe('Chords Component testing', () => {
  it('Should fetch and display a list of Chords', async () => {
    render(
      <MemoryRouter>
        <Chords />
      </MemoryRouter>
    );

    await screen.findByText('A');
    await screen.findByText('B');
    await screen.findByText('C');
    await screen.findByText('D');
    await screen.findByText('Eb');

    const Aimg = await screen.findByAltText('Image of an A chord');
    expect(Aimg).toHaveClass('chord-img');
    const Bimg = await screen.findByAltText('Image of an B chord');
    expect(Bimg).toHaveClass('chord-img');
    const Cimg = await screen.findByAltText('Image of an C chord');
    expect(Cimg).toHaveClass('chord-img');
  });
});
