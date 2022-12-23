/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardHeader from '../../../components/SubredditCards/CardHeader/CardHeader';
import AboutCard from '../../../components/SubredditCards/AboutCard/AboutCard';
import FlairsCard from '../../../components/SubredditCards/FlairsCard/FlairsCard';
import RulesCard from '../../../components/SubredditCards/RulesCard/RulesCard';
import ModeratorsCard from '../../../components/SubredditCards/ModeratorsCard/ModeratorsCard';
import SubredditBackground from '../../../components/SubredditCards/SubredditBackground/SubredditBackground';
import SubredditName from '../../../components/SubredditCards/SubredditName/SubredditName';
import { Store } from '../../../store/Store';

describe('Test for Community Cards', () => {
  it('Test for rendering the Card Header', () => {
    render(<CardHeader />);
    const element = screen.getByTestId(/card-header-container/i);
    expect(element).toBeInTheDocument();
  });

  it('Test the About Card', () => {
    const aboutInfo = {
      subTopics: []
    };
    render(
      <Provider store={Store}>
        <AboutCard
          isJoined={true}
          aboutInfo={aboutInfo}
          isModeratorMode={true}
        />
      </Provider>
    );

    const element = screen.getByTestId(/about-card-container/i);
    const description = screen.getByTestId(/about-description/i);

    const communityInfo = screen.getByTestId(/community-info/i);
    const createPostButton = screen.getByTestId(
      /create-post-inside-community/i
    );

    expect(element).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(communityInfo).toBeInTheDocument();
    expect(createPostButton).toBeInTheDocument();
  });

  it('Testing Filter by flair card', () => {
    render(
      <Provider store={Store}>
        <FlairsCard flairsList={['flair_1']} />
      </Provider>
    );
    const element = screen.getByTestId(/flairs-card/i);

    expect(element).toBeInTheDocument();
  });

  it('Test rendering the Rules Card', () => {
    render(
      <Provider store={Store}>
        <RulesCard rulesList={['flair_1']} />
      </Provider>
    );
    const element = screen.getByTestId(/community-rules-card/i);
    expect(element).toBeInTheDocument();
  });

  it('Test rendering the moderators card', () => {
    render(
      <Provider store={Store}>
        <ModeratorsCard moderatorsList={[]} />
      </Provider>
    );
    const element = screen.getByTestId(/moderators-card/i);
    const msgModButton = screen.getByTestId(/msg-mods-button/i);
    const viewAllMods = screen.getByTestId(/view-all-moderators/i);

    expect(element).toBeInTheDocument();
    expect(msgModButton).toBeInTheDocument();
    expect(viewAllMods).toBeInTheDocument();
  });

  it('Test rendering the Subreddit Background', () => {
    render(
      <Provider store={Store}>
        <SubredditBackground />
      </Provider>
    );

    const element = screen.getByTestId(/subreddit-background/i);

    expect(element).toBeInTheDocument();
  });

  it('Test rendering the subreddit Name & Logo', () => {
    render(
      <Provider store={Store}>
        <SubredditName />
      </Provider>
    );
    const element = screen.getByTestId(/subreddit-title-logo-container/i);
    const joinButton = screen.getByTestId(/join-community-button/i);

    expect(element).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });
});
