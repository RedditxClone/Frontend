// /* eslint-disable max-len */
// import { fireEvent, render, screen } from '@testing-library/react';
// import SubredditCards from '../../../components/SubredditCards/SubredditCards';
// import CardHeader from '../../../components/SubredditCards/CardHeader/CardHeader';
// import AboutCard from '../../../components/SubredditCards/AboutCard/AboutCard';
// import FlairsCard from '../../../components/SubredditCards/FlairsCard/FlairsCard';
// import RulesCard from '../../../components/SubredditCards/RulesCard/RulesCard';
// import ModeratorsCard from '../../../components/SubredditCards/ModeratorsCard/ModeratorsCard';
// import SubredditBackground
// from '../../../components/SubredditCards/SubredditBackground/SubredditBackground';
// import SubredditName from '../../../components/SubredditCards/SubredditName/SubredditName';

// describe('Test for Community Cards', () => {
//   it('Test for rendering the Card Header', () => {
//     render(<CardHeader />);
//     const element = screen.getByTestId(/card-header-container/i);
//     expect(element).toBeInTheDocument();
//   });

//   it('Test the About Card', () => {
//     render(<AboutCard />);
//     const element = screen.getByTestId(/about-card-container/i);
//     const description = screen.getByTestId(/about-description/i);
//     const communityOptionsButton = screen.getByTestId(
//       /community-options-button/i
//     );
//     const communityInfo = screen.getByTestId(/community-info/i);
//     const createPostButton = screen.getByTestId(
//       /create-post-inside-community/i
//     );

//     expect(element).toBeInTheDocument();
//     expect(description).toBeInTheDocument();
//     expect(communityInfo).toBeInTheDocument();
//     expect(createPostButton).toBeInTheDocument();
//     expect(communityOptionsButton).toBeInTheDocument();
//     fireEvent.click(communityOptionsButton);
//     const communityThemeOption = screen.getByTestId(/community-theme-option/i);
//     expect(communityThemeOption).toBeInTheDocument();
//   });

//   it('Testing Filter by flair card', () => {
//     render(<FlairsCard />);
//     const element = screen.getByTestId(/flairs-card/i);

//     expect(element).toBeInTheDocument();
//   });

//   it('Test rendering the Rules Card', () => {
//     render(<RulesCard />);
//     const element = screen.getByTestId(/community-rules-card/i);
//     expect(element).toBeInTheDocument();
//   });

//   it('Test rendering the moderators card', () => {
//     render(<ModeratorsCard />);
//     const element = screen.getByTestId(/moderators-card/i);
//     const msgModButton = screen.getByTestId(/msg-mods-button/i);
//     const viewAllMods = screen.getByTestId(/view-all-moderators/i);

//     expect(element).toBeInTheDocument();
//     expect(msgModButton).toBeInTheDocument();
//     expect(viewAllMods).toBeInTheDocument();
//   });

//   it('Test rendering the Subreddit Background', () => {
//     render(<SubredditBackground />);
//     const element = screen.getByTestId(/subreddit-background/i);

//     expect(element).toBeInTheDocument();
//   });

//   it('Test rendering the subreddit Name & Logo', () => {
//     render(<SubredditName />);
//     const element = screen.getByTestId(/subreddit-title-logo-container/i);
//     const joinButton = screen.getByTestId(/join-community-button/i);
//     const notifyButton = screen.getByTestId(/notify-button/i);

//     expect(element).toBeInTheDocument();
//     expect(joinButton).toBeInTheDocument();
//     expect(notifyButton).toBeInTheDocument();
//   });

//   it('Testing Subreddit Component', () => {
//     render(<SubredditCards />);
//     const element = screen.getByTestId(/subreddit-cards/i);
//     expect(element).toBeInTheDocument();
//   });
// });
