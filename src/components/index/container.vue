<template>
  <div class="m-istyle">
    <dl @mouseover="istyleOver" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :class="{active:kind==item.tab}"
        :data-type="item.tab"
        :key="index"
      >{{item.text}}</dd>
      <!-- <dt>有格调</dt>
      <dd :class="{active:kind=='all'}" data-type="all">全部</dd>
      <dd :class="{active:kind=='food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active:kind=='spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active:kind=='movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active:kind=='travel'}" data-type="travel">品质出游</dd>-->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img class="image" :src="item.image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价{{item.price_info.old_price}}</span> -->
              <!-- <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="price-symbol numfont">抢光了</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price numfont">{{item.price_info.avg_price}}</span>
              <span class="units">/{{item.price_info.units}}均</span>
            </div>-->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultsData: {}
    };
  },
  created() {
    api.resultsByKeywords().then(res => {
      console.log(res);
      this.resultsData = res.data.data;
    });
  },
  props: ["nav"],
  methods: {
    istyleOver(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取数据，ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

