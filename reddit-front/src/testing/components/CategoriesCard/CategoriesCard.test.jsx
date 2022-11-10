import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import pic from '../../../assets/Images/1166721.jpg';
import CategoriesCard from '../../../components/CategoriesCard/CategoriesCard';

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

const topText = 'Near You';
function MockCategorisCard() {
  return (
    <BrowserRouter>
      <CategoriesCard
        communities={communities}
        topText={topText}
      />
    </BrowserRouter>
  );
}

describe('Test for Categories Card', () => {
  it('Test for rendering the card', () => {
    render(<MockCategorisCard />);

    const cardBar = screen.getByTestId('categories_card_bar');
    expect(cardBar).toBeInTheDocument();
    const communitiesItems = screen.getAllByTestId('communities_items');
    expect(communitiesItems).toHaveLength(5);
  });
  it('Test for hitting the join button', () => {
    render(<MockCategorisCard />);

    const joinButton = screen.getAllByText('join');
    expect(joinButton).toHaveLength(3);
    fireEvent.click(joinButton[0]);
    const joinedButton = screen.getByText('joined');
    expect(joinedButton).toBeInTheDocument();
  });
});
