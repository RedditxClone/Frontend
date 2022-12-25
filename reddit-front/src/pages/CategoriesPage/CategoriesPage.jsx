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

/**
 * @description This component is resposinble for showing Top communities
 * @param {string} buttonText to set title of the button at the end of card
 * @param {object} pic the cover of the communities card that is in the home page
 * @param {Array} communitiesCardCommunities the communities that shall be shown in the small cards
 * @param {Array} buttons the buttons shown over the cover of the communities card cover
 * @returns {React.Component} styled page contain Top communities with different communities
 */
function CategoriesPage({
  buttonText,
  buttons,
  pic,
  communitiesCardCommunities
}) {
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

  const restOfListItems = [
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
  const showMoreHandler = () => {
    const showedList = [
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
    const showless = !button.showMore;
    buttonState({
      title: 'Show More',
      showMore: showless,
      listItems: showedList
    });
  };
  const showLessHandler = () => {
    const showmore = !button.showMore;
    buttonState({
      title: 'Show Less',
      showMore: showmore,
      listItems: [
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
      ]
    });
  };
  const buttonHandler = () => {
    if (button.showMore) {
      showMoreHandler();
    } else {
      showLessHandler();
    }
  };
  // const ClickedCardHandler = (text) => {
  //   clickedCardButton = text;
  //   if (restOfListItems.includes(clickedCardButton)) {
  //     showLessHandler();
  //   }
  // };
  return (
    <ColoredBody>
      <CategoryHeader>
        <h1 data-testid="CategoryPageTitle">
          Today&#8217;s Top Growing Communities
        </h1>
        <span data-testid="CategoryPageDescription">
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
            data-testid="SideList"
          />
        </SideDiv>

        <Outlet />
        <StyledSideCards>
          <HomeCommunitiesCard
            data-testid="HomeCard"
            buttons1={buttons}
            buttons2={buttons}
            pic={pic}
            communities={communitiesCardCommunities}
            homePageCard={false}
            buttonText={buttonText}
          />
          <HomeCommunitiesCard
            data-testid="HomeCard"
            buttons1={buttons}
            buttons2={buttons}
            pic={pic}
            communities={communitiesCardCommunities}
            homePageCard={false}
            buttonText={buttonText}
            sx={{
              position: 'sticky'
            }}
          />
          {/* <CommunityHoverCard community={communities[0]} /> */}
          <SideDiv>
            <AlphabeticCard data-testid="AlpaCard" />
          </SideDiv>
        </StyledSideCards>
      </StyledCategoryiesBody>
    </ColoredBody>
  );
}
export default CategoriesPage;
