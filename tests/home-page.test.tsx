import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Home from '@/app/page';
import { LanguageProvider } from '@/contexts/language-context';

describe('Home Page', () => {
  it('renders without crashing and shows key sections', () => {
    render(
      <LanguageProvider initialLanguage="en">
        <Home />
      </LanguageProvider>
    );
    // Check for header
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    // Check for main content
    expect(screen.getByRole('main')).toBeInTheDocument();
    // Check for footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    // Check for the main headline in the header only
    expect(within(header).getByText('You.v2')).toBeInTheDocument();
  });
}); 