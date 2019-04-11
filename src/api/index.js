import axios from '@/axios.js';

var api = {
  searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params);
  },
  getSearchWord(params) {
    return axios.get("/api/meituan/header/search.json", params)
  },
  getMenuList(params) {
    return axios.get("/api/meituan/index/nav.json", params)
  },
  resultsByKeywords(params) {
    return axios.get("/api/meituan/index/resultsByKeywords.json", params)
  },
  getGoodList(params) {
    return axios.get("/api/meituan/list/goodsList.json", params)
  },
  getClassify(params) {
    return axios.get("/api/meituan/list/classify.json", params)
  },
  getAreaList(params) {
    return axios.get("/api/meituan/list/areaList.json", params)
  },
  getHotCity() {
    return axios.get("/api/meituan/city/hot.json")
  },
  getRecentCity() {
    return axios.get("/api/meituan/city/recents.json")
  },
  getProvince() {
    return axios.get("/api/meituan/city/province.json")
  },
}
export default api
