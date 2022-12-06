/* eslint-disable  */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Title,
  Tooltip
} from "chart.js";
import {useEffect} from 'react';
import {useState} from 'react';
import {getTrafficChartData,getTrafficLastMonth,getTrafficLastWeek} from '../../services/requests/Traffic.js'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip
);

export default function TrafficChart() {
 let trafficChartData=[];
 let labels =[];
 let joined =[];
 let left =[];
 const [trafficLastWeek,setTrafficLastWeek]=useState(0);
 const [trafficLastMonth,setTrafficLastMonth]=useState(0);
  useEffect( ()=>{
    async function fetchData(){
      trafficChartData= await getTrafficChartData();
      console.log(trafficChartData[0].day);
      labels = trafficChartData.map((item)=>item.day);
      joined=trafficChartData.map((item)=>item.joined);
      left=trafficChartData.map((item)=>item.left);
      console.log(labels);
      console.log(joined);
      console.log(left);
      const res1=await getTrafficLastWeek();
      setTrafficLastWeek(res1);
      const res2=await getTrafficLastMonth();
      setTrafficLastMonth(res2);
    };
    fetchData();
    
  },[]);
  let labels2 =['1','2','3','4','5','6','7'];
  let data =  {
    labels: labels2,// not working with server 
    datasets: [
      {
        label: "Joined",
        data: ['65', '59', '80', '81', '56', '55', '300'],// also do not work even if data inside use effect , gives error also
        fill: false,
        borderColor: "#0079D3",
        backgroundColor: "#0079D3",
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Left",
        data: [200, 400, 3000, 85, 111, 212, 100],// also do not work
        fill: false,
        borderColor: "#FFB000",
        backgroundColor: "#FFB000",
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 3
      }
    ]
  };
  const options = {
    plugins: {
      legend: true,
      legend: {
        position: "right",
        align: "start",
        // maxWidth:'100'
        labels: {
          boxWidth: 15,
          padding: 15,
          useBorderRadius: true,
          borderRadius: 1,
          font: {
            color: "#1c1c1c"
          }
        }
        // title:{
        //     display: true,
        //     padding:'20'
        // }
      },
      title: {
        display: true,
        text: "Members",
        position: "left",
        padding: {
          top: 0,
          bottom: 30
        },
        font:{
          size:'18',
          color: "#1c1c1c"
        }
      },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000"
      }
    }
  };
  return (
    <div style={{ width: "100%",height:'56rem' ,backgroundColor: "#ffffff",padding:'16px',borderRadius:'5px',marginBottom:'1rem' }}>
      <h2 style={{ color:'#0079d3',fontWeight: "600",marginTop:'-0.8rem' }}>Members</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            width: "40%",
            border: "1px solid #EDEFF1",
            borderRadius: "2px",
            height: "10rem",
            padding: "16px",
            margin: "16px"
          }}
        >
          <span style={{ fontSize: "32px", fontWeight: "400" }}>{trafficLastWeek.totalMembers}</span>
          <h3 style={{ color:'#878a8c' }}>TOTAL - LAST 7 DAYS</h3>
        </div>
        <div
          style={{
            width: "40%",
            border: "1px solid #EDEFF1",
            borderRadius: "2px",
            height: "10rem",
            padding: "16px",
            margin: "16px"
          }}
        >
          <span style={{ fontSize: "32px", fontWeight: "400" }}>{trafficLastMonth.totalMembers}</span>
          <h3 style={{ color:'#878a8c' }}>TOTAL - LAST MONTH</h3>
        </div>
      </div>
      <div style={{width: "100%",height:'60%',padding:'10px'}}>
      <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}
