/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { PageContainer } from './SearchCards.Style';
import CommunitiesResults from '../../components/SearchCards/CommunitiesResults/CommunitiesResults';
import PeopleResults from '../../components/SearchCards/PeopleResults/PeopleResults';
import PostsResults from '../../components/SearchCards/PostsResults/PostsResults';
import CommentsResults from '../../components/SearchCards/CommentsResults/CommentsResults';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

/**
 * This Page for the showing the search results
 *
 */
function SearchResults() {
  const routes = [
    ['posts', '/search/posts'],
    ['comments', '/search/comments'],
    ['communities', '/search/communities'],
    ['people', '/search/people']
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // Outer Container
    <div style={{ backgroundColor: '#DAE0E6' }}>
      <PageContainer className="page-container">
        {/* Inner Container  */}
        <Box sx={{ width: '100%' }}>
          {/* Nav List  */}
          <Box className="results-navigation">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                '& div > span': { backgroundColor: 'black' }
              }}
            >
              {/* Mapping on the allowed routes of the search page  */}
              {routes.map((route, index) => (
                <Tab
                  sx={{
                    fontSize: '1.4rem',
                    color: 'black !important'
                  }}
                  to={route[1]}
                  component={Link}
                  label={route[0]}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>

          {/* Results of the search query  */}
          <Box
            sx={{
              width: '100%',
              '& .tab-result > div': {
                padding: 0
              }
            }}
            className="tab-container"
          >
            {/* Posts result Card  */}
            <TabPanel
              className="tab-result"
              value={value}
              index={0}
            >
              <PostsResults />
            </TabPanel>

            {/* Comments result Card  */}
            <TabPanel
              className="tab-result"
              value={value}
              index={1}
            >
              <CommentsResults />
            </TabPanel>

            {/* Communities result Card  */}
            <TabPanel
              className="tab-result"
              value={value}
              index={2}
            >
              <CommunitiesResults isSideBarCard={false} />
            </TabPanel>

            {/* People result Card  */}
            <TabPanel
              className="tab-result"
              value={value}
              index={3}
            >
              <PeopleResults isSideBarCard={false} />
            </TabPanel>
          </Box>
        </Box>
      </PageContainer>
    </div>
  );
}
export default SearchResults;
