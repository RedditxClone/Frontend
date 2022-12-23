import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeBox from '../../../components/Layout/Home/Home';
import { Store } from '../../../store/Store';

describe('Test for Home in nav bar', () => {
  it('Test for rendering Home ', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <HomeBox />
        </Provider>
      </BrowserRouter>
    );
    const homeButton = screen.getByTestId('homebutton');
    expect(homeButton).toBeInTheDocument();
    fireEvent.click(homeButton);
    const homeList = screen.getByTestId('homelist');
    expect(homeList).toBeInTheDocument();
    const home = screen.getByTestId('homeinhomebutton');
    expect(home).toBeInTheDocument();
  });
});

describe('Test for HomeList in nav bar', () => {
  it('Test for rendering HomeList filterinput', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <HomeBox />
        </Provider>
      </BrowserRouter>
    );
    const homeButton = screen.getByTestId('homebutton');
    fireEvent.click(homeButton);
    const filter = screen.getByPlaceholderText(/Filter/i);
    fireEvent.change(filter, { target: { value: 'hoda' } });
    expect(filter.value).toBe('hoda');
  });

  it('Test for rendering HomeList texts', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <HomeBox />
        </Provider>
      </BrowserRouter>
    );
    const homeButton = screen.getByTestId('homebutton');
    fireEvent.click(homeButton);
    // const favorite = screen.getByTestId('favinhomelist');
    const moderating = screen.getByText(/MODERATING/i);
    const yourCommunities = screen.getByText(/YOUR COMMNUNITIES/i);
    const feeds = screen.getByText(/FEEDS/i);
    const other = screen.getByText(/OTHER/i);

    // expect(favorite).toBeInTheDocument();
    expect(moderating).toBeInTheDocument();
    expect(yourCommunities).toBeInTheDocument();
    expect(feeds).toBeInTheDocument();
    expect(other).toBeInTheDocument();
  });

  it('Test for rendering HomeList Buttons', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <HomeBox />
        </Provider>
      </BrowserRouter>
    );
    const homeButton = screen.getByTestId('homebutton');
    fireEvent.click(homeButton);
    const rmod = screen.getByTestId('r/mod');
    const createCommunity = screen.getByText(/Create Community/i);
    const home = screen.getByTestId('homeinhomelist');
    const popular = screen.getByText(/Popular/i);
    const all = screen.getByText(/All/i);
    const userSettings = screen.getByText(/User Settings/i);
    const messages = screen.getByText(/Messages/i);
    const createPost = screen.getByText(/Create Post/i);
    const topCommunities = screen.getByText(/Top Communities/i);
    const notifications = screen.getByText(/Notifications/i);

    expect(rmod).toBeInTheDocument();
    expect(createCommunity).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(popular).toBeInTheDocument();
    expect(all).toBeInTheDocument();
    expect(userSettings).toBeInTheDocument();
    expect(messages).toBeInTheDocument();
    expect(createPost).toBeInTheDocument();
    expect(topCommunities).toBeInTheDocument();
    expect(notifications).toBeInTheDocument();
  });
});
//   it('Test for rendering HomeList Buttonclicks', () => {
//     render(<HomeBox />);
//     const homeButton = screen.getByTestId('homebutton');
//     fireEvent.click(homeButton);
//     const sideDrawerButton = screen.getByTestId('sidedrawerbutton');
//     fireEvent.click(sideDrawerButton);
//     const sideDrawerElement = screen.getByTestId('sidedrawer');
//     expect(sideDrawerElement).toBeInTheDocument();
//   });
//   //   this test not working
