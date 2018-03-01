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
    <el-table :data="book" border  ref="multipleTable"  stripe v-loading="loading" fullscreen="true">
        <el-table-column  label="ID" prop="bookid" sortable width="200" >
        </el-table-column>
        <el-table-column  label="渠道名字" prop="bookname" sortable width="200" >
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="bottom">
              <div slot="reference" class="name-wrapper">
                <p class="ft-blue txct">选择操作</p>
              </div>
              <div class="caozuo">
                <p class="caozuo" @click="handleClick(scope.row)">修改</p>
                <p class="caozuo" @click="subscripte(scope.row)">删除</p>
                <p class="caozuo">初始化稿费的数据</p>
              </div>
            </el-popover>
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
