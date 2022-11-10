// /* eslint-disable */
// import { fireEvent, render, screen } from '@testing-library/react';
// import CreatePostCard from '../../../components/HomePageCards/CreatePostCard';
// import BestHotNewCard from '../../../components/HomePageCards/BestHotNewCard';
// import HomeCommunitiesCard from '../../../components/HomePageCards/HomeCommunitiesCard';
// import HomeLanguagesCard from '../../../components/HomePageCards/HomeLanguagesCard';
// import HomeCreatePostCard from '../../../components/HomePageCards/HomeCreatePostCard';

// describe('Test for Create Post Card', () => {
//   it('Test for rendering the card', () => {
//     render(<CreatePostCard />);
//     const createPost = screen.getByPlaceholderText(/Create Post/i);

//     expect(createPost).toBeInTheDocument();
//   });
// });

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
