<template>
  <el-dialog title="提示" :visible.sync="visible">
    <el-input v-model="goodsCount" placeholder="请输入您的购买数量"></el-input>
    <el-button type="danger" plain @click="buyBtn">立即购买</el-button>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible =true
    }
  },
  methods: {
    buyBtn() {

    }
  },
}
</script>