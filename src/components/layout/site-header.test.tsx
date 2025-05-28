import { render, screen } from '@testing-library/react';
import { SiteHeader } from './site-header';
import { LanguageProvider } from '@/contexts/language-context';

function renderWithProviders(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe('SiteHeader', () => {
  it('renders all main navigation links', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByText(/How It Works/i)).toBeInTheDocument();
    expect(screen.getByText(/Timeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Cost/i)).toBeInTheDocument();
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
}); 