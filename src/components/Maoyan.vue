<template>
  <div class="maoyan">
    <div class="maoyan-bar">
      <ul>
        <li class="bianziti">猫眼电影</li>
        <li @mouseenter="mouse()">正在热映</li>
        <li @mouseenter="mouse1()">即将上映</li>
        <div class="kailong" :style="sanjiao"></div>
      </ul>
    </div>
    <div class="maoyan-bot">
      <ul>
        <li v-for="(item, index) in maoList" :key="index">
          <img :src="item.image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sanjiao: {
        "margin-left": "85px",
      },
      sanjiao1: {
        "margin-left": "85px",
      },
      sanjiao2: {
        "margin-left": "165px",
      },
      maoList3: [
        {
          image: require("../assets/image/maoyan1.jpg"),
        },
        {
          image: require("../assets/image/maoyan2.jpg"),
        },
        {
          image: require("../assets/image/maoyan3.jpg"),
        },
        {
          image: require("../assets/image/maoyan4.jpg"),
        },
        {
          image: require("../assets/image/maoyan5.jpg"),
        },
      ],
      maoList: [
        {
          image: require("../assets/image/maoyan1.jpg"),
        },
        {
          image: require("../assets/image/maoyan2.jpg"),
        },
        {
          image: require("../assets/image/maoyan3.jpg"),
        },
        {
          image: require("../assets/image/maoyan4.jpg"),
        },
        {
          image: require("../assets/image/maoyan5.jpg"),
        },
      ],
      maoList2: [
        {
          image: require("../assets/image/maoyan6.jpg"),
        },
        {
          image: require("../assets/image/maoyan7.jpg"),
        },
        {
          image: require("../assets/image/maoyan8.jpg"),
        },
        {
          image: require("../assets/image/maoyan9.jpg"),
        },
        {
          image: require("../assets/image/maoyan10.jpg"),
        },
      ],
    };
  },
  methods: {
    mouse1() {
      console.log("进入 悬停区域");
      this.maoList = this.maoList2;
      this.sanjiao = this.sanjiao2;
    },
    mouse() {
      console.log("进入 悬停区域");
      this.maoList = this.maoList3;
      this.sanjiao = this.sanjiao1;
    },
  },
  created() {
    // this.mouse();
    // this.mouse1();
  },
};
</script>

<style>
@import "../assets/css/maoyan.css";
</style>