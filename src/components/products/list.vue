<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productsList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from "./item.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productsList: []
    };
  },
  components: {
    Item
  },
  created() {
    api.getGoodList().then(res => {
      console.log(res);
      this.productsList = res.data.data;
    });
  }
};
</script>


