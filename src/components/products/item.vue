<template>
  <div class="s-item">
    <dt>
      <img :src="meta.image" alt="图片">
    </dt>
    <dd>
      <h3>
        <router-link :to="{name:'productDetail'}">{{meta.title}}</router-link>
      </h3>
      <p>
        <el-rate v-model="meta.score" disabled show-score text-color="#ff9900"></el-rate>
        <span v-if="meta.score >4.5">很好</span>
        <span v-else-if="meta.score > 4">好</span>
        <span v-else-if="meta.score > 3.5">不错</span>
        <span v-else-if="meta.score > 3">不错</span>
        <span v-else>很差</span>
        <span class>{{meta.score}}分</span>
        <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(v,i) in meta.tab" :key="i">{{v+(meta.tab.length-1 > i ?'|':'')}}</span>
        </span>
        <span class="s-item-addr">{{meta.address}}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
          </a>
          查看地图
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{meta.avgPrice}}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(item,index) in meta.dealItems.slice(0,2)" :key="index">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">￥{{item.counterPrice}}</span>
            <span class="deal-salee">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </div>
</template>
<script>
export default {
  props: ["meta"]
};
</script>
