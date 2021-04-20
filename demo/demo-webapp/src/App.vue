<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  /* 无法使用 自定义重新加载页面组件 */
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
        console.log('页面重新加载');
      })
    }
  }
}
</script>

<style>
#app {
  /*App.vue 样式将影响Login的 CSS？  */
}
</style>
