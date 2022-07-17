type API_PROPS = {
  product: string;
  order: string;
  import: string;
  bff: string;
  cart: string;
}

const API_PATHS: API_PROPS = {
  product: 'https://7f1t0szo2e.execute-api.eu-west-1.amazonaws.com/dev',
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
};

export default API_PATHS;
