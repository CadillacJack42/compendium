import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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

  it('Should trigger the filter function', async () => {
    render(
      <MemoryRouter>
        <Chords />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const searchInput = await screen.findByPlaceholderText(
      'Filter Chords Here'
    );

    userEvent.type(searchInput, 'ab');

    const chordArrayContainer = await screen.findByLabelText(
      'chords-container'
    );

    expect(await screen.findByText('Ab')).toBeInTheDocument();

    const chords = screen.getAllByRole('link');
    expect(chords).toHaveLength(1);
  });
});
