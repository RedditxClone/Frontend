import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  'Addiction Support',
  'Animals and Pets',
  'Art',
  'Activism',
  'Beauty and Makeup',
  'Business, Economics, and Finance',
  'Celebrity',
  'Crafts and DIY',
  'Crypto',
  'Culture, Race, and Ethnicity',
  'Careers',
  'Ethics and Philosophy',
  'Family and Relationships',
  'Fitness and Nutrition',
  'Funny/Humor',
  'Food and Drink',
  'Fashion',
  'Gender',
  'Gaming',
  'History',
  'Hobbies',
  'Home and Garden',
  'Law',
  'Learning and Education',
  'Internet Culture and Memes',
  'Marketplace and Deals',
  'Medical and Mental Health',
  'Military',
  'Outdoors and Nature',
  'Programming',
  'Reading, Writing, and Literature',
  'Sports',
  'Science',
  'Travel',
  'None of these topics'
];

function getStyles(name, topicName, theme) {
  return {
    fontWeight:
      topicName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [topicName, setTopicName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setTopicName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 650 }}>
        <InputLabel id="demo-multiple-chip-label">Topics</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={topicName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={handleDelete} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, topicName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
