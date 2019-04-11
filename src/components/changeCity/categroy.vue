<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl
      v-for="(item,index) in cityGroup"
      :key="index"
      class="m-categroy-section"
      :id="'city-'+index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: null
    };
  },
  created() {
    var data = [
      {
        id: 1,
        name: "安庆",
        pinyin: "aq",
        rank: "B",
        firstChar: "a"
      },
      {
        id: 10,
        name: "安阳",
        pinyin: "ay",
        rank: "B",
        firstChar: "a"
      },
      {
        id: 5,
        name: "北京",
        pinyin: "bj",
        rank: "A",
        firstChar: "b"
      },
      {
        id: 2,
        name: "杭州",
        pinyin: "hz",
        rank: "A",
        firstChar: "h"
      }
    ];
    var obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityGroup = obj;
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>

