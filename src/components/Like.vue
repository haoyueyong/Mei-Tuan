<template>
  <div class="like">
    <div class="like-bar">
      <ul>
        <li class="bianziti">猫眼电影</li>
        <li>为你甄选最合适的</li>
        <div class="kailongxin"></div>
      </ul>
    </div>
    <div class="like-bot">
      <ul>
        <li v-for="(item, index) in likeList" :key="index">
          <img :src="item.images" alt="" />
          <p class="title-tt">{{ item.title }}</p>
          <p class="tbt">￥{{ item.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likeList: [
        {
          images: require("../assets/image/likeimg/1.jpg"),
          title: "晓寿司",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/2.jpg"),
          title: "卢月轩羊蝎子",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/3.jpg"),
          title: "屯老二农家铁锅炖（松园店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/4.jpg"),
          title: "便宜坊烤鸭店（富丰路店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/5.jpg"),
          title: "华莱士炸鸡汉堡（石油大学店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/6.jpg"),
          title: "味多美（紫金数码店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/7.jpg"),
          title: "分米鸡（喜隆多店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/8.jpg"),
          title: "铁木真自助城（西三旗店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/9.jpg"),
          title: "木北造型（亦庄上海沙龙店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/10.jpg"),
          title: "宽板凳老灶火锅（古城店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/11.jpg"),
          title: "老诚一锅（东大桥店）",
          price: 47.5,
        },
        {
          images: require("../assets/image/likeimg/12.jpg"),
          title: "巴蜀王婆大虾（莲花桥店）",
          price: 47.5,
        },
      ],
    };
  },
};
</script>

<style>
@import url("../assets/css/like.css");
</style>