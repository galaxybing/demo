<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <!-- <transition name="slide-fade" mode="out-in"> -->
        <router-view></router-view>
      <!-- </transition> -->
      <tabbar v-if="!loginViewShow" slot="bottom">
        <tabbar-item selected link="/">
          <img slot="icon" src="./assets/logo.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/question">
          <img slot="icon" src="./assets/logo.png">
          <span slot="label">发表</span>
        </tabbar-item>
        <tabbar-item show-dot link="/message">
          <img slot="icon" src="./assets/logo.png">
          <span slot="label">信息</span>
        </tabbar-item>
        <tabbar-item link="/profile">
          <img slot="icon" src="./assets/logo.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Tabbar, TabbarItem, Icon, ViewBox } from "vux";

export default {
  name: "app",
  components: {
    Tabbar,
    TabbarItem,
    Icon,
    ViewBox
  },
  data() {
    return {
      loginViewShow: false
    };
  },
  watch: {
    userId() {
      console.log("userId change");
    },
    $route(to, from) {
      if (!this.userId) {
        this.$route.name === "Home" ? "" : this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapState({
      userId: state => state.app.id
    })
  },
  action: {},
  methods: {
    validateLogin(index) {
      this.loginValidate().then(res => {
        if (res.success) {
          console.log(res);
        } else {
          this.$router.push("login");
        }
      });
    },
    ...mapActions(["loginValidate", "getMessageNoRead"])
  },
  mounted() {},
  created() {
    this.getMessageNoRead().then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

html,
body {
  height: 100%;
  width: 100%;
  font-size: 16px;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 40rem;
  background-color: #fff;
}
ul {
  list-style: none;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
