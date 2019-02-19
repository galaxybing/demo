<template>
  <div class="contentBox">
    <loading :show="showLoading"></loading>
    <div v-if="!showLoading" class="contentHeader">
      <div class="flex-center headerAuthor" v-if="detailData.author">
        <img :src="detailData.author.avatar_url" alt="" class="authorImg" />
        <span class="authorName">{{detailData.author.loginname}}</span>
      </div>
      <div class="headerTitle">{{detailData.title}}</div>
      <div class="createAt headerCreateAt">{{detailData.create_at}}</div>
      <div class="headerStatus">
        <badge class="status statusTop" :text="detailData.top"></badge>
        <badge class="status statusGood" :text="detailData.good"></badge>
        <div class="headerCount">
          <span class="countReply">{{detailData.reply_count}}</span>
          <span>/</span>
          <span class="countVisit">{{detailData.visit_count}}</span>
        </div>
      </div>
    </div>
    <div class="contentContent markdown-body" v-html="detailData.content"></div>
    <div class="replayTitle">回复列表</div>
    <div class="contentReplies">
      <ul>
        <li v-for="item of detailData.replies" :key="item.id" class="repliesReply">
          <div class="flex-center replyAuthor" v-if="detailData.author">
            <img :src="item.author.avatar_url" alt="" class="replyAuthorImg" />
            <span class="replyAuthorName">{{item.author.loginname}}</span>
          </div>
          <div class="replyContent markdown-body" v-html="item.content"></div>
          <div class="createAt replyCreateAt">{{item.create_at}}</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Loading, Badge } from "vux";
import "github-markdown-css";

export default {
  name: "Detail",
  components: {
    Loading,
    Badge
  },
  data() {
    return {
      msg: "detail",
      showLoading: true
    };
  },
  computed: {
    ...mapState({
      detailData: state => state.detail.detailData
    })
  },
  methods: {
    ...mapActions(["getDetail"])
  },
  created() {
    const detailId = this.$route.params.id;
    // const detailId = "5aae1cc8f5dfc27d7ad98909";
    this.getDetail({
      detailId
    }).then(res => {
      this.showLoading = false;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentBox {
  margin: 0 1rem;
}
.headerAuthor {
  justify-content: flex-start;
  height: 4rem;
  border-bottom: 1px solid #eee;
}
.authorImg {
  width: 2.5rem;
  border-radius: 100%;
}
.authorName {
  font-size: 1.3rem;
  margin-left: 2rem;
}
.headerTitle {
  font-size: 1.3rem;
  margin: 1rem 0;
  font-weight: 600;
}
.headerCount {
  float: right;
}
.contentContent {
  margin: 1rem 0;
}
.repliesReply {
  margin: 1rem 0;
  border-bottom: 1px solid #eee;
}
.replyAuthor {
  justify-content: flex-start;
  margin: 1rem 0;
}
.replyAuthorImg {
  width: 2.5rem;
  border-radius: 100%;
}
.replyAuthorName {
  margin-left: 1rem;
}
.replyCreateAt {
  text-align: right;
}
.replyContent {
  margin: 1rem;
  background-color: #eee;
}
.replayTitle {
  font-size: 1.3rem;
  color: #09bb07;
}
.createAt {
  font-size: 1rem;
  color: rgb(144, 144, 144);
}
</style>
