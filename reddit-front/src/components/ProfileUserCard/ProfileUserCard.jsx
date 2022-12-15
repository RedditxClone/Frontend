import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { GiCupcake } from 'react-icons/gi';
import { BsFlower2 } from 'react-icons/bs';

export default function ProfileUserCard() {
  const [Options, SetOptions] = useState(false);

  const viewOptions = () => {
    SetOptions((current) => !current);
  };
  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        height="80"
        image="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="user cover"
        sx={{ overflow: 'auto' }}
      />
      {/* <CardMedia
        component="img"
        height="70"
        image="https://10wallpaper.com/wallpaper/1920x1200/1306/Attractions-Seychelles_island_scenery_HD_wallpaper_1920x1200.jpg"
        alt="user profile"
        sx={{
          '&.MuiCardMedia-root': {
            width: '30%'
          },
          // borderWidth: '3rem',
          border: 'solid white',
          marginTop: '-5.5rem',
          marginLeft: '0.5rem',
          borderRadius: '0.5rem'
        }}
      /> */}

      <img
        src="https://10wallpaper.com/wallpaper/1920x1200/1306/Attractions-Seychelles_island_scenery_HD_wallpaper_1920x1200.jpg"
        alt="user profile"
        style={{
          width: '35%',
          height: '8.05rem',
          border: 'solid white',
          marginTop: '-6rem',
          marginLeft: '0.5rem',
          borderRadius: '0.5rem'
        }}
      />

      <CardContent sx={{ '&.MuiCardContent-root': { padding: '0.2rem' } }}>
        <Typography
          component="div"
          sx={{ paddingLeft: '0.5rem' }}
        >
          u/nada_osman
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: '0.5rem',
            paddingRight: '5rem',
            marginTop: '0.5rem'
          }}
        >
          <div>
            <Typography>Karma</Typography>
            <Typography>
              <BsFlower2 color="#1484D6" />
              &nbsp;5
            </Typography>
          </div>
          <div>
            <Typography>Cake day</Typography>
            <Typography>
              <GiCupcake color="#1484D6" />
              &nbsp;October 5, 2022
            </Typography>
          </div>
        </div>
        <Button
          size="medium"
          sx={{
            textTransform: 'none',
            border: 'solid #1484D6',
            borderWidth: '0.01rem',
            '&.MuiButtonBase-root': {
              borderRadius: '2rem',
              paddingY: '0.1rem',
              paddingX: '3rem'
            },
            marginLeft: '5rem',
            marginTop: '1rem'
          }}
        >
          Unfollow
        </Button>
      </CardContent>
      <Button
        sx={{
          textTransform: 'none',
          '&.MuiButtonBase-root': {
            borderRadius: '2rem',
            paddingY: '0.1rem',
            paddingX: '0.5rem',
            marginLeft: '16rem',
            marginTop: '0.8rem',
            marginBottom: '0.4rem'
          },
          backgroundColor: '#DBDBDB',
          display: Options ? 'none' : 'block'
        }}
        onClick={viewOptions}
      >
        More Options
      </Button>
      {Options ? (
        <CardActions
          sx={{
            '&.MuiCardActions-root': {
              flexDirection: 'column',
              paddingY: '0.3rem',
              paddingX: '0',
              alignItems: 'normal'
            }
          }}
        >
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              '&.MuiButtonBase-root': {
                justifyContent: 'flex-start',
                width: '30%',
                borderRadius: '2rem'
              },
              ':hover': {
                backgroundColor: '#DBDBDB'
              }
            }}
          >
            Send Message
          </Button>
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              '&.MuiButtonBase-root': {
                marginLeft: '0',
                justifyContent: 'flex-start',
                minWidth: '0',
                width: '23%',
                borderRadius: '2rem'
              },
              ':hover': {
                backgroundColor: '#DBDBDB'
              }
            }}
          >
            Block User
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              '&.MuiButtonBase-root': {
                borderRadius: '2rem',
                paddingY: '0.1rem',
                paddingX: '0.5rem',
                marginLeft: '14.8rem',
                marginBottom: '0.4rem',
                marginTop: '0.2rem'
              },
              backgroundColor: '#DBDBDB',
              width: '33%',
              ':hover': {
                backgroundColor: '#DBDBDB'
              }
            }}
            onClick={viewOptions}
          >
            Fewer Options
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
