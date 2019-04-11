<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.id">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
import MSelect from "./select.vue";
export default {
  data() {
    return {
      // classicList: [
      //   {
      //     title: "美食",
      //     type: "food",
      //     subList: [
      //       {
      //         name: "日本菜",
      //         id: "Japan"
      //       }
      //     ]
      //   },
      //   {
      //     title: "酒店住宿",
      //     type: "hotal",
      //     subList: [
      //       {
      //         name: "温泉酒店",
      //         id: "hot_spring"
      //       }
      //     ]
      //   }
      // ],
      classicList: [],
      areaList: [
        /*{
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        }*/
      ]
    };
  },
  created() {
    api.getClassify().then(res => {
      console.log(res.data);
      this.classicList = res.data.data;
    });
    api.getAreaList().then(res => {
      console.log(res);
      this.areaList = res.data.data;
    });
  },
  components: {
    MSelect
  }
};
</script>
<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>
