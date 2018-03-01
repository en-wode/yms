<template>
  <div class="table">
    <!--搜索条件-->
    <div class="handle-box">
      <div class="handle-contain">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <div>
            <el-form-item label="QQ号">
              <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="身份证号">
              <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="手机号">
              <el-input v-model="formInline.author" placeholder="请输入内容" class="handle-input"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="邮箱">
              <el-input v-model="formInline.author" placeholder="请输入内容" class="handle-input"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-button type="primary" icon="search" @click="search">提交</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <!--搜索条件end-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        authorizeoptions: [{
          value: '选项1',
          label: '授权类别1'
        }, {
          value: '选项2',
          label: '授权类别2'
        }, {
          value: '选项3',
          label: '授权类别3'
        }, {
          value: '选项4',
          label: '授权类别4'
        }, {
          value: '选项5',
          label: '授权类别5'
        }],
        reviewoptions: [{
          value: '选项1',
          label: '已审核'
        }, {
          value: '选项2',
          label: '未审核'
        }],
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        }
      };
    },
    created () {
    },
    computed: {
    },
    methods: {
    }
  };
</script>

<style scoped>
  h3{
    font-weight: 700;
    margin: 12px 0;
  }
  .handle-contain{
    margin: 22px auto;
    width: 30%;
    text-align: center;
  }
</style>
