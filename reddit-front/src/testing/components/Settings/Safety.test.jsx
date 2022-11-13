import { render, screen } from '@testing-library/react';
import Safety from '../../../components/SafetyPrivacySettings/SafetyPrivacySettings';

describe('Test for Emails settings component', () => {
  it('Test rendring of the component', () => {
    render(<Safety />);
    const card = screen.getByTestId(/safety-settings-container/i);
    expect(card).toBeInTheDocument();
  });

  it('Test rendring of switches', () => {
    render(<Safety />);
    const sw = screen.getByTestId(/block-inp/i);
    expect(sw).toBeInTheDocument();
  });
});
