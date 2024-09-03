const envConfig = {
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  IS_DEVELOPMENT: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
  WEB_URL: process.env.WEB_URL ?? 'https://h.omi.me',
  GLEAP_APP_ID: process.env.GLEAP_APP_ID,
};

export default envConfig;
