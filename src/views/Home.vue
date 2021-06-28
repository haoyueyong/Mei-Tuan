<template>
  <div class="heard">
    <div class="header-bar">
      <div class="left">
        <span class="el-icon-location-information">{{
          $store.state.city
        }}</span>
        <router-link to="./city"><button>切换城市</button></router-link>
        <ul class="city">
          <li>[</li>
          <li>兴城</li>
          <li>锦州</li>
          <li>临海</li>
          <li>]</li>
        </ul>
        <div class="lo">
          <span @click="login">{{ $store.state.erd1 }}</span>
          <span @click="clear">{{ $store.state.zhuce2 }}</span>
        </div>
      </div>
      <div class="right">
        <ul class="nav-t">
          <li class="aaa">
            <a href="">我的美团</a>
            <div class="warp">
              <ul>
                <li>我的订单</li>
                <li>我的收藏</li>
                <li>抵用券</li>
                <li>账户设置</li>
              </ul>
            </div>
          </li>
          <li class="aaa"><a href="">手机APP</a></li>
          <li class="aaa">
            <a href="">商家中心</a>
            <div class="warp">
              <ul>
                <li>我的订单</li>
                <li>我的收藏</li>
                <li>抵用券</li>
                <li>账户设置</li>
              </ul>
            </div>
          </li>
          <li class="aaa">
            <a href="">美团规则</a>
            <div class="warp">
              <ul>
                <li>我的订单</li>
                <li>我的收藏</li>
                <li>抵用券</li>
                <li>账户设置</li>
              </ul>
            </div>
          </li>
          <li class="aaa">
            <a href="">网站导航</a>
            <div class="nav-bar">
              <div class="nav-warp">
                <ul>
                  <li>
                    酒店旅游
                    <div class="quan">
                      <div class="navtop">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                      <div class="navtop-t">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                      <div class="navtop-s">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    吃美食
                    <div class="quan-t">
                      <div class="navtop">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                      <div class="navtop-t">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    看电影
                    <div class="quan-s">
                      <div class="navtop">
                        <p>国际机票</p>
                        <p>经济酒店</p>
                        <p>公寓</p>
                        <p>国际机票</p>
                        <p>农家院</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p class="phon">手机应用</p>
                    <div class="quan-b">
                      <ul class="acc">
                        <li class="abb">
                          <img
                            src="../assets/image/QQ截图20210414143953.png"
                            alt=""
                          />
                        </li>
                        <li class="abb">
                          <img
                            src="../assets/image/QQ截图20210414144036.png"
                            alt=""
                          />
                        </li>
                        <li class="abb">
                          <img
                            src="../assets/image/QQ截图20210414144051.png"
                            alt=""
                          />
                        </li>
                        <li class="abb">
                          <img
                            src="../assets/image/QQ截图20210414144110.png"
                            alt=""
                          />
                        </li>
                        <li class="abb">
                          <img
                            src="../assets/image/QQ截图20210414144140.png"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-content">
      <div class="cent-t">
        <div class="content-left">
          <img src="../assets/image/QQ截图20210414152139.png" alt="" />
        </div>
        <div class="content-cent">
          <input
            class="search"
            @focus="getSeach"
            @blur="blurfns"
            type="text"
            v-model="value"
            placeholder="搜索商家或地点"
          />
          <button class="search-btn">
            <span class="el-icon-search"></span>
          </button>
          <div class="motai" v-show="motai1">
            <ul>
              <h3>最近搜索</h3>
              <li v-for="(item, i) in allList" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bom-t">
        <div class="content-bom">
          <ul>
            <li>美团外卖</li>
            <li>猫眼电影</li>
            <li>美团酒店</li>
            <li>民宿/公寓</li>
            <li>商家入驻</li>
            <li>美团公益</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="header-bottom">
        <div class="bottom-left">
          <ul>
            <h3>全部分类</h3>
            <li v-for="(item, index) in list" :key="index">
              <p class="ws"></p>
              {{ item.name }}
              <span class="sp">></span>
              <ul class="erji">
                <li v-for="(list, j) in item.items" :key="j">
                  <ul>
                    <li class="biao">{{ list.title }}</li>
                    <li class="gen">更多></li>
                    <hr class="hr" />
                  </ul>
                  <ul>
                    <li class="ziti5">
                      <!-- {{ list.items.items }} -->
                      {{ list.items[0] }}&nbsp {{ list.items[1] }}&nbsp
                      {{ list.items[2] }}&nbsp {{ list.items[3] }}&nbsp
                      {{ list.items[4] }}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bottom-right">
          <div class="right-top">
            <div class="top-one">
              <div class="block">
                <el-carousel height="240px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img
                      :src="item.imgUrl"
                      style="height: 100%; width: 100%"
                      alt=""
                    />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="top-two">
              <img
                src="../assets/image/1.jpg"
                style="height: 100%; width: 100%"
                alt=""
              />
            </div>
            <!-- 用户头像 -->
            <div class="top-the">
              <div class="hear-img">
                <img :src="this.$store.state.imgUrl1" alt="" />
              </div>
              <!-- 用户id显示 -->
              <p class="img-ziti">{{ $store.state.erd }}</p>
              <!-- 登录 -->
              <ul v-show="sb">
                <li>
                  <p class="img-log" @click="login">
                    {{ $store.state.lo }}
                  </p>
                </li>
                <li>
                  <p class="img-zc" @click="zhuce">
                    {{ $store.state.zc }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-fot">
            <div class="fot-one">
              <img
                src="../assets/image/2.png"
                alt=""
                style="height: 100%; width: 100%"
              />
            </div>
            <div class="fot-two">
              <img
                src="../assets/image/2.jpg"
                alt=""
                style="height: 100%; width: 100%"
              />
            </div>
            <div class="fot-the">
              <img
                src="../assets/image/3.jpg"
                alt=""
                style="height: 100%; width: 100%"
              />
            </div>
            <div class="fot-for">
              <div class="tu">
                <img
                  src="../assets/image/4.png"
                  alt=""
                  style="height: 65px; width: 65px"
                />
              </div>
              <p class="zt">
                <span>美团APP手机版</span>
              </p>
              <p class="ziti">
                <span>1元起</span>
                <span>吃喝玩乐</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 猫眼 -->
      <maoyan></maoyan>
      <!-- 民宿 -->
      <minsu></minsu>
      <!-- 猜你喜欢 -->
      <like></like>
    </div>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>

<script>
import Like from "../components/Like.vue";
import Maoyan from "../components/Maoyan";
import Minsu from "../components/Minsu";
import Foot from "../components/Foot";
export default {
  data() {
    return {
      list: [],
      allList: [],
      zuijList: [],
      value: "",
      motai1: true,
      sb: this.$store.state.ab,
      imgList: [
        {
          imgUrl: require("../assets/image/33ff80dc00f832d697f3e20fc030799560495.jpg"),
        },
        {
          imgUrl: require("../assets/image/826a5ed09dab49af658c34624d75491861404.jpg"),
        },
        {
          imgUrl: require("../assets/image/a97baf515235f4c5a2b1323a741e577185048.jpg"),
        },
        {
          imgUrl: require("../assets/image/daa73310c9e57454dc97f0146640fd9f69772.jpg"),
        },
        {
          imgUrl: require("../assets/image/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"),
        },
      ],
    };
  },
  components: {
    Maoyan,
    Minsu,
    Like,
    Foot,
  },
  methods: {
    getData() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/index/nav.json", {
          params: {
            appkey: "hyy123_1589431078998",
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.list = res.data.data;
          // console.log(this.list);
        });
    },
    getSeach() {
      this.$http
        .get("http://open.duyiedu.com//api/meituan/header/search.json", {
          params: {
            appkey: "hyy123_1589431078998",
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.allList = res.data.data.list;
          this.motai1 = !this.motai1;
        });
    },
    blurfns() {
      this.motai1 = false;
    },
    login() {
      this.$router.push({ path: "/login" });
    },
    zhuce() {
      this.$router.push({ path: "/zhuce" });
    },
    clear() {
      localStorage.clear();
      // this.$router.push({ path: "/" });
    },
  },
  created() {
    this.clear();
    this.getData();
    this.getSeach();
    if (window.localStorage.getItem("uanme")) {
      this.$store.state.erd = window.localStorage.getItem("uname");
    }
    if (this.$store.state.erd == null) {
      this.sb = true;
    } else {
      this.sb = false;
      this.$store.state.imgUrl1 = this.$store.state.imgUrl2;
      this.$store.state.erd1 = this.$store.state.erd;
      this.$store.state.zhuce2 = this.$store.state.tuichu;
    }
    console.log(this.$store.state.erd);
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
