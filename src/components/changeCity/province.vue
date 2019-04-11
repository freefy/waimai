<template>
  <div class="m-province">
    <span class="name">按省份选择:
      <m-selete
        :list="provinceList"
        title="省份"
        :value="province"
        :showWrapperActive="provinceActive"
        @change_active="changeProvinceActive"
        @change="changeProvince"
      />
      <m-selete
        :list="cityList"
        title="城市"
        :value="city"
        :showWrapperActive="cityActive"
        @change_active="changeCityActive"
        @change="changeCity"
      />
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </span>
  </div>
</template>
<script>
import MSelete from "@/components/changeCity/selete";
import api from "@/api/index.js";
export default {
  data() {
    return {
      provinceList: [
        // [
        //   "山东",
        //   "甘肃",
        //   "江苏",
        //   "北京",
        //   "云南",
        //   "海南",
        //   "浙江",
        //   "上海",
        //   "天津",
        //   "陕西",
        //   "新疆",
        //   "贵州"
        // ],
        // [
        //   "安徽",
        //   "澳门",
        //   "湖南",
        //   "河北",
        //   "香港",
        //   "辽宁",
        //   "四川",
        //   "宁夏",
        //   "吉林",
        //   "福建",
        //   "湖北",
        //   "广东"
        // ],
        // [
        //   "重庆",
        //   "山西",
        //   "江西",
        //   "黑龙江",
        //   "青海",
        //   "河南",
        //   "台湾",
        //   "内蒙古",
        //   "西藏",
        //   "广西"
        // ]
      ],
      province: "省份",
      cityList: [["揭阳", "广州", "北京"], ["台湾", "内蒙古", "西藏", "广西"]],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["台湾", "内蒙古", "西藏", "广西"],
      searchWord: "",
      loading: false
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(e) {
      console.log(e);
    },
    changeProvince(item) {
      this.province = item;
    },
    changeCity(item) {
      this.city = item;
    }
  },
  components: {
    MSelete
  },
  created() {
    api.getProvince().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>

