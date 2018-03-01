<template lang="html">
  <div>
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="关键字">
          <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input" size="small"></el-input>
        </el-form-item>
        <el-form-item label="选择搜索类别">
          <el-select v-model="authorize" placeholder="请选择">
            <el-option
              v-for="item in reviewoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
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
        :total="400"
      >
      </el-pagination>
    </div>
    <el-table :data="book" border style="width: 100%" ref="multipleTable"  stripe fullscreen="true">
      <el-table-column  label="ID" prop="bookid" sortable width="200" >
      </el-table-column>
      <el-table-column  label="书名" prop="bookname"  >
      </el-table-column>
      <el-table-column  label="作者号" prop="bookname" >
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">点击解除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
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
        ],
        authorize: '选项1',
        reviewoptions: [{
          value: '选项1',
          label: '已审核'
        }, {
          value: '选项2',
          label: '未审核'
        }]
      };
    },
    methods: {
      handleCurrentChange (val) {
        this.cur_page = val;
        this.getData();
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      search (val) {
        console.log(val);
      },
      canaldata () {
        this.$router.push('/diagram');
      },
      handleDelete (index, row) {
        this.$message.error('删除第' + (index + 1) + '行');
      }
    }
  };
</script>
<style>
</style>
