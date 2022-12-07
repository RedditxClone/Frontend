import TrafficChart from './TrafficChart';
import TrafficTable from './TrafficTable';

const tableList = [
  {
    time: 'Sun',
    members: 1500
  },
  {
    time: 'Sun',
    members: 1500
  },
  {
    time: 'Sun',
    members: 1500
  },
  {
    time: 'Sun',
    members: 1500
  },
  {
    time: 'Sun',
    members: 1500
  },
  {
    time: 'Sun',
    members: 222222
  }
];
/**
 * @description This component is
 * resposinble to render the Whole Traffic States Components of the Subreddit
 */
function TrafficStates() {
  return (
    <div style={{ margin: '2rem 9rem 4rem 2.5rem', width: '100%' }}>
      <h1>
        Traffic Stats
        {' '}
        <span style={{ fontSize: '12px', fontWeight: '300' }}>
          updating every day
        </span>
      </h1>
      <TrafficChart />

      <TrafficTable list={tableList} />
    </div>
  );
}
export default (TrafficStates);
