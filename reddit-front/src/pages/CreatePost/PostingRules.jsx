import SecondaryLogo from '../../utilities/RedditLogo/SecondaryLogo';
import classes from './CreatePost.module.css';

const REDDIT_RULES = [
  { id: 'rule1', rule: 'Remember the human' },
  { id: 'rule2', rule: 'Behave like you would in real life' },
  { id: 'rule3', rule: 'Look for the original source of content' },
  { id: 'rule4', rule: 'Search for duplicates before posting' },
  { id: 'rule5', rule: 'Read the community’s rules' }
];
/**
 * This is a static component to render the posting rules on reddit
 * @returns {React.component}
 */
function PostingRules() {
  return (
    <div className={classes['posting-rules_container']}>
      <header className={classes['posting-rules_header']}>
        <SecondaryLogo />
        <span style={{ marginLeft: '1rem' }}>Posting to Reddit</span>
      </header>
      <ol style={{ paddingLeft: '1.5rem' }}>
        {REDDIT_RULES.map((el) => (
          <li
            key={el.id}
            className={classes['posting-rule_element']}
          >
            {el.rule}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default PostingRules;
