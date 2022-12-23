/* eslint-disable operator-linebreak */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CreatePost from '../../../pages/CreatePost/CreatePost';
import { Store } from '../../../store/Store';

describe('UI Test for CreatePost page ', () => {
  it('Test rendering the right part components', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <CreatePost />
        </Provider>
      </BrowserRouter>
    );
    const rule1 = screen.getByText(/Remember the human/i);
    const rule2 = screen.getByText(/Behave like you would in real life/i);
    const rule3 = screen.getByText(/Look for the original source of content/i);
    const rule4 = screen.getByText(/Search for duplicates before posting/i);
    const rule5 = screen.getByText(/Read the community’s rules/i);
    expect(rule1).toBeInTheDocument();
    expect(rule2).toBeInTheDocument();
    expect(rule3).toBeInTheDocument();
    expect(rule4).toBeInTheDocument();
    expect(rule5).toBeInTheDocument();
  });

  it('Test rendering the Left part components', () => {
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <CreatePost />
        </Provider>
      </BrowserRouter>
    );
    const chooseCommunityInput =
      screen.getByPlaceholderText(/Choose Community/i);
    const titleInput = screen.getByPlaceholderText(/Title/i);
    const richEditor = screen.getByText(/Text\(optional\)/i);
    const imagesvideos = screen.getByText(/images & videos/i);
    const link = screen.getByText(/link/i);
    const spoiler = screen.getByText(/spoiler/i);
    const nsfw = screen.getByText(/nfsw/i);
    const flair = screen.getByText(/flair/i);
    expect(chooseCommunityInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(richEditor).toBeInTheDocument();
    expect(imagesvideos).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(flair).toBeInTheDocument();
    expect(nsfw).toBeInTheDocument();
    expect(spoiler).toBeInTheDocument();
  });
});
