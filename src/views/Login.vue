<template>
  <div class="log-heard">
    <div class="heard-login-bar">
      <ul>
        <li><img src="../assets/image/QQ截图20210414152139.png" alt="" /></li>
      </ul>
      <div class="heard-login-cen">
        <div class="login-cen-left">
          <ul>
            <li>
              <img
                src="../assets/image/登录页面.png"
                alt=""
                class="img-login"
              />
            </li>
          </ul>
        </div>
        <div class="login-cen-right">
          <input
            type="text"
            class="yonghu"
            placeholder="输入用户名"
            v-model="Name"
          />
          <input
            type="password"
            class="mima"
            placeholder="输入密码"
            v-model="psd"
          />
          <input type="button" value="登录" class="dengl" @click="login" />
          <p class="tishi">还没有账号？ <span @click="zhuce">免费注册</span></p>
        </div>
      </div>
      <div class="heard-login-fot">
        <hr />
        <ul>
          <li>关于美团<span>|</span></li>
          <li>加入我们<span>|</span></li>
          <li>商家入驻<span>|</span></li>
          <li>帮助中心<span>|</span></li>
          <li>美团手机版</li>
        </ul>
        <hr class="hr-login" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "",
      psd: "",
    };
  },
  methods: {
    zhuce() {
      this.$router.push({
        path: "/zhuce",
      });
    },
    login() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/login", {
          params: {
            userName: this.Name,
            password: this.psd,
            appkey: "wjn123_1618561164242",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.msg == "登录成功") {
            window.localStorage.setItem("uname", this.Name);
            this.$store.state.imgUrl1 = this.$store.state.imgUrl2;
            this.$store.state.erd = res.data.data;
            // 藏
            this.$store.state.ab = false;
            this.$router.push({
              path: "/",
            });
          }
        });
    },
  },
  created() {
    this.login();
  },
};
</script>

<style>
@import "../assets/css/loginyemian.css";
</style>