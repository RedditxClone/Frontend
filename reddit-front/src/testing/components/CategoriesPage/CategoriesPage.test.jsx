import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CategoriesPage from '../../../pages/CategoriesPage/CategoriesPage';
import pic from '../../../assets/Images/1166721.jpg';

const communities = [
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  }
];

const buttons1 = ['Top', 'Food', 'Near You'];
const buttonText = 'Near You';

function MockCategorisPage() {
  return (
    <BrowserRouter>
      <CategoriesPage
        communities={communities}
        buttonText={buttonText}
        buttons={buttons1}
        pic={pic}
      />
    </BrowserRouter>

  );
}
it('Test for rendering the title', () => {
  render(<MockCategorisPage />);
  const titleElement = screen.getByTestId(
    'CategoryPageTitle'
  );
  const pageDescription = screen.getByTestId(
    'CategoryPageDescription'
  );
  expect(titleElement).toBeInTheDocument();
  expect(pageDescription).toBeInTheDocument();
});

it('Test for rendering the home community card', () => {
  render(
    <MockCategorisPage />
  );
  const cards = screen.getAllByTestId('HomeCard');
  expect(cards.length).toBe(2);
});

it('Test for rendering the Alphabetic card', () => {
  render(
    <MockCategorisPage />
  );
  const alpacard = screen.getByTestId('AlphaCard');
  expect(alpacard).toBeInTheDocument();
});
it('Test for rendering the SideList', () => {
  render(
    <MockCategorisPage />
  );
  const sideList = screen.getByTestId('SideList');
  const showButton = screen.getByTestId('SideListButton');
  fireEvent.click(showButton);
  const showButtonName = screen.getByText(/Show Less/i);
  const listItem = screen.getByText(/Near You/i);
  fireEvent.click(listItem);
  expect(showButtonName).toBeInTheDocument();
  expect(listItem).toHaveClass('active');
  expect(sideList).toBeInTheDocument();
});
