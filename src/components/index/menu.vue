<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <!-- template后面不能加key值 -->
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v+'_'+i">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      /*menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点",
                "饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜鲁菜"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "food",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        },
        {
          title: "榛果民宿",
          icon: "homestay",
          children: [
            {
              title: "热门城市",
              children: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "大连"
              ]
            }
          ]
        },
        {
          title: "猫眼电影",
          icon: "movie",
          children: [
            {
              title: "热映电影",
              children: [
                "大黄蜂",
                "来电狂响",
                "海王",
                "蜘蛛侠：平行宇宙",
                "奎迪：英雄再起",
                "“大”人物",
                "龙猫",
                "四个春天",
                "白蛇：缘起",
                "命运之夜",
                "——天之杯：恶兆之花"
              ]
            },
            {
              title: "热门影院",
              children: [
                "耀莱成龙国际影城",
                "保利国际影城",
                "大地影院",
                "万达影城",
                "博纳国际影城",
                "CGV影城",
                "橙天嘉禾影城",
                "金逸影城",
                "中影国际影城",
                "新华国际影城"
              ]
            }
          ]
        },
        {
          title: "机票/火车票",
          icon: "airport",
          children: [
            {
              title: "机票",
              children: ["国内机票", "国际/港澳台机票"]
            },
            {
              title: "火车票",
              children: ["火车票"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        }
      ]*/
      menuList: []
    };
  },
  created() {
    api.getMenuList().then(res => {
      console.log(res);
      this.menuList = res.data.data;
    });
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      let self = this;
      this.timer = setTimeout(function() {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>
