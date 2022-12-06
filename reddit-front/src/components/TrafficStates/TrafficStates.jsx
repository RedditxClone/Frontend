/* eslint-disable */
import React from "react";
import TrafficChart from "../TrafficChart/TrafficChart";
import TrafficTable from "../TrafficTable/TrafficTable";


const tableList = [
  {
    time: "Sun",
    members: 1500
  },
  {
    time: "Sun",
    members: 1500
  },
  {
    time: "Sun",
    members: 1500
  },
  {
    time: "Sun",
    members: 1500
  },
  {
    time: "Sun",
    members: 1500
  },
  {
    time: "Sun",
    members: 222222
  }
];

export default function TrafficStates() {
  return (
    <div style={{marginLeft:'20px',width:'100%'}}>
      <h1>Traffic Stats <span style={{fontSize:'12px',fontWeight:'300'}}>updating every day</span></h1>
      <TrafficChart />

      <TrafficTable  list={tableList} />
    </div>
  );
}
