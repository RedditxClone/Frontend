import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoriesCard from './components/CategoriesCard/CategoriesCard';
import pic from './assets/Images/1166721.jpg';
// import CommunityHoverCard from './components/Categories/CommunityHoverCard';
// import { Store } from './store/Store';
// import App from './App';
import './index.css';
import AlphabeticCategoriesPage from './pages/AlphabeticCategoriesPage/AlphabeticCategoriesPage';
import LetterCategory from './pages/AlphabeticCategoriesPage/LetterCategory';

const links = [
  '/subreddit/a-1',
  '/subreddit/b-1',
  '/subreddit/c-1',
  '/subreddit/d-1'
];
const arr = [
  '/subreddit/a-1',
  '/subreddit/b-1',
  '/subreddit/c-1',
  '/subreddit/d-1'
];
const communities = [
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false,
    noMembers: '1.6m',
    noOnlineMembers: '825',
    description: 'For Your Health'
  }
];

const buttons1 = ['Top', 'Food', 'Near You'];
const buttonText = 'Music';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <CategoriesPage
        communities={communities}
        buttonText={buttonText}
        buttons={buttons1}
        pic={pic}
      />
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          // <CommunityHoverCard community={communities[0]} />
          <CategoriesCard
            communities={communities}
            topText=" Communities"
          />
        )
      },
      {
        path: 'near-you',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Near You"
          />
        )
      },
      {
        path: 'moderating',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Moderating"
          />
        )
      },
      {
        path: 'sports',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Sports"
          />
        )
      },
      {
        path: 'gaming',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Gaming"
          />
        )
      },
      {
        path: 'news',
        element: (
          <CategoriesCard
            communities={communities}
            topText="News"
          />
        )
      },
      {
        path: 'tv',
        element: (
          <CategoriesCard
            communities={communities}
            topText="TV"
          />
        )
      },
      {
        path: 'aww',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Aww"
          />
        )
      },
      {
        path: 'memes',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Memes"
          />
        )
      },
      {
        path: 'pics_and_gifs',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Pics & Gifs"
          />
        )
      },
      {
        path: 'travel',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Travel"
          />
        )
      },
      {
        path: 'tech',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Tech"
          />
        )
      },
      {
        path: 'music',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Music"
          />
        )
      },
      {
        path: 'art_and_design',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Art & Design"
          />
        )
      },
      {
        path: 'beauty',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Beauty"
          />
        )
      },
      {
        path: 'books_and_writing',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Books & Writing"
          />
        )
      },
      {
        path: 'crypto',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Crypto"
          />
        )
      },
      {
        path: 'discussion',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Discussion"
          />
        )
      },
      {
        path: 'e3',
        element: (
          <CategoriesCard
            communities={communities}
            topText="E3"
          />
        )
      },
      {
        path: 'fashion',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Fashion"
          />
        )
      },
      {
        path: 'finance_and_business',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Finance & Business"
          />
        )
      },
      {
        path: 'food',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Food"
          />
        )
      },
      {
        path: 'health_and_fitness',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Health & Fitness"
          />
        )
      },
      {
        path: 'learning',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Learning"
          />
        )
      },
      {
        path: 'mindblowing',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Mindblowing"
          />
        )
      },
      {
        path: 'outdoors',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Outdoors"
          />
        )
      },
      {
        path: 'parenting',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Parenting"
          />
        )
      },
      {
        path: 'photography',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Photography"
          />
        )
      },
      {
        path: 'relationships',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Relationships"
          />
        )
      },
      {
        path: 'science',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Science"
          />
        )
      },
      {
        path: 'videos',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Videos"
          />
        )
      },
      {
        path: 'vroom',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Vroom"
          />
        )
      },
      {
        path: 'wholesome',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Wholesome"
          />
        )
      }
    ]
  },
  {
    path: '/subreddit',
    element: <AlphabeticCategoriesPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'a-1',
        element: (
          <LetterCategory
            letter="A"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'b-1',
        element: (
          <LetterCategory
            letter="B"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'c-1',
        element: (
          <LetterCategory
            letter="C"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'd-1',
        element: (
          <LetterCategory
            letter="D"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'e-1',
        element: (
          <LetterCategory
            letter="E"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'f-1',
        element: (
          <LetterCategory
            letter="F"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'g-1',
        element: (
          <LetterCategory
            letter="G"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'h-1',
        element: (
          <LetterCategory
            letter="H"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'i-1',
        element: (
          <LetterCategory
            letter="I"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'j-1',
        element: (
          <LetterCategory
            letter="J"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'k-1',
        element: (
          <LetterCategory
            letter="K"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'l-1',
        element: (
          <LetterCategory
            letter="L"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'm-1',
        element: (
          <LetterCategory
            letter="M"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'n-1',
        element: (
          <LetterCategory
            letter="N"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'p-1',
        element: (
          <LetterCategory
            letter="P"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'q-1',
        element: (
          <LetterCategory
            letter="Q"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'r-1',
        element: (
          <LetterCategory
            letter="R"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 's-1',
        element: (
          <LetterCategory
            letter="S"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 't-1',
        element: (
          <LetterCategory
            letter="T"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'u-1',
        element: (
          <LetterCategory
            letter="U"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'v-1',
        element: (
          <LetterCategory
            letter="V"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'w-1',
        element: (
          <LetterCategory
            letter="W"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'x-1',
        element: (
          <LetterCategory
            letter="X"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'y-1',
        element: (
          <LetterCategory
            letter="Y"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'z-1',
        element: (
          <LetterCategory
            letter="Z"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: '0-1',
        element: (
          <LetterCategory
            letter="#"
            links={links}
            arr={arr}
          />
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
  // <Provider store={Store}>
  //   <App />
  // </Provider>
);
