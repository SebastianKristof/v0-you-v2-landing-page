// Simple analytics helper for CTA click tracking
export function trackEvent({ action, category, label, value }: { action: string; category?: string; label?: string; value?: number }) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
} 