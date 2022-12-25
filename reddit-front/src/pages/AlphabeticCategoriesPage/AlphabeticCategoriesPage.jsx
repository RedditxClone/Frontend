import { Outlet } from 'react-router-dom';
import {
  GrayDiv,
  AlphabeticHeader,
  NavLink
} from './AlphabeticCategoriesPage.style';

/**
 * @description This page contain subreddits arranged by letter
 * @returns {React.Component}
 */

function AlphabeticCategoriesPage() {
  return (
    <GrayDiv>
      <AlphabeticHeader>
        <h1>Community Directory</h1>
        <div>
          <NavLink to="/subreddit/a-1">A</NavLink>
          <NavLink to="/subreddit/b-1">B</NavLink>
          <NavLink to="/subreddit/c-1">C</NavLink>
          <NavLink to="/subreddit/d-1">D</NavLink>
          <NavLink to="/subreddit/e-1">E</NavLink>
          <NavLink to="/subreddit/f-1">F</NavLink>
          <NavLink to="/subreddit/g-1">G</NavLink>
          <NavLink to="/subreddit/h-1">H</NavLink>
          <NavLink to="/subreddit/i-1">I</NavLink>
          <NavLink to="/subreddit/j-1">J</NavLink>
          <NavLink to="/subreddit/k-1">K</NavLink>
          <NavLink to="/subreddit/l-1">L</NavLink>
          <NavLink to="/subreddit/m-1">M</NavLink>
          <NavLink to="/subreddit/n-1">N</NavLink>
          <NavLink to="/subreddit/o-1">O</NavLink>
          <NavLink to="/subreddit/p-1">P</NavLink>
          <NavLink to="/subreddit/q-1">Q</NavLink>
          <NavLink to="/subreddit/r-1">R</NavLink>
          <NavLink to="/subreddit/s-1">S</NavLink>
          <NavLink to="/subreddit/t-1">T</NavLink>
          <NavLink to="/subreddit/u-1">U</NavLink>
          <NavLink to="/subreddit/v-1">V</NavLink>
          <NavLink to="/subreddit/w-1">W</NavLink>
          <NavLink to="/subreddit/x-1">X</NavLink>
          <NavLink to="/subreddit/y-1">Y</NavLink>
          <NavLink to="/subreddit/z-1">Z</NavLink>
          <NavLink to="/subreddit/0-1">#</NavLink>
        </div>

      </AlphabeticHeader>

      <Outlet />
    </GrayDiv>
  );
}
export default AlphabeticCategoriesPage;
