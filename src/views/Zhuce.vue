<template>
  <div class="heard-zhuce">
    <div class="zhece-bar">
      <img src="../assets/image/QQ截图20210414152139.png" alt="" />
      <p class="bar-r-zc">
        已有账号?
        <span @click="yemian">登录</span>
      </p>
    </div>
    <div class="zhece-cen">
      <p class="zzz">
        用户名:<input type="text" class="one-zhece" v-model="name" /><br />
      </p>
      <p class="zzz">
        密码:<input type="password" class="one-zhuce1" v-model="pwd" /><br />
      </p>
      <p class="zzz">确认密码:<input type="password" v-model="refpwd" /></p>
      <input type="button" value="注册" class="zhuce" @click="ook" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pwd: "",
      refpwd: "",
    };
  },
  methods: {
    ook() {
      this.$http
        .get("http://open.duyiedu.com/api/meituan/register", {
          params: {
            userName: this.name,
            password: this.pwd,
            rePassword: this.refpwd,
            appkey: "wjn123_1618561164242",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg == "注册成功") {
            this.$router.push({
              path: "/login",
            });
          } else {
            console.log(res.data.msg);
          }
        });
    },
    yemian() {
      this.$router.push({
        path: "/login",
      });
    },
  },
  created() {
    this.ook();
  },
};
</script>

<style>
@import "../assets/css/zhuce.css";
</style>