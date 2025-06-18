require('@testing-library/jest-dom'); 

// Mock IntersectionObserver for jsdom
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

// Mock scrollTo for all elements in jsdom
if (!Element.prototype.scrollTo) {
  Element.prototype.scrollTo = function() {};
} 