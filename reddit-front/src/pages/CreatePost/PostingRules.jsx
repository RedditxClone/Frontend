import SecondaryLogo from '../../utilities/RedditLogo/SecondaryLogo';
import classes from './CreatePost.module.css';

const REDDIT_RULES = [
  'Remember the human',
  'Behave like you would in real life',
  'Look for the original source of content',
  'Search for duplicates before posting',
  'Read the community’s rules'
];

function PostingRules() {
  return (
    <div className={classes['posting-rules_container']}>
      <header className={classes['posting-rules_header']}>
        <SecondaryLogo />
        <span style={{ marginLeft: '1rem' }}>Posting to Reddit</span>
      </header>
      <ol style={{ paddingLeft: '1.5rem' }}>
        {REDDIT_RULES.map((el) => (
          <li className={classes['posting-rule_element']}>{el}</li>
        ))}
      </ol>
    </div>
  );
}

export default PostingRules;
