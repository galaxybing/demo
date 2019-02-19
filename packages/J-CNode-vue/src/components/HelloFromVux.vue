<template>
  <div>
    <tabbar>
      <tabbar-item link="/components/views/home">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/components/views/question">
        <span slot="label">发表</span>
      </tabbar-item>
      <tabbar-item link="/components/views/message">
        <span slot="label">信息</span>
      </tabbar-item>
      <tabbar-item link="/components/views/profile">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Icon
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
