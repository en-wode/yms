<template lang="html">
  <div>
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
    <el-table :data="book" border style="width: 100%" ref="multipleTable"  stripe fullscreen="true">
      <el-table-column  label="ID" prop="bookid" sortable width="200" >
      </el-table-column>
      <el-table-column  label="渠道名字" prop="bookname"  >
      </el-table-column>
      <el-table-column  label="备注" prop="bookname" >
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)" v-if="scope.$index !== 0">删除</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)" v-else="scope.$index === 0">初始化稿费数据</el-button>
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
        authorizeoptions: [{
          value: '选项1',
          label: '书籍ID'
        }, {
          value: '选项2',
          label: '书名'
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
      handleEdit (index, row) {
        this.$message('编辑第' + (index + 1) + '行');
      },
      handleDelete (index, row) {
        this.$message.error('删除第' + (index + 1) + '行');
      }
    }
  };
</script>
<style>
</style>
