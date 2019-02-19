<template>
  <div>
    <div class="loginTitle flex-center" style="margin-top: 2rem">登录</div>
    <div class="loginInput flex-center" style="margin-top: 2rem">
      <group style="width: 90%">
        <x-input placeholder="accessToken" v-model="accessToken"></x-input>
        <x-button type="primary" style="margin-top: 2rem" @click.native="loginHandle">登录</x-button>
      </group>
    </div>
    <div class="loginInfo flex-center" v-if="avatar_url && loginname" style="justify-content: space-around;margin-top: 2rem">
      <img style="width: 2.5rem;border-radius: 100%" :src="avatar_url" alt="头像">
      <div>{{loginname}}</div>
    </div>
    <div class="loginTip" style="text-align: center;margin-top: 2rem">
      <p>获取 accessToken 的途径</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Group, XInput, XButton } from "vux";

export default {
  components: {
    XInput,
    Group,
    XButton
  },
  name: "login",
  data() {
    return {
      msg: "login"
    };
  },
  methods: {
    loginHandle: function(e) {
      console.log(e);
      this.$vux.loading.show();
      this.validateAccessToken().then(res => {
        this.$vux.loading.hide();
        this.$router.push("/");
        console.log();
      });
    },
    ...mapActions(["handleLogin", "validateAccessToken"])
  },
  computed: {
    accessToken: {
      get() {
        return this.$store.state.app.accessToken;
      },
      set(newVal) {
        this.$store.state.app.accessToken = newVal;
      }
    },
    ...mapState({
      avatar_url: state => state.app.avatar_url,
      loginname: state => state.app.loginname
    })
    // ...mapState({
    //   accessToken: {
    //     get: function() {
    //       return "123";
    //     },
    //     set: function() {
    //       return state.app.accessToken;
    //     }
    //   }
    // })
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginTitle {
  font-size: 3rem;
}
</style>
