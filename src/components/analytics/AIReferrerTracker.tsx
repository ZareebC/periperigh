'use client';

import { useEffect } from 'react';
import { trackAIReferral } from '@/lib/analytics';

const AI_REFERRERS: Record<string, string> = {
  'chatgpt.com': 'ChatGPT',
  'chat.openai.com': 'ChatGPT',
  'gemini.google.com': 'Gemini',
  'claude.ai': 'Claude',
  'perplexity.ai': 'Perplexity',
  'bing.com': 'Copilot',
  'copilot.microsoft.com': 'Copilot',
};

export default function AIReferrerTracker() {
  useEffect(() => {
    try {
      const referrer = document.referrer;
      if (!referrer) return;

      const referrerHost = new URL(referrer).hostname;

      for (const [domain, source] of Object.entries(AI_REFERRERS)) {
        if (referrerHost.includes(domain)) {
          trackAIReferral(source);
          // Also store in sessionStorage for attribution across pages
          sessionStorage.setItem('ai_referrer', source);
          break;
        }
      }
    } catch {
      // Silently fail if referrer parsing fails
    }
  }, []);

  return null;
}
