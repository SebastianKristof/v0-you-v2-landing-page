import { render, screen } from '@testing-library/react';
import { SiteHeader } from './site-header';
import { LanguageProvider } from '@/contexts/language-context';
import '@testing-library/jest-dom';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <LanguageProvider initialLanguage="en">
      {ui}
    </LanguageProvider>
  );
}

describe('SiteHeader', () => {
  it('renders all main navigation links', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByText(/How It Works/i)).toBeInTheDocument();
    expect(screen.getByText(/Cost Comparison/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
  });

  it('renders the Book Strategy Call button', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByRole('button', { name: /Book Strategy Call/i })).toBeInTheDocument();
  });

  it('renders the LanguageSwitcher', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByRole('button', { name: /EN \| RU|RU \| EN/ })).toBeInTheDocument();
  });

  it('all navigation links have correct hrefs', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByText(/How It Works/i).closest('a')).toHaveAttribute('href', '#how-it-works');
    expect(screen.getByText(/Cost Comparison/i).closest('a')).toHaveAttribute('href', '#roi');
    expect(screen.getByText(/About/i).closest('a')).toHaveAttribute('href', '#about');
    expect(screen.getByText(/FAQ/i).closest('a')).toHaveAttribute('href', '#faq');
  });
}); 