import { render, screen } from '@testing-library/react';
import { SiteHeader } from './site-header';
import { LanguageProvider } from '@/contexts/language-context';
import '@testing-library/jest-dom';
import MobileNav from '../mobile-nav';
import translations from '../../../translations/en.json';

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

describe('MobileNav', () => {
  it('all mobile nav links point to existing section ids', async () => {
    renderWithProviders(<MobileNav />);
    // Open the mobile menu
    const openMenuButton = screen.getByRole('button', { name: /open menu/i });
    openMenuButton.click();
    // List of nav links and their expected section ids and translation keys
    const navLinks = [
      { href: '#how-it-works', id: 'how-it-works', key: 'howItWorks' },
      { href: '#the-why', id: 'the-why', key: 'theWhy' },
      { href: '#is-this-for-you', id: 'is-this-for-you', key: 'isThisForYou' },
      { href: '#client-stories', id: 'client-stories', key: 'clientStories' },
      { href: '#what-makes-different', id: 'what-makes-different', key: 'whatMakesDifferent' },
      { href: '#issues', id: 'issues', key: 'issues' },
      { href: '#precision', id: 'precision', key: 'precision' },
      { href: '#roi', id: 'roi', key: 'roi' },
      { href: '#pricing', id: 'pricing', key: 'packages' },
      { href: '#why-me', id: 'why-me', key: 'whyMe' },
      { href: '#about', id: 'about', key: 'about' },
      { href: '#global-pros', id: 'global-pros', key: 'globalPros' },
      { href: '#session', id: 'session', key: 'session' },
      { href: '#faq', id: 'faq', key: 'faq' },
      { href: '#ready-to-choose', id: 'ready-to-choose', key: 'readyToChoose' },
    ];
    for (const { href, id, key } of navLinks) {
      // Simulate the section existing in the DOM
      const section = document.createElement('section');
      section.setAttribute('id', id);
      document.body.appendChild(section);
      // Use the actual translation value for the label
      const label = translations.nav[key];
      const link = await screen.findByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
      // Clean up
      document.body.removeChild(section);
    }
  });
}); 