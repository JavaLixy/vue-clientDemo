<template>

  <el-table :data="tableData" style="width: 50%" v-loading="pageLoading">
    <el-table-column label="商品编码" prop="gsCode">
    </el-table-column>
    <el-table-column label="商品名称" prop="gsName">
    </el-table-column>
    <el-table-column label="厂家名称" prop="gfName">
    </el-table-column>
    <el-table-column label="商品单价" prop="unitPrice">
    </el-table-column>
    <el-table-column label="剩余数量" prop="gsTotal">
    </el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button type="danger" @click="buyBtn(scope.row)">立即抢购</el-button>
        <!-- <el-button size="mini" type="danger" @click="buyBtn(scope.row)">购买</el-button> -->
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  name: 'inside',
  // inject: ['reload'],
  data() {
    return {
      tableData: [],
      pageLoading: Boolean,
      simpleGsId: ''
    }
  },
  methods: {
    initData() {
      this.pageLoading = true;
      this.$axios.get('http://106.15.67.217:9999/api/gs/goods/listByGsGoods')
        .then(resp => {
          console.log('initData()');
          console.log(resp.data);
          this.tableData = resp.data;
        }).catch(() => {
          this.$message.error('网络链接异常！');
        }).finally(() => {
          this.pageLoading = false;
        });
    },
    buyBtn(row) {
      this.$prompt('请输入购买数量', '提示', {
        confirmButtonText: '立即购买',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {

        this.pageLoading = true;
        this.$axios.post('http://106.15.67.217:9999/api/user/pay/userToPay', { gsId: row.gsId, payCount: value }).then(resp => {
          if (resp.data === 1) {
            this.$router.go(0);
            // this.initData();
            this.$message.success('购买成功!');
          } else {
            this.$message.error('购买失败');
          }
        })
      }).catch(() => {
        this.$message('取消操作');
      }).finally(() => {
        this.pageLoading = false;
      });
    }

  },
  mounted() {
    this.initData();
  }
}
</script>