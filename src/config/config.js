var host = 'http://oms.reedhuabo.com';

let config = {
  API: {
    index: 'api/main/index',
    raidersClumn: 'api/raiders/raiderclassindex',
    indexRaiders: 'api/raiders/raiderclassdeatile'
  },
  getApi(api) {
    return `${host}/` +this.API[api];
  }
};

export default config;
