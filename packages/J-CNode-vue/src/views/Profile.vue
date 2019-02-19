<template>
  <div>
    <div class="userInfoBox flex-center">
      <div class="boxAvatar">
        <img :src="avatar_url" alt="头像" class="avatarImg">
        <div class="avatarName">{{loginname}}</div>
      </div>
    </div>
    <div>
      <group>
        <cell is-link title="清除登录信息" inline-desc="cleanUp userInfo" @click.native="handleClean"></cell>
      </group>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Group, Cell } from "vux";

export default {
  name: "profile",
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: "profile"
    };
  },
  computed: {
    ...mapState({
      avatar_url: state => state.app.avatar_url,
      loginname: state => state.app.loginname
    })
  },
  methods: {
    handleClean() {
      this.cleanLogin().then(res => {
        console.log(res);
      })
    },
    ...mapActions(["cleanLogin"])
  },
  created(){
    console.log(`profile created`);
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userInfoBox {
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  background-color: rgb(33, 33, 33);
  color: white;
  text-align: center;
}
.avatarImg {
  width: 5rem;
  border-radius: 100%;
  border: 2px solid #eee;
}
</style>
