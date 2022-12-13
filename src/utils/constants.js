export const KEY_API = '{key}';
export const PAYPAL_CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CILENT_ID ||
  'AcjSv1tmHo9WHQIsgEUhL1bUTzFynjahzhRcaGSG05Gthew_tS5sjlMC3PYCtDO6dYxjemfv5Q4qESM3';
export const API_URL = process.env.NEXT_PUBLIC_API;
export const API = {
  AUTH_PROFILE: '/auth/login',
  AUTH_REFRESH_TOKEN: '/auth/refresh-token',
  AUTH_FORGET_PW: '/auth/forget-password',
  CATEGORY: {
    ALL: '/category/get-all',
    BY_ID: '/category/get-by-id=',
  },
  DETAIL_CATEGORY: {
    ALL: '/detail-category/get-all',
    BY_ID: '/detail-category/get-by-id?idCategory=',
  },
  AWARD: {
    ALL: '/award/get-all',
    BY_ID: '/award/get-by-id',
  },
};

export const IMAGE_SOURCE = process.env.NEXT_PUBLIC_IMAGE_SOURCE || '';

export const PROVIDER_SIGNIN = {
  CREDENTIAL: 'Credentials',
};
export const PAGES_SHOULD_HAVE_BG_IMG = ['/', '/home'];
export const KEY_ROUTER = '{key}';
export const SRC_IMG = {
  ETH: '/icons/eth.svg',
  NEAR: '/icons/near.svg',
  POLYGON: '/icons/polygon.svg',
  CELO: '/icons/celo.svg',
  AVAX: '/icons/avax.svg',
  SOLANA: '/icons/solana.svg',
  BNB: '/icons/bnb.svg',
};

export const HEADER_KEY = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
};

export const ROUTER = {
  ABOUT: 'about',
  CHAPTER: 'chapter/',
  PRODUCT_DETAIL: '/product/' + KEY_ROUTER,
  LOCATION: '/location/',
  PROFILE: '/profile',
  PROCESS_TO_CHECKOUT: '/process-to-checkout',
  ORDER_SUCCESS: 'order-success/',
  CONTACT: 'contact',
};

export const BODY_TYPE_REQUEST = {
  JSON: 'JSON',
  FORM_DATA: 'FORM_DATA',
};

export const ITEM_STATUS = {
  ACTIVATED: 'ACTIVATED',
  DEACTIVATED: 'DEACTIVATED',
};

export const TYPE_FORM = {
  LOGIN: 'login',
  FORGET_PW: 'forget-pw',
};

export const CLASS_CUSTOM = {
  CURSOL_CUSTOM: 'cursor-custom',
};

export const EXPIRED_TOKEN = 1; // minute
