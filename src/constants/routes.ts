interface Route {
  path: string;
  label: string;
}

interface RouteConfig {
  [key: string]: Route;
}

export const routes: RouteConfig = {
  home: {
    path: '/',
    label: 'Home',
  },
  mealPlanner: {
    path: '/meal-planner',
    label: 'Meal planner',
  },
  myRecipes: {
    path: '/my-recipes',
    label: 'My recipes',
  },
  explore: {
    path: '/explore',
    label: 'Explore',
  },
  profile: {
    path: '/profile',
    label: 'Profile',
  },
  accountSettings: {
    path: '/account-settings',
    label: 'Account settings',
  },
  helpCenter: {
    path: '/help-center',
    label: 'Help Center',
  },
  contact: {
    path: '/contact',
    label: 'Contact Us',
  },
  privacy: {
    path: '/privacy',
    label: 'Privacy Policy',
  },
  cookiePolicy: {
    path: '/cookie-policy',
    label: 'Cookie Policy',
  },
  terms: {
    path: '/terms',
    label: 'Terms of use',
  },
  signUp: {
    path: '/signup',
    label: 'Sign up',
  },
};
