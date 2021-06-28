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
          <span>{{ $store.state.erd1 }}</span>
          <span>{{ $store.state.zhuce2 }}</span>
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
    <div class="city-q">
      <div class="city-content">
        <div class="cent-t">
          <div class="content-left">
            <img src="../assets/image/QQ截图20210414152139.png" alt="" />
          </div>
          <div class="content-cent">
            <input
              class="search"
              @click=""
              type="text"
              placeholder="搜索商家或地点"
            />
            <button class="search-btn">
              <span class="el-icon-search"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="city-bot">
      <!-- 省份选择 -->
      <div class="city-sheng">
        <h3 class="title-h">按省份选择：</h3>
        <div class="sheng-s">
          <select class="sheng" v-model="prov" @click="undataCity()">
            <option value="" style="display: none" disabled selected>省</option>
            <option v-for="(v, i) in provinceData" :key="i">
              <li>{{ v.provinceName }}</li>
            </option>
          </select>
          <select class="shi" :disabled="isdis">
            <option value="" style="display: none" disabled selected>市</option>
            <option v-for="(v, i) in cityData" :key="i">
              {{ v.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="city-hot">
        <h3>热门城市：</h3>
        <ul>
          <li v-for="item in hotList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <!-- 最近访问 -->
      <div class="city-hot">
        <h3>最近访问：</h3>
        <ul>
          <li v-for="item in fangCity" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <!-- 拼音首字母选择 -->
      <div class="zimu-x">
        <h3>拼音首字母选择：</h3>
        <ul>
          <li v-for="item in zimuList" :key="item.id">
            <a :href="'#City-' + item">{{ item }}</a>
          </li>
        </ul>
        <div class="zimu-list">
          <div v-for="(item, i) in zimuList" :key="i">
            <p :id="'City-' + item">{{ item }}</p>
            <div class="zimulis">
              <ul>
                <li v-for="(a, index) in uio(item)" :key="index">
                  <a href="#" @click="handeleCityClick($event)" ref="name">{{
                    a
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [],
      fangList: [],
      zimuList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      prov: "",
      value: "",
      // input2: "",
      isdis: true,
      provinceData: [],
      cityData: [], //市的数组对象
      // 首字母
      block: [],
      zimu1: [],
      zimu2: [],
      zimu3: [],
      zimu4: [],
    };
  },
  mounted() {},
  methods: {
    // 省
    undataCity() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/city/province.json", {
          params: {
            appkey: "hyy123_1589431078998",
          },
        })
        .then((res) => {
          this.provinceData = res.data.data;
          // 命名this
          var that = this;
          // 循环provinceData
          that.provinceData.forEach(function (item, index) {
            // 判断provinceName等于v-model的值是
            if (item.provinceName == that.prov) {
              // 将二级中的传到cityData中
              that.cityData = item.cityInfoList;
              // 当选择省之后 市取消禁用
              that.isdis = false;
            }
          });
        });
    },
    //热门城市
    chooseCity() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/city/hot.json", {
          params: {
            appkey: "hyy123_1589431078998",
          },
        })
        .then((res) => {
          this.hotList = res.data.data;
        });
    },
    // 最近访问
    fangCity() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/city/recents.json", {
          params: {
            appkey: "hyy123_1589431078998",
          },
        })
        .then((res) => {
          this.fangCity = res.data.data;
        });
    },
    uio(item) {
      return this.zimu4
        .filter(function (res) {
          return res.firstChar == item;
        })
        .map((a) => {
          this.$store.state.chengshi = this.value;

          return a.name;
        });
    },
    handeleCityClick(e) {
      // this.$store.dispatch("changeCity", city);
      // this.$refs.name.style.color = "red";
      this.$store.state.city = e.currentTarget.text;
      this.$router.push("./");
    },
  },
  created() {
    this.undataCity();
    this.chooseCity();
    this.fangCity();
    // 下面
    this.$http
      .get("http://open.duyiedu.com/api/meituan/city/province.json", {
        params: {
          appkey: "hyy123_1589431078998",
        },
      })
      .then((res) => {
        this.zimu1 = res.data.data;
        // console.log(this.zimu1);
        // 省列表
        for (var i = 0; i < this.zimu1.length; i++) {
          this.zimu2.push(this.zimu1[i].provinceName);
        }
        // 省列表下的cityInfoList
        for (var i = 0; i < this.zimu1.length; i++) {
          this.zimu3.push(this.zimu1[i].cityInfoList);
        }
        console.log(this.zimu3);
        for (var i = 0; i < this.zimu3.length; i++) {
          for (var j = 0; j < this.zimu3[i].length; j++) {
            this.zimu4.push(this.zimu3[i][j]);
          }
          // console.log(this.zimu4);
        }
      });
  },
};
</script>

<style>
@import url("../assets/css/city.css");
</style>