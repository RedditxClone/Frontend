import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from '@mui/material';
import { StyledInputBase, Search } from './AppBar.Style';
/**
 * @description of the function :it describes the searchbar in the navigation bar as a box
 * @param {bool} login it describes the state at which the user is loggedin or not
 * @return {React.Component} (customized one) with its components from material ui used
 * this function return a searchbox customized element
 */

function SearchBox({ login }) {
  const SearchContainer = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      flexBasis: login ? '60%' : '75%'
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: login ? '60%' : '65%'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: login ? '5px' : '15px',
      flexBasis: login ? '40%' : '65%'
    }
  }));

  return (
    <SearchContainer>
      <Search>
        <div>&nbsp;</div>
        <AiOutlineSearch
          color="#8D9092"
          size="1.5rem"
        />
        <StyledInputBase placeholder="RedditSearch..." />
      </Search>
    </SearchContainer>
  );
}

export default SearchBox;
