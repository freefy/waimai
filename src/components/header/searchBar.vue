<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dd v-for="(item,index) in hotPlaceLists" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "@/axios.js";
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      // isHotPlace: "",
      // isSearchList: "",
      isFocus: false,
      hotPlaceLists: [], // ["京东第一温泉度假", "99旅馆连锁", "尚课快捷酒店"],
      searchList: [], //["火锅", "火锅自助餐", "火锅重庆"],
      suggestList: []
      // [
      //   "北京故宫博物院",
      //   "北京欢乐谷",
      //   "尚隐·泉都市生活馆",
      //   "故宫珍宝馆",
      //   "军都山滑雪场"
      // ]
    };
  },
  // created() {
  //   // axios.get("/api/meituan/header/searchHotWords.json").then(res => {
  //   //   console.log(res); //默认在当前服务器下，即http://localhost:8080/api/meituan/header/searchHotWords.json获取数据
  //   // });
  //   axios
  //     .get("/api/meituan/header/searchHotWords.json") //添加拦截器并配置基础域名
  //     .then(res => {
  //       console.log(res);
  //       // this.hotPlaceLists = res.data.data;
  //       // this.suggestList = res.data.data;
  //     });
  // },
  created() {
    api.searchHotWords().then(res => {
      console.log(res);
      this.hotPlaceLists = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      console.log(this.searchWord);
      let val = this.searchWord;
      api.getSearchWord().then(res => {
        console.log(res);
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>

