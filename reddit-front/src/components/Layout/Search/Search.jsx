import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledInputBase, Search } from '../AppBar/AppBar.Style';
/**
 * @description of the function :it describes the searchbar in the navigation bar as a box
 * @param {bool} login it describes the state at which the user is loggedin or not
 * @return {React.Component} (customized one) with its components from material ui used
 * this function return a searchbox customized element
 */

function SearchBox({ login }) {
  const navigate = useNavigate();
  const changeSearchHandler = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/post/${e.target.value}`);
    }
  };
  const SearchContainer = styled('div')(({ theme }) => ({
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      flexBasis: login ? '60%' : '75%'
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: login ? '48%' : '65%'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: login ? '5px' : '15px',
      flexBasis: login ? '46.5%' : '65%'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: login ? '5px' : '15px',
      // flexBasis: login ? '45%' : '65%'
      flexBasis: login ? '40%' : '65%'
    }
  }));

  return (
    <SearchContainer>
      <Search>
        <div>&nbsp;</div>
        <AiOutlineSearch
          color="#8D9092"
          size="2.5rem"
        />
        <StyledInputBase
          onKeyDown={changeSearchHandler}
          placeholder="RedditSearch..."
          sx={{ fontSize: '1.5rem' }}
        />
      </Search>
    </SearchContainer>
  );
}

export default SearchBox;
