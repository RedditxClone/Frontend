/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/require-default-props */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
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
// import ImagesAndVideos from './Dropzone';
import CreatePostEditor from './CreatePostEditor';
import classes from './CreatePost.module.css';
import DragAndDrop from './DragAndDrop';

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
  postMedia,
  setPostMedia,
  postTitle,
  setPostTitle
}) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const onChangePostTitle = (event) => {
    setPostTitle(event.target.value);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
        >
          {TABS_OPTIONS.map((tab, idx) => (
            <Tab
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
          />
          <span className={classes['post-title-length']}>
            {`${postTitle.length}/300`}
          </span>
        </div>
        <TabPanel
          value={value}
          index={0}
        >
          <CreatePostEditor setPostContent={setPostContent} />
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
            className={classes['post-url']}
          />
        </TabPanel>
      </div>
    </Box>
  );
}

export default CreatePostTabs;
