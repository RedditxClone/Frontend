import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../../../components/Layout/Profile/Profile';

describe('Test for profile in nav bar in case logged in', () => {
  it('Test for rendering profile ', () => {
    render(<Profile />);
    fireEvent.change(screen.getByTestId('select'), { target: { value: 9 } });
    const options = screen.getAllByTestId('options');
    expect(options[0]).toBeInTheDocument();
    expect(options[1]).toBeInTheDocument();
    expect(options[3]).toBeInTheDocument();
    expect(options[4]).toBeInTheDocument();
    expect(options[5]).toBeInTheDocument();
    expect(options[6]).toBeInTheDocument();
    expect(options[7]).toBeInTheDocument();
    expect(options[8]).toBeInTheDocument();

    const catogeries = screen.getAllByTestId('catogeries');
    expect(catogeries.length).toBe(7);
  });
});
