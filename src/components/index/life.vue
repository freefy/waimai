<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <a href="#" class="takeout">美团外卖</a>
        </li>
        <li>
          <a href="#">猫眼电影</a>
        </li>
        <li>
          <a href="#">美团酒店</a>
        </li>
        <li>
          <a href="#" class="apartment">民宿／公寓</a>
        </li>
        <li>
          <a href="#" class="business">商家入驻</a>
        </li>
        <li>
          <a href="#">美团公益</a>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <m-slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>
          <p class="m-life-login-name">Hi!你好</p>
          <p>
            <router-link to="{name:'regester'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="{name:'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt>
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MSlider from "@/components/index/slider.vue";
export default {
  components: {
    MSlider
  }
};
</script>
<style>
</style>
