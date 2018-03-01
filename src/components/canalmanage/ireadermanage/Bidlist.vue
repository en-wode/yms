<template lang="html">
  <div>
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div>
          <el-form-item label="书号">
            <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-form-item label="书名">
            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-form-item label="作者名">
            <el-input v-model="formInline.author" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
      </el-form>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[50, 100, 150, 200]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <el-table :data="book" border  ref="multipleTable"  stripe  fullscreen="true">
        <el-table-column  label="对方书名" prop="bookid"   >
        </el-table-column>
        <el-table-column  label="本站书名" prop="bookname"   >
        </el-table-column>
        <el-table-column  label="对方书号" prop="bookname"  width="200" >
        </el-table-column>
        <el-table-column  label="本站书号" prop="bookname"  width="200" >
        </el-table-column>
      </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        currentPage4: 1,
        loading: true,
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        },
        book: [
          {
            bookid: '2016',
            bookname: '书旗'
          },
          {
            bookid: '2012',
            bookname: '掌阅'
          }
        ]
      };
    },
    methods: {
      handleCurrentChange (val) {
        this.cur_page = val;
        this.getData();
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      }
    }
  };
</script>
<style>
</style>
