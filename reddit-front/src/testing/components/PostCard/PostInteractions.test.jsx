// import { fireEvent, render, screen } from '@testing-library/react';
// import PostInteractions from '../../../components/PostCard/PostInteractions/PostInteractions';

// // Testing the rendering of the voting part
// test('Post Interactions component should be rendered', () => {
//   render(<PostInteractions />);
//   const element = screen.getByTestId(/test-post-interactions/i);
//   expect(element).toBeInTheDocument();
// });

// // Testing the share button
// test('Testing share button', () => {
//   render(<PostInteractions />);
//   const element = screen.getByTestId(/test-share-post/i);
//   expect(element).toBeInTheDocument();

//   // Firing the action of clicking of the share button
//   fireEvent.click(element);

//   // Making sure that the dropdown menu will be displayed
//   const interactionsDropdown = screen.getByTestId(
//     /test-interactions-dropdown/i
//   );
//   expect(interactionsDropdown).toBeInTheDocument();
// });

// // Testing the other button
// test('Testing more interactions button', () => {
//   render(<PostInteractions />);
//   const element = screen.getByTestId(/test-post-more-interactions/i);
//   expect(element).toBeInTheDocument();

//   // Firing the action of clicking of the share button
//   fireEvent.click(element);

//   // Making sure that the dropdown menu will be displayed
//   const moreInteractionsDropdown = screen.getByTestId(
//     /test-2-interactions-dropdown/i
//   );
//   expect(moreInteractionsDropdown).toBeInTheDocument();
// });
