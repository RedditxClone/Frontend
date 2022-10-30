/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
import { Fragment } from 'react';
import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <Fragment>
      <PostsList />
    </Fragment>
  );
}

export default App;
