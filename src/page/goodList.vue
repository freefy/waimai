<template>
  <div class="page-product">
    <el-row>
      <crumbs/>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy/>
        </el-row>
        <el-row>
          <List/>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <img
            src="https://p0.meituan.net/travel/33d40ddf44646473bace41b7a018ad8c347963.jpg@275w_156h_1e_1c"
            alt
          >
        </el-row>
        <el-row>
          <s-nav/>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Crumbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import SNav from "@/components/products/nav.vue";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    SNav
  }
};
</script>

