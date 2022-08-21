export const KEY_API = '{key}';
export const PAYPAL_CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CILENT_ID ||
  'AcjSv1tmHo9WHQIsgEUhL1bUTzFynjahzhRcaGSG05Gthew_tS5sjlMC3PYCtDO6dYxjemfv5Q4qESM3';
export const API_URL = process.env.NEXT_PUBLIC_API;
export const API = {
  AUTH_PROFILE: '/auth/profile',
  REFRESH_TOKEN: '/auth/refresh-token',
  FORGET_PASSWORD: '/auth/forget-password',
  CATEGORIES_ALL: '/categories/get-all',
  CATEGORIES_BY_ID: '/product/by-category-id?categoryId=' + KEY_API,
  UTILS: '/utils',
  UTILS_BY_TYPE: '/utils/get-by-name?name=' + KEY_API,
  UTILS_INIT: '/utils/init',
  SHOPPING_CART: '/shopping-cart',
  SHOPPING_CART_BY_USER: '/shopping-cart/get-by-user',
  PROCESS_TO_CHECKOUT: '/order/process-to-checkout',
  DELETE_CART_ITME: '/shopping-cart',
  LOCATION: '/location/get-all',
  CREATE_ORDER: '/order/checkout',
  UPDATE_ORDER: '/order/checkout-process',
  PAYPAL: {
    CREATE_ORDER: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
  },
  CONTACT: '/contact',
  CONTACT_BY_ID: '/contact/get-by-id?id' + KEY_API,
  LOCATION: '/location/get-all',
  LOCATION_BY_ID: '/location/get-by-id?id=',
};

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
  SHOP: '/shop',
  PRODUCT_DETAIL: '/product/' + KEY_ROUTER,
  LOCATION: '/location/',
  PROFILE: '/profile',
  PROCESS_TO_CHECKOUT: '/process-to-checkout',
  ORDER_SUCCESS: 'order-success/',
  CONTACT: 'contact',
};
