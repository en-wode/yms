<template>
  <div >
    <!--搜索条件-->
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <div>
          <el-form-item label="请输入本站订单号">
            <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-button type="primary" icon="search" @click="search" size="small">搜索</el-button>
        </div>
      </el-form>
    </div>
    <!--搜索条件end-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        },
        changework: []
      };
    },
    created () {
      this.getData();
    }
  };
</script>

<style scoped>
  .el-input{
    width: 160px!important;
    height: 30px;
    margin-right: 20px;
  }
.moreSelect{
  margin-left: 40px;
  color: #8a8a8a;
}


</style>
