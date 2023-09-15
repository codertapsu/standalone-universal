import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('An abstraction over global window object', {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);

    if (!defaultView) {
      throw new Error('Window is not available');
    }

    return defaultView;
  },
});

export const USER_AGENT = new InjectionToken<string>('User agent');
export const TEST = new InjectionToken<string>('Test server DI');
