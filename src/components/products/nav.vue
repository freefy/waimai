<template>
  <div class="s-nav">
    <dl>
      <dt>猜你喜欢</dt>
      <dd v-for="item in commentList" :key="item.itemid">
        <p>
          <img :src="item.imgUrl" alt>
        </p>
        <p>{{item.title}}</p>
        <p>
          <el-rate v-model="item.score" disabled show-score text-color="#ff9900"></el-rate>
          <span>{{item.commentNum}}个评价</span>
        </p>
        <p>{{item.areaName}}</p>
        <p>
          ￥{{item.lowPrice}}
          <span>起</span>
        </p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentList: [
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/merchantpic/67d8fac512b9bcb10f39d5fb325707f6338824.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        }
      ]
    };
  }
};
</script>

