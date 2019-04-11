<template>
  <div class="m-header">
    <el-row>
      <!-- <top-bar></top-bar> 若中间要写东西用使用双标签，不写用单标签-->
      <top-bar/>
    </el-row>
    <el-row>
      <search-bar/>
    </el-row>
  </div>
</template>
<script>
import topBar from "./topBar.vue";
import searchBar from "./searchBar.vue";
export default {
  components: {
    topBar,
    searchBar
  }
};
</script>
