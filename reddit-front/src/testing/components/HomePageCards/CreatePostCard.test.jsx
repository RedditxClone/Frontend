import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreatePostCard from '../../../components/HomePageCards/CreatePostCard';
import BestHotNewCard from '../../../components/HomePageCards/BestHotNewCard';
import HomeCommunitiesCard from '../../../components/HomePageCards/HomeCommunitiesCard';
// import HomeLanguagesCard from '../../../components/HomePageCards/HomeLanguagesCard';
// import HomeCreatePostCard from '../../../components/HomePageCards/HomeCreatePostCard';
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

function MockCommunitiesCard() {
  return (
    <BrowserRouter>
      <HomeCommunitiesCard
        pic={pic}
        communities={communities}
        buttons1={buttons1}
        buttons2={buttons1}
        homePageCard
        buttonText={buttonText}
      />
    </BrowserRouter>
  );
}

describe('Test for Create Post Card', () => {
  it('Test for rendering the card', () => {
    render(<CreatePostCard />);
    const createPost = screen.getByPlaceholderText(/Create Post/i);

    expect(createPost).toBeInTheDocument();
  });
});

describe('Test for Best Hot New Card', () => {
  it('Test for rendering the card', () => {
    render(<BestHotNewCard />);

    const best = screen.getByText(/Best/i);
    const hot = screen.getByText(/Hot/i);
    const nnew = screen.getByText(/New/i);
    const top = screen.getByText(/Top/i);

    expect(best).toBeInTheDocument();
    expect(hot).toBeInTheDocument();
    expect(nnew).toBeInTheDocument();
    expect(top).toBeInTheDocument();
  });

  it('Test displaying Today Button & Menu', () => {
    render(<BestHotNewCard />);
    const risingButton = screen.getByTestId('rising_button');
    expect(risingButton).toBeInTheDocument();
    fireEvent.click(risingButton);
    const rising = screen.getByTestId('rising');
    expect(rising).toBeInTheDocument();
    const topButton = screen.getByText('Top');
    fireEvent.click(topButton);
    const todayButton = screen.getByTestId('today_button');
    expect(todayButton).toBeInTheDocument();
    fireEvent.click(todayButton);
    const nowItem = screen.getByText('Now');
    expect(nowItem).toBeInTheDocument();
    const todayItem = screen.getByTestId('today_menu_item');
    expect(todayItem).toBeInTheDocument();
    const weekItem = screen.getByText('This Week');
    expect(weekItem).toBeInTheDocument();
    const monthItem = screen.getByText('This Month');
    expect(monthItem).toBeInTheDocument();
    const yearItem = screen.getByText('This Year');
    expect(yearItem).toBeInTheDocument();
    const allItem = screen.getByText('All Time');
    expect(allItem).toBeInTheDocument();
  });
});

describe('Test for Home Communities  Card', () => {
  it('Test for rendering the card', () => {
    render(<MockCommunitiesCard />);
    const communitiesCardMedia = screen.getByTestId('communities_card_media');
    expect(communitiesCardMedia).toBeInTheDocument();
    const overMediaButton = screen.getAllByTestId('over_media_button');
    expect(overMediaButton).toHaveLength(3);
    const communitiesItems = screen.getAllByTestId('communities_items');
    expect(communitiesItems).toHaveLength(5);
    const viewAllButton = screen.getByText('View All');
    expect(viewAllButton).toBeInTheDocument();
    const underCommunityButton = screen.getAllByTestId('under_community_button');
    expect(underCommunityButton).toHaveLength(3);
  });
  it('Test for hitting the join button', () => {
    render(<MockCommunitiesCard />);

    const joinButton = screen.getAllByText('join');
    expect(joinButton).toHaveLength(3);
    fireEvent.click(joinButton[0]);
    const joinedButton = screen.getByText('joined');
    expect(joinedButton).toBeInTheDocument();
  });
});

