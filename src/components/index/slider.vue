<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,index) in imgLists" :key="index">
        <a :href="item.src">
          <img :src="item.url" alt>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLists: [
        {
          src: "#/ss",
          url:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        },
        {
          src: "#/4s",
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          src: "#/5s",
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        }
      ]
    };
  }
};
</script>
