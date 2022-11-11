import { AiOutlineSearch } from 'react-icons/ai';
import {
  StyledInputBase,
  Search,
  SearchContainer
} from '../AppBar/AppBar.Style';

/**
 * @description of the function :it describes the searchbar in the navigation bar as a box
 * @param {bool} login it describes the state at which the user is loggedin or not
 * @return {React.Component} (customized one) with its components from material ui used
 * this function return a searchbox customized element
 */

function SearchBox({ login }) {
  return (
    <SearchContainer
      sx={{
        marginLeft: login ? '5px' : '150px',
        flexBasis: login ? '50%' : '55%'
      }}
    >
      <Search>
        <div>&nbsp;</div>
        <AiOutlineSearch
          color="#8D9092"
          size="1.5rem"
        />
        <StyledInputBase placeholder=" RedditSearch..." />
      </Search>
    </SearchContainer>
  );
}

export default SearchBox;
