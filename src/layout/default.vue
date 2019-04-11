<template>
  <div class="layout-default">
    <el-container>
      <!-- 头部和尾部固定不变，中间区域变化，router-view -->
      <el-header height>
        <my-header/>
      </el-header>
      <el-main>
        <router-view/>
        
      </el-main>
      <el-footer height>
        <my-footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
// h5中有header这个标签，因此不可以import header  。。。
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>

