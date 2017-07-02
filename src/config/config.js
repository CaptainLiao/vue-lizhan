var host = 'http://oms.reedhuabo.com';

let config = {
  API: {
    index: '/api/main/index',
    indexRaiders: 'api/raiders/raiderclassdeatile'
  },
  getApi(api) {
    return `${host}/` +this.API[api];
  }
};

export default config;
