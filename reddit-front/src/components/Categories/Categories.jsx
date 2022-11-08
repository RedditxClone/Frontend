// import React from 'react'
import { useState } from 'react';
import SideList from '../SideList/SideList';
import { StyledCategoryiesBody, CategoryHeader } from './Categories.style';
import AlphabeticCard from './AlphabeticCard';

export default function CategoriesPage() {
  const [button, buttonState] = useState({
    title: 'Show More',
    showMore: false,
    listItems: ['Moderating', 'All Communities', 'Near You', 'Sports', 'Gamimg', 'News', 'Tv', 'Aww', 'Memes', 'Pics & Gifs', 'Travel', 'Tech']
  });
  const buttonHandler = () => {
    let showedList = ['Moderating', 'All Communities', 'Near You', 'Sports', 'Gamimg', 'News', 'Tv', 'Aww', 'Memes', 'Pics & Gifs', 'Travel', 'Tech'];
    if (button.showMore) {
      const showless = !button.showMore;
      buttonState({
        title: 'Show More',
        showMore: showless,
        listItems: showedList
      });
    } else {
      const showmore = !button.showMore;
      showedList = [...button.listItems, 'Music', 'Art & Design', 'Beauty', 'Books & Writing', 'Crypto', 'Discussion', 'E3', 'Fashion', 'Finance & Business', 'Food', 'Health & Fitness', 'Learning', 'Mindblowing', 'Outdoors', 'Parenting', 'Photography', 'Relationships', 'Science', 'Videos', 'Vroom', 'Wholesome'];
      buttonState({
        title: 'Show Less',
        showMore: showmore,
        listItems: showedList
      });
    }
  };
  return (
    <div>
      <CategoryHeader>
        <h1>Today&#8217;s Top Growing Communities</h1>
        <span>
          Browse Reddit&#8217;s top growing communities.
          Find the top communities in your favorite category.
        </span>
      </CategoryHeader>
      <StyledCategoryiesBody>
        <SideList arr={button.listItems} listHeader="Categories" buttonTitle={button.title} click={buttonHandler}> </SideList>
        <AlphabeticCard />
      </StyledCategoryiesBody>
    </div>
  );
}
