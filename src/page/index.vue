<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="recomment"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="hotel"/>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="24">
        <m-container/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container/>
      </el-col>
    </el-row>-->
  </div>
</template>
<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import MContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        class: "iStyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      recomment: {
        class: "youhui",
        title: "狠优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "free"
          }
        ]
      },
      hotel:{
        class:"hotel",
        title:"推荐民宿",
        list:[
          {
            text: "天津",
            tab: "tianjin"
          },
          {
            text: "济南",
            tab: "jinan"
          },
          {
            text: "大连",
            tab: "dalian"
          },
          {
            text: "太原",
            tab: "taiyuan"
          },
          {
            text: "石家庄",
            tab: "shijiazhuang"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    MContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
</style>

