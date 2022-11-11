import { NavCategoriesContainer, SubRedditNavLink } from './AlphabeticCategoriesPage.style';

/**
 * @description This component is resposinble for showing subreddites with same letter in begining
 * @param {string} letter to set letter of which subreddites word starts with
 * @param {Array} arr -contains names of subredites begin with the same letter
* @param {Array} links to set destinations we will go when clicking on subreddit name
 * @returns {React.Component} styled container contain subreddites with same letter in begining
 */
function LetterCategory({ letter, links, arr }) {
  const listArray = arr;
  return (
    <NavCategoriesContainer>
      <h2>
        Browse communities starting with &#8216;
        {letter}
        &#8217; &#8208; Page 1
      </h2>
      <div id="LinksDiv">
        {listArray.map((text, index) => (
          <SubRedditNavLink to={`${links[index]}`}>
            {text}
          </SubRedditNavLink>
        ))}
      </div>
    </NavCategoriesContainer>
  );
}
export default LetterCategory;
