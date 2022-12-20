/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import './table.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import Tabs from '@mui/material/Tabs';
import { getTrafficTableJoinedThisWeek, getTrafficTableJoinedThisYear } from '../../services/requests/Traffic';

import { TrafficTab } from './TrafficStates.style';

/**
 * @description This component is resposinble to
 * render the Traffic Table in the Traffic States Component
 */

function TrafficTable() { // did not write param in
  // documentation as it should not take in the future
  const [value, setValue] = React.useState('Day Of Week');
  const [reversed, setReversed] = React.useState(false);
  const [trafficTableJoinedMembers, setTrafficTableJoinedMembers] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getTrafficTableJoinedThisWeek();
      console.log(`results: ${results}`);
      await setTrafficTableJoinedMembers(results);
      console.log(`trafficTableJoinedMembers: ${trafficTableJoinedMembers}`);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log('entered');
      if (value === 'Day Of Week') {
        console.log(value);
        const results = await getTrafficTableJoinedThisWeek();
        if (reversed) {
          setTrafficTableJoinedMembers(results.reverse());
          console.log('reversed');
        } else { setTrafficTableJoinedMembers(results); }
      } else if (value === 'Month') {
        console.log(value);

        const results = await getTrafficTableJoinedThisYear();
        if (reversed) { setTrafficTableJoinedMembers(results.reverse()); } else { setTrafficTableJoinedMembers(results); }
      }
      console.log(trafficTableJoinedMembers);
    };
    fetchData();
    console.log(trafficTableJoinedMembers);
  }, [value, reversed]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => { // ? reversed correctly but doesnot show
    // const temp = trafficTableJoinedMembers;
    // temp.reverse();
    // setTrafficTableJoinedMembers(temp);
    // console.log(trafficTableJoinedMembers);
    // setTrafficTableJoinedMembers(temp);
    setReversed(!reversed);
  };

  return (
    <div
      style={{
        width: '100%', backgroundColor: '#ffffff', borderRadius: '5px', paddingBottom: '2rem'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
        sx={{ marginBottom: '1.2rem' }}
      >
        <TrafficTab
          value="Day Of Week"
          label="Day Of Week"
        />
        <TrafficTab
          value="Month"
          label="Month"
        />
      </Tabs>
      <table>
        <thead>
          <tr>
            <th
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
              className="col1"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {value}
                <IoMdArrowDropdown size={18} />
              </div>
            </th>
            <th>MEMBERS JOINED</th>
          </tr>
        </thead>
        <tbody>
          {trafficTableJoinedMembers.map(
            (
              item,
              index // data is empty however there is response
            ) => (
              <tr key={index}>
                <td className="col1">{item.time}</td>
                <td>{item.joined}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default (TrafficTable);