<template>
  <div class="list-box">
    <tab class="fixed-tab">
      <tab-item v-for="(item,index) in typeArr" :key="index" @on-item-click="handleTabClick">{{item}}</tab-item>
    </tab>
    <div style="padding-top: 44px">
      <ul v-if="!loading">
        <li v-for="(item, index) in list" :key="index">
          <router-link class="list-item flex-center" style="justify-content: start;" :to="{ name: 'Detail', params: { id: item.id } }">
            <div class="flex-center">
              <img :src="item.author.avatar_url" :title="item.author.loginname" alt="用户头像" class="item-avatar" />
            </div>
            <ul class="item-info flex-center">
              <li class="item-title ellipsis">{{item.title}}</li>
              <!-- <li class="item-content ellipsis" v-html="item.content"></li> -->
              <!-- <li class="item-create ellipsis" v-html="item.create_at"></li> -->
              <li class="item-content ellipsis">
                <span>浏览{{item.visit_count}}</span>
                <span>/</span>
                <span>回复{{item.reply_count}}</span>
                <span v-if="item.reply_count" style="float: right">{{item.last_reply}}秒前回复</span>
              </li>
            </ul>
            <div class="flex-center item-type">
              <div class="item-badge">
                <div v-if="item.top" style="color: #F43E4E">{{item.topText}}</div>
                <div v-if="item.good" style="color: #80bd01">{{item.goodText}}</div>
                <div v-if="item.tab" style="color: #9C27B0">{{item.tabText}}</div>
              </div>
            </div>
          </router-link>
        </li>
      <infinite-loading @infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Tab, TabItem } from "vux";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Home",
  components: {
    InfiniteLoading,
    Tab,
    TabItem
  },
  data() {
    return {
      loading: true,
      selectTab: ""
    };
  },
  watch: {
    selectTab: function(val, oldVal) {
      this.dataInit({
        tab: val
      }).then(res => {
        this.$nextTick(function() {
          console.log("watch success");
          document.querySelector("#vux_view_box_body").scrollTop = 0;
        });
      });
    }
  },
  methods: {
    onInfinite() {
      this.$nextTick(function() {
        this.loadMore({
          tab: this.selectTab
        }).then(res => {
          this.$nextTick(function() {
            this.$refs.infiniteLoading.stateChanger.loaded();
          });
        });
      });
    },
    handleTabClick(params) {
      this.selectTab = this.typeArr[params];
    },
    ...mapActions(["dataInit", "loadMore"])
  },
  computed: {
    /**
     * mapState函数返回的是一个对象 想要让他和局部计算属性一起使用的话以前需要一个工具函数将两个对象合并为一个
     * 现在有了 ... 就可以很简单的将两个对象合并了
     */
    ...mapState({
      list: state => state.home.list,
      typeArr: state => state.home.typeArr,
      loginname: state => state.app.loginname
    })
  },
  mounted() {
    // const box = document.querySelector("#vux_view_box_body");
    // box.addEventListener("scroll", e => {
    //   if (box.scrollTop >= box.clientHeight) {
    //     this.$nextTick(function() {
    //       this.loadMore({
    //         tab: this.selectTab
    //       }).then(res => {
    //         this.$nextTick(function() {
    //           console.log("loading");
    //         });
    //       });
    //     });
    //   }
    // });
  },
  created() {
    console.log(this.loginname);
    this.dataInit({
      tab: this.selectTab
    }).then(res => {
      this.$nextTick(function() {
        this.loading = false;
        console.log("init success");
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-tab {
  position: fixed;
  width: 100%;
  max-width: 40rem;
}
.list-box {
  text-align: center;
  font-size: 0.8rem;
  /* background-color: rgba(233, 255, 251, 0.5); */
}
.list-item {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #000;
}
.item-avatar {
  width: 2.4rem;
  border-radius: 100%;
  flex: 2;
}
.item-info {
  overflow: hidden;
  flex-wrap: wrap;
  width: 60%;
  text-align: left;
  margin: 0 0.5rem;
  flex: 8;
}
.item-info > li {
  width: 100%;
}
.item-type {
  flex: 2;
}
.item-badge {
  flex-wrap: wrap;
}
</style>
