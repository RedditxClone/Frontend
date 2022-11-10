import { fireEvent, render, screen } from '@testing-library/react';
// import CategoriesPage from '../../../pages/CategoriesPage/CategoriesPage';
// import pic from '../../../assets/Images/1166721.jpg';
import SideList from '../../../components/SideList/SideList';

it('Test for rendering the side list', () => {
  render(
    <SideList
      arr={[
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
      ]}
      buttonTitle="Show More"
      click={() => {}}
      links={
        [
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
        ]
    }
    />
  );
  const showButton = screen.getByTestId(/SideListButton/i);
  fireEvent.click(showButton);
  const showButtonName = screen.getByText(/Show Less/i);
  const listItem = screen.getByText(/Near You/i);
  fireEvent.click(listItem);
  expect(showButtonName).toBeInTheDocument();
  expect(listItem).toHaveClass('active');
});
