/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unescaped-entities */
import './AccountPreferenceStyle.css';
import { Button, Box, TextField, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { list } from '../../../utilities/CountriesList';
// import countryList from 'react-select-country-list';
import Box1 from '../ActionComponents/Box1';
import Box2 from '../ActionComponents/Box2';
// import CompSelectLan from './CompSelectLan/CompSelectLan';

export default function AccountPreference() {
  const [isShownChange, setIsShownChange] = useState(false);
  const handleClickChange = () => {
    setIsShownChange(true);
  };
  const [isShownContinue, setIsShownContinue] = useState(false);
  const [gender, setGender] = useState('Man');
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const [language, setLanguage] = useState('English (US)');
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const { user } = useSelector((state) => state.auth);
  // const [country, setCountry] = useState('Egypt');
  // // const options = useMemo(() => countryList.getData(), []);
  // const handleChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const [country, setCountry] = useState([]);
  // const handleChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };
  // useEffect(() => {
  //   const getCountries = async () => {
  //     const res = await fetch('https://restcountries.com/v3.1/all');
  //     const getcon = await res.json();
  //     console.log(getcon);
  //     setCountry(res);
  //   };
  //   getCountries();
  // }, []);

  // const [email, setEmail] = useState('karim.moh2052@gamil.com');

  // const { user } = useSelector((state) => state.auth);

  return (
    <>
      {(isShownChange || isShownContinue) && <div className="overlay"></div>}
      <div className="main-user-info">
        <h3 className="main-h3">Account Preferences</h3>
        <div className="user-info">
          <div className="user">
            <h3 className="h3">Email address</h3>
            <p className="p">{user.email}</p>
          </div>
          <div className="cont">
            <Button
              onClick={handleClickChange}
              variant="outlined"
              color="primary"
            >
              Change
            </Button>
            {isShownChange && (
              <Box1
                setIsShownChange={setIsShownChange}
                setIsShownContinue={setIsShownContinue}
              />
            )}
            {isShownContinue && (
              <Box2
                setIsShownContinue={setIsShownContinue}
                email={user.email}
              />
            )}
          </div>
        </div>
        <div className="user-info">
          <div className="user">
            <h3 className="h3">Gender</h3>
            <p className="p">
              Reddit will never share this information and only uses it to
              improve what content you see.
            </p>
          </div>
          <div className="cont">
            <Box>
              <TextField
                variant="standard"
                select
                fullwidth
                value={gender}
                onChange={handleChangeGender}
              >
                <MenuItem value="Woman">Woman</MenuItem>
                <MenuItem value="Man">Man</MenuItem>
                <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                <MenuItem value="I Refer To Myself As...">
                  I Refer To Myself As...
                </MenuItem>
                <MenuItem value="I Prefer Not To Say">
                  I Prefer Not To Say
                </MenuItem>
              </TextField>
            </Box>
          </div>
        </div>
        <div className="user-info">
          <div className="user-l">
            <h3 className="h3">
              Display language
              <span>(beta)</span>
            </h3>
            <p className="p">
              Select the language you'd like to experience the Reddit interface
              in. Note that this won't change the language of user-generated
              content and that this feature is still in development so
              translations and UI are still under review.
            </p>
            <Box
              className="box-lan"
              style={{ display: 'flex' }}
            >
              <select
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  appearance: 'none',
                  background: 'none',
                  border: 'none',
                  paddingLeft: '4px',
                  paddingRight: '20px',
                  cursor: 'pointer',
                  color: '#0079d3',
                  borderRadius: '25px'
                }}
                value={language}
                onChange={handleChangeLanguage}
              >
                <option value="Deutsch">Deutsch</option>
                <option value="English (US)">English (US)</option>
                <option value="Español (ES)">Español (ES)</option>
                <option value="Español (MX)">Español (MX)</option>
                <option value="Français">Français</option>
                <option value="Italiano">Italiano</option>
                <option value="Português (BR)">Português (BR)</option>
                <option value="Português (PT)">Português (PT)</option>
              </select>
              <ArrowDropDownIcon
                style={{
                  marginLeft: '-22px',
                  cursor: 'pointer',
                  color: '#0079d3'
                }}
              />
            </Box>
          </div>
        </div>
        <div className="user-info">
          <div className="user">
            <h3 className="h3">Country</h3>
            <p className="p">
              This is your primary location.
              <a href="##">Learn more</a>
            </p>
            <Box
              className="box-con"
              style={{ display: 'flex' }}
            >
              <select
                id="countries"
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  appearance: 'none',
                  background: 'none',
                  border: 'none',
                  paddingLeft: '4px',
                  paddingRight: '18px',
                  cursor: 'pointer',
                  color: '#0079d3',
                  borderRadius: '25px'
                }}
                // value={country}
                // onChange={handleChangeCountry}
              >
                {list.map((countryGet) => (
                  <option key={countryGet.id}>{countryGet.name}</option>
                ))}
              </select>
              <ArrowDropDownIcon
                style={{
                  marginLeft: '-22px',
                  cursor: 'pointer',
                  color: '#0079d3'
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