// describe('Test for Best Hot New Card', () => {
//   it('Test for rendering the card', () => {
//     render(<BestHotNewCard />);

//     const best = screen.getByText(/Best/i);
//     const hot = screen.getByText(/Hot/i);
//     const nnew = screen.getByText(/New/i);
//     const top = screen.getByText(/Top/i);

//     expect(best).toBeInTheDocument();
//     expect(hot).toBeInTheDocument();
//     expect(nnew).toBeInTheDocument();
//     expect(top).toBeInTheDocument();
//   });

//   it('Test displaying Today Button & Menu', () => {
//     render(<BestHotNewCard />);
//     const risingButton = screen.getByTestId('rising_button');
//     expect(risingButton).toBeInTheDocument();
//     fireEvent.click(risingButton);
//     const rising = screen.getByTestId('rising');
//     expect(rising).toBeInTheDocument();
//     const topButton = screen.getByText('Top');
//     fireEvent.click(topButton);
//     const todayButton = screen.getByTestId('today_button');
//     expect(todayButton).toBeInTheDocument();
//     fireEvent.click(todayButton);
//     const nowItem = screen.getByText('Now');
//     expect(nowItem).toBeInTheDocument();
//     const todayItem = screen.getByTestId('today_menu_item');
//     expect(todayItem).toBeInTheDocument();
//     const weekItem = screen.getByText('This Week');
//     expect(weekItem).toBeInTheDocument();
//     const monthItem = screen.getByText('This Month');
//     expect(monthItem).toBeInTheDocument();
//     const yearItem = screen.getByText('This Year');
//     expect(yearItem).toBeInTheDocument();
//     const allItem = screen.getByText('All Time');
//     expect(allItem).toBeInTheDocument();
//   });
// });

// // describe('Test for Home Communities  Card', () => {
// //   it('Test for rendering the card', () => {
// //     render(<HomeCommunitiesCard />);
// //   });
// // });

// describe('Test for Home Languages Card', () => {
//   it('Test for rendering the card', () => {
//     render(<HomeLanguagesCard />);
//     const userAgreement = screen.getByText('User Agreement');
//     expect(userAgreement).toBeInTheDocument();
//     const contentPolicy = screen.getByText('Content Policy');
//     expect(contentPolicy).toBeInTheDocument();
//     const privacyPolicy = screen.getByText('Privacy Policy');
//     expect(privacyPolicy).toBeInTheDocument();
//     const moderatorCodeOfConduct = screen.getByText('Moderator Code of Conduct');
//     expect(moderatorCodeOfConduct).toBeInTheDocument();
//     const english = screen.getByText('English');
//     expect(english).toBeInTheDocument();
//     const deutsh = screen.getByText('Deutsh');
//     expect(deutsh).toBeInTheDocument();
//     const francis = screen.getByText('Français');
//     expect(francis).toBeInTheDocument();
//     const italiano = screen.getByText('Italiano');
//     expect(italiano).toBeInTheDocument();
//     const portogal = screen.getByText('Português');
//     expect(portogal).toBeInTheDocument();
//     const espan = screen.getByText('Español');
//     expect(espan).toBeInTheDocument();
//     const rights = screen.getByTestId('rights');
//     expect(rights).toBeInTheDocument();
//   });
// });

// describe('Test for Home Create Post Card(The one that is after the communities card)', () => {
//   it('Test for rendering the card', () => {
//     render(<HomeCreatePostCard />);
//     const home = screen.getByText('Home');
//     expect(home).toBeInTheDocument();
//     const createCommunity = screen.getByText('Create Community');
//     expect(createCommunity).toBeInTheDocument();
//     const viewAll = screen.getByText('View All');
//     expect(viewAll).toBeInTheDocument();
//     const typo = screen.getByTestId('home_2nd_create_post_card_typography');
//     expect(typo).toBeInTheDocument();
//   });
// });
