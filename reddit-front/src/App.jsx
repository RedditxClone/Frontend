/* eslint-disable */
import HomeCommunitiesCard from "./components/HomePageCards/HomeCommunitiesCard";
import pic from "./assets/Images/1166721.jpg";
import HomeCreatePostCard from "./components/HomePageCards/HomeCreatePostCard";
const communities = [
  {
    name: "My Community",
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1
  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1
  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1
  },
  {
    name: "My Community",
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1
  },
  {
    name: "My Community",
    picture: pic,
    growing: false,
    goingDown: false,
    rank: 1
  }
];

const buttons1 = ["Top", "Gaming", "Near You"];
const buttonText = "See All Health&Fit";
function App() {
  // return <HomeCreatePostCard />
  return (
    <HomeCommunitiesCard
      buttons1={buttons1}
      buttons2={buttons1}
      pic={pic}
      communities={communities}
      homePageCard={false}
      buttonText={buttonText}
    />
  );
}

export default App;
