/*eslint-disable */

import './index.css';
import CreatePostCard from './components/HomePageCards/CreatePostCard';
import HomeCommunitiesCard from './components/HomePageCards/HomeCommunitiesCard';
import pic from './assets/1166721.jpg';
import HomeCreatePostCard from './components/HomePageCards/HomeCreatePostCard';
import HomeLanguagesCard from './components/HomePageCards/HomeLanguagesCard';
import BestHotNewCard from './components/HomePageCards/BestHotNewCard';
const communities = [
  {
    name: 'my community',
    picture: pic
  },
  {
    name: 'my community',
    picture: pic
  },
  {
    name: 'my community',
    picture: pic
  },
  {
    name: 'my community',
    picture: pic
  }

];

const buttons1 = [
  'Top',
  'Sports',
  'Communities'
];

const buttons2 = [
  'Top',
  'Sports',
  'Gaming',
  'Aww'
];

function App() {
  // return <HomeCommunitiesCard pic={pic} communities={communities} buttons1={buttons1} buttons2={buttons2} />;
  return <HomeLanguagesCard />;
}

export default App;
