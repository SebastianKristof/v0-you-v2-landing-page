# Test info

- Name: Landing Page Navigation and Actions >> all main menu and more links work in RU
- Location: /Users/seb/git_personal/v0-you-v2-landing-page/tests/nav-and-actions.spec.ts:27:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: /EN \| RU|RU \| EN/ })

    at /Users/seb/git_personal/v0-you-v2-landing-page/tests/nav-and-actions.spec.ts:31:71
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const menuLinks = [
   4 |   { selector: 'a[href="#how-it-works"]', id: 'how-it-works' },
   5 |   { selector: 'a[href="#is-this-for-you"]', id: 'is-this-for-you' },
   6 |   { selector: 'a[href="#pricing"]', id: 'pricing' },
   7 |   { selector: 'a[href="#about"]', id: 'about' },
   8 |   { selector: 'a[href="#faq"]', id: 'faq' },
   9 | ];
  10 |
  11 | const moreMenuLinks = [
  12 |   { text: 'The Why', id: 'the-why' },
  13 |   { text: 'Is This For You?', id: 'is-this-for-you' },
  14 |   { text: 'Client Stories', id: 'client-stories' },
  15 |   { text: 'What Makes You.v2 Different?', id: 'what-makes-different' },
  16 |   { text: 'Issues We Can Address', id: 'issues' },
  17 |   { text: 'Precision', id: 'precision' },
  18 |   { text: 'Why Work With Me', id: 'why-me' },
  19 |   { text: 'Global Pros', id: 'global-pros' },
  20 |   { text: 'What Happens in a Session?', id: 'session' },
  21 |   { text: 'Client Story', id: 'client-story' },
  22 |   { text: 'Ready to Choose Your Path?', id: 'ready-to-choose' },
  23 | ];
  24 |
  25 | test.describe('Landing Page Navigation and Actions', () => {
  26 |   for (const lang of ['en', 'ru']) {
  27 |     test(`all main menu and more links work in ${lang.toUpperCase()}`, async ({ page }) => {
  28 |       await page.goto('/');
  29 |       // Switch language if needed
  30 |       if (lang === 'ru') {
> 31 |         await page.getByRole('button', { name: /EN \| RU|RU \| EN/ }).click();
     |                                                                       ^ Error: locator.click: Test ended.
  32 |       }
  33 |       // Test main menu links
  34 |       for (const link of menuLinks) {
  35 |         const anchor = await page.$(link.selector);
  36 |         expect(anchor).not.toBeNull();
  37 |         await anchor!.click();
  38 |         await expect(page.locator(`#${link.id}`)).toBeVisible();
  39 |       }
  40 |       // Open More dropdown
  41 |       await page.getByRole('button', { name: /More/ }).click();
  42 |       for (const link of moreMenuLinks) {
  43 |         const menuItem = await page.getByRole('link', { name: link.text });
  44 |         await menuItem.click();
  45 |         await expect(page.locator(`#${link.id}`)).toBeVisible();
  46 |         // Reopen dropdown for next item
  47 |         await page.getByRole('button', { name: /More/ }).click();
  48 |       }
  49 |       // Test Book Strategy Call button
  50 |       const bookBtn = await page.getByRole('button', { name: /Book Strategy Call|Записаться на стратегическую сессию/ });
  51 |       expect(bookBtn).not.toBeNull();
  52 |       await bookBtn.click();
  53 |       // Should scroll to or show booking section
  54 |       await expect(page.locator('#pricing')).toBeVisible();
  55 |     });
  56 |   }
  57 | }); 
```