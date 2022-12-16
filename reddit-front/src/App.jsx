/* eslint-disable */
import SubredditCards from './components/SubredditCards/SubredditCards';
import FetchUserData from './utilities/FetchUserData/FetchUserData';

function App() {
  return (
    <>
      <FetchUserData className="fetch-user-data-middleware" />
    </>
  );
}

export default App;
