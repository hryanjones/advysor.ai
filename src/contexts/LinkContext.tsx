import 'react';
import { createContext, useContext, type ReactNode } from 'react';

// Define the shape of our links object
export interface AppLinks {
  chatGPT: {
    tryAdvysor: string;
  };
  youtube: {
    channel: string;
    subscribe: string;
    episodes: {
      startingOver: string;
    };
  };
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
    reddit: string;
  };
  contact: {
    email: string;
    support: string;
  };
  legal: {
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
  };
}

// Create the links object with all the URLs used across the app
const appLinks: AppLinks = {
  chatGPT: {
    tryAdvysor: 'https://chatgpt.com/g/g-68907db05d4081919d925e317b8f8f61-advysor-ai',
  },
  youtube: {
    channel: 'https://www.youtube.com/@advysoralex',
    subscribe: 'http://www.youtube.com/channel/UCg8l4vlHa7CbzT1AVeFNv8w?sub_confirmation=1',
    episodes: {
      startingOver: 'https://www.youtube.com/watch?v=qLfr3XLQmvw&list=PLPdtPFnMJ1V8WVrIDfp-W9wT5q3H9nBFA&index=4',
    },
  },
  social: {
    twitter: 'https://x.com/ADVYSORAI',
    linkedin: 'https://www.linkedin.com/company/advysorai/',
    instagram: 'https://www.instagram.com/advysor.ai/',
    reddit: 'https://www.reddit.com/r/ADVYSOR/',
  },
  contact: {
    email: 'mailto:contact@advysor.ai',
    support: 'mailto:support@advysor.ai',
  },
  legal: {
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms',
    cookiePolicy: '/cookie-policy',
  },
};

// Create the context
const LinkContext = createContext<AppLinks | undefined>(undefined);

// Create the provider component
interface LinkProviderProps {
  children: ReactNode;
}

export const LinkProvider: React.FC<LinkProviderProps> = ({ children }) => {
  return <LinkContext.Provider value={appLinks}>{children}</LinkContext.Provider>;
};

// Create a hook for using the links
export const useLinks = (): AppLinks => {
  const context = useContext(LinkContext);
  if (context === undefined) {
    throw new Error('useLinks must be used within a LinkProvider');
  }
  return context;
};
