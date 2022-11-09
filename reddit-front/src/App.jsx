/* eslint-disable */
import HomeCommunitiesCard from "./components/HomePageCards/HomeCommunitiesCard";
import pic from "./assets/Images/1166721.jpg";
import HomeCreatePostCard from "./components/HomePageCards/HomeCreatePostCard";
import CategoriesCard from "./components/Categories/CategoriesCard";
import CommunityHoverCard from "./components/Categories/CommunityHoverCard";

const communities = [
  {
    name: "My Community",
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined:false,
    userCommunity: false

  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined:false,
    userCommunity: true
  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined:false,
    userCommunity: true
  },
  {
    name: "My Community",
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined:false,
    userCommunity: false
  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: false,
    rank: 1,
    joined:false,
    userCommunity: false
  }
  
];

const buttons1 = ["Top", "Gaming", "Near You"];
const buttonText = "See All Health&Fit";
function App() {
  // return <HomeCreatePostCard />
  return (
    <CategoriesCard
      
   
      communities={communities}
      
      topText={'Sports'}
    />
    // <CommunityHoverCard community={communities[0]} />
  );
  
}

export default App;
