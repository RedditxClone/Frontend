import { render, screen } from '@testing-library/react';
import CategoriesPage from '../../../pages/CategoriesPage/CategoriesPage';
import pic from '../../../assets/Images/1166721.jpg';

it('Test for rendering the title', () => {
  render(
    <CategoriesPage
      communities={[]}
      buttonText=" "
      buttons={[]}
      pic={pic}
    />
  );
  const titleElement = screen.getByText(
    /Today&#8217;s Top Growing Communities/i
  );
  const pageDescription = screen.getByText(
    /Browse Reddit&#8217;s top growing communities. Find the topcommunities in your favorite category./i
  );
  expect(titleElement).toBeInTheDocument();
  expect(pageDescription).toBeInTheDocument();
});

it('Test for rendering the home community card', () => {
  render(
    <CategoriesPage
      communities={[]}
      buttonText=" "
      buttons={[]}
      pic={pic}
    />
  );
  const cards = screen.getAllByTestId('HomeCard');
  expect(cards.length).toBe(3);
});

it('Test for rendering the Alphabetic card', () => {
  render(
    <CategoriesPage
      communities={[]}
      buttonText=" "
      buttons={[]}
      pic={pic}
    />
  );
  const alpacard = screen.getByTestId('AlphaCard');
  expect(alpacard).toBeInTheDocument();
});
it('Test for rendering the SideList', () => {
  render(
    <CategoriesPage
      communities={[]}
      buttonText=""
      buttons={[]}
      pic=""
    />
  );
  const sideList = screen.getByTestId('SideList');
  expect(sideList).toBeInTheDocument();
});
