import { render, screen } from '@testing-library/react';
import ModToolsPage from '../../../pages/ModToolsPage/ModToolsPage';

describe('Test for Results Cards', () => {
  // People Card
  it('Test for UI of the mod tools page', () => {
    render(<ModToolsPage />);
    const breadCrumb = screen.getByTestId(/bread-crumb/i);
    const sidebar = screen.getByTestId(/mod-tools-sidebar/i);
    const modToolContent = screen.getByTestId(/mod-tool-item/i);

    expect(breadCrumb).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(modToolContent).toBeInTheDocument();
  });
});
