import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoriesCard from './components/CategoriesCard/CategoriesCard';
import pic from './assets/Images/1166721.jpg';
// import { Store } from './store/Store';
// import App from './App';
import './index.css';

const communities = [
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: true,
    rank: 1,
    joined: false,
    userCommunity: true
  },
  {
    name: 'My Community',
    picture: pic,
    growing: true,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false
  },
  {
    name: 'My Community',
    picture: pic,
    growing: false,
    goingDown: false,
    rank: 1,
    joined: false,
    userCommunity: false
  }
];

const buttons1 = ['Top', 'Food', 'Near You'];
const buttonText = 'Food';

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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
  // <Provider store={Store}>
  //   <App />
  // </Provider>
);
