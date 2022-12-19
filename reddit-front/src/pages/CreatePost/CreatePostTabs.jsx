/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/require-default-props */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TiDocumentText } from 'react-icons/ti';
import { BsImage } from 'react-icons/bs';
import { TfiLink } from 'react-icons/tfi';
import { BiPoll } from 'react-icons/bi';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { useState } from 'react';
import CreatePostEditor from './CreatePostEditor';
import classes from './CreatePost.module.css';
import DragAndDrop from './DragAndDrop';
import validURL from '../../services/logic/validUrl';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import validateTitle from '../../services/logic/validateTitle';

const TABS_OPTIONS = [
  {
    icon: <TiDocumentText />,
    text: 'Post',
    disabled: false
  },
  {
    icon: <BsImage />,
    text: 'Images & videos',
    disabled: false
  },
  {
    icon: <TfiLink />,
    text: 'Link',
    disabled: false
  },
  {
    icon: <BiPoll />,
    text: 'Poll',
    disabled: true
  },
  {
    icon: <HiOutlineMicrophone />,
    text: 'Talk',
    disabled: true
  }
];

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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

function CreatePostTabs({
  setPostContent,
  postContent,
  postMedia,
  setPostMedia,
  postTitle,
  setPostTitle,
  setPostUrl,
  postUrl,
  validUrl,
  validTitle,
  setValidUrl,
  setValidTitle,
  setCurrentTab
}) {
  const [value, setValue] = useState(0);
  const [visitUrl, setVisitUrl] = useState(false);
  const [visitTitle, setVisitTitle] = useState(false);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    setCurrentTab(newValue);
  };

  const onChangePostTitle = (event) => {
    const title = event.target.value;
    setPostTitle(title);
    console.log(title);
    const check = validateTitle(title);
    console.log(check);
    setValidTitle(validateTitle(title));
  };

  const onChangePostUrl = (event) => {
    const url = event.target.value;
    setPostUrl(url);
    setValidUrl(url.length > 0 && visitUrl && validURL(url));
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
        >
          {TABS_OPTIONS.map((tab, idx) => (
            <Tab
              sx={{ display: 'flex', flexShrink: '1' }}
              key={tab.text}
              label={
                <div
                  disabled={tab.disabled}
                  className={classes['icon-tab']}
                >
                  <span style={{ marginRight: '0.5rem' }}>{tab.icon}</span>
                  <span>{tab.text}</span>
                </div>
              }
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </Box>
      <div className={classes['post-content']}>
        <div className={classes['post-title']}>
          <textarea
            className={classes['post-title_textarea']}
            maxLength={300}
            required
            placeholder="Title"
            onChange={onChangePostTitle}
            onFocus={() => setVisitTitle(true)}
          />
          <span className={classes['post-title-length']}>
            {`${postTitle.length}/300`}
          </span>
          {postTitle.length > 0 && visitTitle && !validTitle && (
            <ErrorMessage>Please, Enter Valid title</ErrorMessage>
          )}
        </div>
        <TabPanel
          value={value}
          index={0}
        >
          <CreatePostEditor
            setPostContent={setPostContent}
            postContent={postContent}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          <DragAndDrop
            currentFiles={postMedia}
            setCurrentFiles={setPostMedia}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
        >
          <textarea
            placeholder="Url"
            rows={1}
            value={postUrl}
            className={classes['post-url']}
            onChange={onChangePostUrl}
            onFocus={() => setVisitUrl(true)}
          />
          {postUrl.length > 0 && visitUrl && !validUrl && (
            <ErrorMessage>Please, Enter Valid URL</ErrorMessage>
          )}
        </TabPanel>
      </div>
    </Box>
  );
}

export default CreatePostTabs;
