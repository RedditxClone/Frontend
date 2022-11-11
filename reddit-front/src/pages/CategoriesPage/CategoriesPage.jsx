/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideList from '../../components/SideList/SideList';
import {
  StyledCategoryiesBody,
  CategoryHeader,
  StyledSideCards,
  ColoredBody,
  SideDiv
} from './CategoriesPage.style';
import AlphabeticCard from '../../components/CategoriesCard/AlphabeticCard';
import HomeCommunitiesCard from '../../components/HomePageCards/HomeCommunitiesCard';

export default function CategoriesPage({
  buttonText,
  buttons,
  pic,
  communitiesCardCommunities
}) {
  let navClass = null;
  const [button, buttonState] = useState({
    title: 'Show More',
    showMore: false,
    listItems: [
      'Moderating',
      'All Communities',
      'Near You',
      'Sports',
      'Gamimg',
      'News',
      'TV',
      'Aww',
      'Memes',
      'Pics & Gifs',
      'Travel',
      'Tech'
    ]
  });
  const listLinks = [
    'moderating',
    '/',
    'near-you',
    'sports',
    'gaming',
    'news',
    'tv',
    'aww',
    'memes',
    'pics_and_gifs',
    'travel',
    'tech',
    'music',
    'art_and_design',
    'beauty',
    'books_and_writing',
    'crypto',
    'discussion',
    'e3',
    'fashion',
    'finance_and_business',
    'food',
    'health_and_fitness',
    'learning',
    'mindblowing',
    'outdoors',
    'parenting',
    'photography',
    'relationships',
    'science',
    'videos',
    'vroom',
    'wholesome'
  ];
  const buttonHandler = () => {
    let showedList = [
      'Moderating',
      'All Communities',
      'Near You',
      'Sports',
      'Gamimg',
      'News',
      'Tv',
      'Aww',
      'Memes',
      'Pics & Gifs',
      'Travel',
      'Tech'
    ];
    if (button.showMore) {
      const showless = !button.showMore;
      buttonState({
        title: 'Show More',
        showMore: showless,
        listItems: showedList
      });
    } else {
      const showmore = !button.showMore;
      showedList = [
        ...button.listItems,
        'Music',
        'Art & Design',
        'Beauty',
        'Books & Writing',
        'Crypto',
        'Discussion',
        'E3',
        'Fashion',
        'Finance & Business',
        'Food',
        'Health & Fitness',
        'Learning',
        'Mindblowing',
        'Outdoors',
        'Parenting',
        'Photography',
        'Relationships',
        'Science',
        'Videos',
        'Vroom',
        'Wholesome'
      ];
      buttonState({
        title: 'Show Less',
        showMore: showmore,
        listItems: showedList
      });
    }
  };
  const getClick = (act) => {
    navClass = act;
  };
  return (
    <ColoredBody>
      <CategoryHeader>
        <h1>Today&#8217;s Top Growing Communities</h1>
        <span>
          Browse Reddit&#8217;s top growing communities. Find the top
          communities in your favorite category.
        </span>
      </CategoryHeader>
      <StyledCategoryiesBody>
        <SideDiv>
          <SideList
            arr={button.listItems}
            links={listLinks}
            listHeader="Categories"
            buttonTitle={button.title}
            click={buttonHandler}
            navClass={navClass}
          />
        </SideDiv>

        <Outlet />
        <StyledSideCards>
          <HomeCommunitiesCard
            buttons1={buttons}
            buttons2={buttons}
            pic={pic}
            communities={communitiesCardCommunities}
            homePageCard={false}
            buttonText={buttonText}
            handleClick={getClick}
          />
          <HomeCommunitiesCard
            buttons1={buttons}
            buttons2={buttons}
            pic={pic}
            communities={communitiesCardCommunities}
            homePageCard={false}
            buttonText={buttonText}
            handleClick={getClick}
          />
          {/* <CommunityHoverCard community={communities[0]} /> */}
          <SideDiv>
            <AlphabeticCard />
          </SideDiv>
        </StyledSideCards>
      </StyledCategoryiesBody>
    </ColoredBody>
  );
}
