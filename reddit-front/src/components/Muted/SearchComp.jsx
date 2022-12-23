/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { Button } from '@mui/material';
import MutedUsers from './MutedUsers';

/**
 * @param {object} mutedUsers
 */

/**
 * This component is in muted page in mod tools
 * this is search component
 */

function SearchComp({ mutedUsers }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchArray, setSearchArray] = useState([]);
  const [search, setSearch] = useState(false);
  let arr = [];
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    setSearch(true);
    arr = mutedUsers.filter((mutedUser) => mutedUser.username === searchInput);
    setSearchArray([1, 2, 3, 4, 5]);
  };

  const handleSeeAll = () => {
    setSearch(false);
    setSearchInput('');
  };

  function searchData() {
    arr = mutedUsers.filter((mutedUser) => mutedUser.username === searchInput);
    const dataArr = arr.map((searchArr) => (
      <MutedUsers mutedUser={searchArr} />
    ));
    const data =
      arr.length > 0 ? (
        <>
          <div
            style={{
              display: 'flex',
              padding: '8px 16px',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #edeff1'
            }}
          >
            <p style={{ fontSize: '15px', margin: '7px', marginLeft: '0' }}>
              1 search result for{' '}
              <span style={{ color: '#0079d3' }}>
                {' '}
                &apos;{searchInput}&apos;:
              </span>
            </p>
            <Button
              variant="text"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '9999px',
                textTransform: 'none',
                marginLeft: 'auto'
              }}
              onClick={handleSeeAll}
            >
              See all
            </Button>
          </div>
          {dataArr}
        </>
      ) : (
        <div
          className="muted-users"
          style={{
            backgroundColor: '#ffffff',
            minHeight: '262px',
            borderRadius: '0 0 7px 7px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              marginLeft: '40%',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '22px',
              color: '#878a8c'
            }}
          >
            <span>
              <BiSearch
                style={{
                  fontSize: '35px',
                  marginLeft: '70px',
                  marginBottom: '15px'
                }}
              />
            </span>
            <br />
            No results for u/{searchInput}
            <br />
            <Button
              variant="text"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '9999px',
                textTransform: 'none',
                marginLeft: '60px'
              }}
              onClick={handleSeeAll}
            >
              See all
            </Button>
          </span>
        </div>
      );
    return data;
  }

  function dataShow() {
    const data = mutedUsers.map((mutedUser) => (
      <MutedUsers mutedUser={mutedUser} />
    ));
    return data;
  }

  return (
    <div data-testid="Search-container">
      <div
        style={{
          display: 'flex',
          padding: '8px 16px',
          borderRadius: '4px 4px 0 0',
          backgroundColor: '#edeff1'
        }}
      >
        <input
          placeholder="search for a user"
          style={{
            width: '248px',
            height: '32px',
            borderRadius: '4px 0 0 4px',
            border: '1px solid #878a8c',
            padding: '8px'
          }}
          value={searchInput}
          onChange={handleChange}
        />
        <div
          style={{
            display: 'flex',
            height: '32px',
            padding: '12px',
            alignItems: 'center',
            backgroundColor: '#878a8c',
            cursor: 'pointer',
            borderRadius: '0 4px 4px 0'
          }}
          onClick={handleSearch}
        >
          <BiSearch style={{ fontSize: '20px', color: '#ffffff' }} />
        </div>
      </div>
      {search ? searchData() : dataShow()}
    </div>
  );
}
export default SearchComp;
