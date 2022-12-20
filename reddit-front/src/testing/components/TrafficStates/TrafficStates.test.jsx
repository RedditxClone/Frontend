/* eslint-disable */
import { fireEvent, render, screen } from '@testing-library/react';
// import TrafficStates from '../../../components/TrafficStates/TrafficStates';
import TrafficTable from '../../../components/TrafficStates/TrafficTable'; 
import TrafficChart from '../../../components/TrafficStates/TrafficChart'; 

 
// Can not test Chart cause it can not find line graph
// tries to get data ! How to make test async ??
// describe'Test for Traffic Table Component',  () => { 
     it('Test for rendering the Table', async () => {
    render(<TrafficTable />); 
       
    await waitFor(expect(screen.queryAllByText(/Day Of Week/i)).toBeInTheDocument(), {
        timeout: 2000 }); 
     

});


it('Test for rendering the chart',  () => {
  render(<TrafficChart />); 
  expect(screen.queryAllByText(/TOTAL 7 DAYS/i)).toBeInTheDocument()
   
  

});

