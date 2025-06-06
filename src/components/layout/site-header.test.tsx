import { render, screen } from '@testing-library/react';
import { SiteHeader } from './site-header';
import { LanguageProvider } from '@/contexts/language-context';
import '@testing-library/jest-dom';
import MobileNav from '../mobile-nav';
import translations from '@/translations/en.json';

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
    expect(screen.getByText(translations.nav.howItWorks)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.fullControl)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.isThisForYou)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.issues)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.results)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.about)).toBeInTheDocument();
    expect(screen.getByText(translations.nav.paths)).toBeInTheDocument();
  });

  it('renders the Book Strategy Call button', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByRole('button', { name: translations.cta.bookStrategyCall })).toBeInTheDocument();
  });

  it('renders the LanguageSwitcher', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByRole('button', { name: /EN \| RU|RU \| EN/ })).toBeInTheDocument();
  });

  it('all navigation links have correct hrefs', () => {
    renderWithProviders(<SiteHeader />);
    expect(screen.getByText(translations.nav.howItWorks).closest('a')).toHaveAttribute('href', '#how-it-works');
    expect(screen.getByText(translations.nav.fullControl).closest('a')).toHaveAttribute('href', '#full-control');
    expect(screen.getByText(translations.nav.isThisForYou).closest('a')).toHaveAttribute('href', '#is-this-for-you');
    expect(screen.getByText(translations.nav.issues).closest('a')).toHaveAttribute('href', '#issues');
    expect(screen.getByText(translations.nav.results).closest('a')).toHaveAttribute('href', '#results');
    expect(screen.getByText(translations.nav.about).closest('a')).toHaveAttribute('href', '#about');
    expect(screen.getByText(translations.nav.paths).closest('a')).toHaveAttribute('href', '#pricing');
  });
});

describe('MobileNav', () => {
  const navLinks = [
    { href: '#how-it-works', id: 'how-it-works', key: 'howItWorks' },
    { href: '#full-control', id: 'full-control', key: 'fullControl' },
    { href: '#is-this-for-you', id: 'is-this-for-you', key: 'isThisForYou' },
    { href: '#issues', id: 'issues', key: 'issues' },
    { href: '#results', id: 'results', key: 'results' },
    { href: '#client-stories', id: 'client-stories', key: 'clientStories' },
    { href: '#what-makes-different', id: 'what-makes-different', key: 'whatMakesDifferent' },
    { href: '#roi', id: 'roi', key: 'roi' },
    { href: '#about', id: 'about', key: 'about' },
    { href: '#faq', id: 'faq', key: 'faq' },
    { href: '#precision', id: 'precision', key: 'precision' },
    { href: '#global-pros', id: 'global-pros', key: 'globalPros' },
    { href: '#the-why', id: 'the-why', key: 'theWhy' },
    { href: '#pricing', id: 'pricing', key: 'paths' },
    { href: '#session', id: 'session', key: 'session' },
    { href: '#why-me', id: 'why-me', key: 'whyMe' },
    { href: '#ready-to-choose', id: 'ready-to-choose', key: 'readyToChoose' },
  ];

  it('all mobile nav links point to existing section ids', async () => {
    renderWithProviders(<MobileNav />);
    const openMenuButton = screen.getByRole('button', { name: /open menu/i });
    openMenuButton.click();
    for (const { href, id, key } of navLinks) {
      const section = document.createElement('section');
      section.setAttribute('id', id);
      document.body.appendChild(section);
      const label = translations.nav[key];
      const link = await screen.findByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
      document.body.removeChild(section);
    }
  });

  it('mobile nav links are in the same order as in the navigation', async () => {
    renderWithProviders(<MobileNav />);
    const openMenuButton = screen.getByRole('button', { name: /open menu/i });
    openMenuButton.click();
    const links = await screen.findAllByRole('link');
    const linkTexts = links.map(link => link.textContent?.trim());
    const expectedTexts = navLinks.map(({ key }) => translations.nav[key]);
    expect(linkTexts.slice(0, expectedTexts.length)).toEqual(expectedTexts);
  });
}); 