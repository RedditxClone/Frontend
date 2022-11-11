import { fireEvent, render, screen } from '@testing-library/react';
import SideDrawer from '../../../components/Layout/Drawer/Drawer';

describe('Test for SideDrawer', () => {
  it('Test for rendering SideDrawer list', () => {
    render(
      <SideDrawer
        showSideBar="true"
        onClickSideIcon={() => {}}
      />
    );

    const items = screen.getAllByTestId('items');
    expect(items.length).toBe(12);
  });

  it('Test for rendering SideDrawer text', () => {
    render(
      <SideDrawer
        showSideBar="true"
        onClickSideIcon={() => {}}
      />
    );
    const filter = screen.getByPlaceholderText('Filter');
    expect(filter).toBeInTheDocument();
    fireEvent.change(filter, { target: { value: 'sport' } });
    expect(filter.value).toBe('sport');

    const urCommunities = screen.getByText(/YOUR COUMMUNITIES/i);
    const feeds = screen.getByText(/FEEDS/i);
    const other = screen.getByText(/OTHER/i);

    expect(urCommunities).toBeInTheDocument();
    expect(feeds).toBeInTheDocument();
    expect(other).toBeInTheDocument();
  });

  it('Test for rendering SideDrawer buttons', () => {
    render(
      <SideDrawer
        showSideBar="true"
        onClickSideIcon={() => {}}
      />
    );
    const createCommunityButton = screen.getByText(/Create Community/i);
    const homeButton = screen.getByText(/Home/i);
    const popularButton = screen.getByText(/Popular/i);
    const allButton = screen.getByText(/All/i);
    const createPostButton = screen.getByText(/Create Posts/i);
    const topCommunitiesButton = screen.getByText(/Top Communities/i);
    const notificationsButton = screen.getByText(/Notifications/i);

    expect(createCommunityButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(popularButton).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
    expect(createPostButton).toBeInTheDocument();
    expect(topCommunitiesButton).toBeInTheDocument();
    expect(notificationsButton).toBeInTheDocument();
  });
});
