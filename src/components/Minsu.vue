<template>
  <div class="minsu">
    <div class="minsu-bar">
      <ul>
        <li class="bianziti">猫眼电影</li>
        <li @mouseenter="mouse()">天津</li>
        <li @mouseenter="mouse1()">太原</li>
        <div class="kailongx" :style="sanjiaox"></div>
      </ul>
    </div>
    <div class="minsu-bot">
      <ul>
        <li v-for="(item, index) in minsu" :key="index">
          <img :src="item.imgList" alt="" />
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
      sanjiaox: {
        "margin-left": "0px",
      },
      sanjiaos: {
        "margin-left": "48px",
      },
      sanjiaol: {
        "margin-left": "0px",
      },
      minsu: [],
      minList: [
        {
          imgList: require("../assets/image/minsu1.jpg"),
          title: "情侣主题民宿",
          price: 138,
        },
        {
          imgList: require("../assets/image/minsu2.jpg"),
          title:
            "【松果】N13爱丽丝花园 古文化街/天津之眼/天津站/海河/鼓楼/南市/大悦城/意大利景区/五大道/瓷房子/巨幕/地铁",
          price: 268,
        },
        {
          imgList: require("../assets/image/minsu3.jpg"),
          title:
            "【雅居·J30】天津站步行700m/海河步行7分钟/摩天轮/滨江道/古文化街/五大道/可做饭/长租优惠/整套房/大平米",
          price: 178,
        },
        {
          imgList: require("../assets/image/minsu4.jpg"),
          title: "大梨小居|济南大学附近精装LOFT自助入住每客消毒暖气新房",
          price: 168,
        },
        {
          imgList: require("../assets/image/minsu5.jpg"),
          title:
            "【西站民宿】新城领寓/近财富壹号/济南西站/齐鲁儿童医院/宜家迪卡侬/印象济南/国际会展中心/方特/3米落地窗/乳胶床垫",
          price: 108,
        },
        {
          imgList: require("../assets/image/minsu6.jpg"),
          title:
            "近济南西站，山东国际会展中心，腊山立交桥，和谐广场，临济南新西市场世购中心，经十路旁私享落地窗温馨公寓",
          price: 158,
        },
      ],
      minList1: [
        {
          imgList: require("../assets/image/minsu4.jpg"),
          title: "大梨小居|济南大学附近精装LOFT自助入住每客消毒暖气新房",
          price: 168,
        },
        {
          imgList: require("../assets/image/minsu5.jpg"),
          title:
            "【西站民宿】新城领寓/近财富壹号/济南西站/齐鲁儿童医院/宜家迪卡侬/印象济南/国际会展中心/方特/3米落地窗/乳胶床垫",
          price: 108,
        },
        {
          imgList: require("../assets/image/minsu6.jpg"),
          title:
            "近济南西站，山东国际会展中心，腊山立交桥，和谐广场，临济南新西市场世购中心，经十路旁私享落地窗温馨公寓",
          price: 158,
        },
        {
          imgList: require("../assets/image/minsu1.jpg"),
          title: "情侣主题民宿",
          price: 138,
        },
        {
          imgList: require("../assets/image/minsu2.jpg"),
          title:
            "【松果】N13爱丽丝花园 古文化街/天津之眼/天津站/海河/鼓楼/南市/大悦城/意大利景区/五大道/瓷房子/巨幕/地铁",
          price: 268,
        },
        {
          imgList: require("../assets/image/minsu3.jpg"),
          title:
            "【雅居·J30】天津站步行700m/海河步行7分钟/摩天轮/滨江道/古文化街/五大道/可做饭/长租优惠/整套房/大平米",
          price: 178,
        },
      ],
    };
  },
  methods: {
    mouse() {
      console.log("aaa");
      this.minsu = this.minList;
      this.sanjiaox = this.sanjiaol;
    },
    mouse1() {
      this.minsu = this.minList1;
      this.sanjiaox = this.sanjiaos;
    },
  },
  created() {
    this.minsu = this.minList;
  },
};
</script>

<style>
@import "../assets/css/minsu.css";
</style>