import TrafficChart from './TrafficChart';
import TrafficTable from './TrafficTable';

/**
 * @description This component is
 * resposinble to render the Whole Traffic States Components of the Subreddit
 */ 
function TrafficStates() {
  return (
    <div style={{ margin: '2rem 9rem 4rem 2.5rem', width: '100%' }}>
      <h1 style={{ fontSize: '16px' }}>
        Traffic Stats
        {' '}
        <span style={{ fontSize: '12px', fontWeight: '300' }}>
          updating every day
        </span>
      </h1>
      <TrafficChart />

      <TrafficTable />
    </div>
  );
}
export default (TrafficStates);
