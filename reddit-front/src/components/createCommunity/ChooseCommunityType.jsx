import {
  Box,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography
} from '@mui/material';
import { BsLockFill, BsFillPersonFill } from 'react-icons/bs';
import { ImEye } from 'react-icons/im';
import ButtonLabel from './ButtonLabel';

const COMMUNITY_TYPES = [
  {
    id: 'pub',
    icon: <BsFillPersonFill color="#7c7c7c" />,
    type: 'Public',
    description: 'Anyone can view, post, and comment to this community'
  },
  {
    id: 'res',
    icon: <ImEye color="#7c7c7c" />,
    type: 'Restricted',
    description:
      'Anyone can view this community, but only approved users can post'
  },
  {
    id: 'pri',
    icon: <BsLockFill color="#7c7c7c" />,
    type: 'Private',
    description: 'Only approved users can view and submit to this community'
  }
];

function ChooseCommunityType(props) {
  const onChangeType = (event) => {
    props.onChangeCommunityType(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: '3rem' }}>
      <FormControl>
        <FormLabel>
          <Typography
            variant="h1"
            sx={{ marginBottom: '0.4rem' }}
          >
            Community Type
          </Typography>
        </FormLabel>
        <RadioGroup
          defaultValue="public"
          onChange={onChangeType}
        >
          {COMMUNITY_TYPES.map((commType) => (
            <FormControlLabel
              key={commType.id}
              label={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <ButtonLabel
                  type={commType.type}
                  icon={commType.icon}
                  description={commType.description}
                />
              }
              control={<Radio />}
              value={commType.type}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default ChooseCommunityType;
