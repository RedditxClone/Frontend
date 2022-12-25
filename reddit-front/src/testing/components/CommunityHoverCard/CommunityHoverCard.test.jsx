/* eslint-disable */
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import pic from '../../../assets/Images/1166721.jpg';
import CommunityHoverCard from '../../../components/CategoriesCard/CommunityHoverCard';
const community = 
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
};

function MockHoverCard() {
  return (
    <BrowserRouter>
      <CommunityHoverCard
        community={community}
        
      />
    </BrowserRouter>
  );
}

describe('Test for Home Communities  Card', () => {
  it('Test for rendering the card', () => {
    render(<MockHoverCard />);

    const communityAvatar = screen.getByTestId('community_avatar');
    expect(communityAvatar).toBeInTheDocument();
    const communityName = screen.getByText('My Community');
    expect(communityName).toBeInTheDocument();
    const communityNo = screen.getByText('1.6m');
    expect(communityNo).toBeInTheDocument();
    const communityNoOnline = screen.getByText('825');
    expect(communityNoOnline).toBeInTheDocument();
    const communityDesc = screen.getByText('For Your Health');
    expect(communityDesc).toBeInTheDocument();
    const viewCommunityButton = screen.getByText('View Community');
    expect(viewCommunityButton).toBeInTheDocument();
  });
});
