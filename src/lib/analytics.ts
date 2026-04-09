// GA4 event tracking utilities
// These fire custom events that can be tracked in Google Analytics

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackMenuView(location: string) {
  trackEvent('menu_view', { location });
}

export function trackOrderClick(platform: string, location: string) {
  trackEvent('order_click', { platform, location });
}

export function trackPhoneTap(location: string) {
  trackEvent('phone_tap', { location });
}

export function trackContactFormSubmit() {
  trackEvent('contact_form_submit');
}

export function trackDirectionsClick(location: string) {
  trackEvent('directions_click', { location });
}

export function trackAIReferral(source: string) {
  trackEvent('ai_referral', { ai_source: source });
}
