import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../../../components/Layout/Profile/Profile';
import { Store } from '../../../store/Store';

describe('Test for profile in nav bar in case logged in', () => {
  it('Test for rendering profile ', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    );
    // fireEvent.change(screen.getByTestId('select'), { target: { value: 9 } });
    fireEvent.click(screen.getByTestId('select'));
    // console.log(screen.getByTestId('select'));
    const options = screen.getAllByTestId('options');
    // console.log(screen.getAllByTestId('options'));
    expect(options[0]).toBeInTheDocument();
    expect(options[1]).toBeInTheDocument();
    expect(options[3]).toBeInTheDocument();
    expect(options[4]).toBeInTheDocument();
    expect(options[5]).toBeInTheDocument();
    expect(options[6]).toBeInTheDocument();
    expect(options[7]).toBeInTheDocument();
    expect(options[8]).toBeInTheDocument();
    expect(options).toBeInTheDocument();
    const catogeries = screen.getAllByTestId('catogeries');
    expect(catogeries.length).toBe(7);
  });
});
