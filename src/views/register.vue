<template>
  <div>
    <login-top Text="注册bilibili"> </login-top>
    <login-text
      label="姓名"
      style="margin: 4.167vw 0"
      rule="^.{6,16}$"
      placeholder="请输入姓名"
      @inputChange="(res) => (modal.name = res)"
    />
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="(res) => (modal.username = res)"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      type="password"
      @inputChange="(res) => (modal.password = res)"
    />
    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  data() {
    return {
      modal: {
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (rulg.test(this.modal.name) && rulg.test(this.modal.username) && rulg.test(this.modal.password)) {
        const res = await this.$http.post("/register",this.modal);
        this.$msg.success()
      } else {
        this.$msg.fail('格式不正确，请重新输入')
      }
    },
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
};
</script>

<style lang="less">
</style>