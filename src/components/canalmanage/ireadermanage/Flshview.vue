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
    <el-table :data="book" border  ref="multipleTable"  stripe  fullscreen="true">
        <el-table-column  label="书名/书号" prop="bookid" sortable width="260" >
        </el-table-column>
        <el-table-column  label="作者名/作者号" prop="bookname" sortable width="260" >
        </el-table-column>
        <el-table-column  label="频道" prop="bookname" sortable width="160" >
        </el-table-column>
        <el-table-column  label="金额" prop="bookname" sortable width="100" >
        </el-table-column>
        <el-table-column  label="是否已结算" prop="bookname" sortable width="160" >
        </el-table-column>
        <el-table-column  label="是否冻结" prop="bookname" sortable width="160" >
        </el-table-column>
        <el-table-column  label="收入月" prop="bookname" sortable width="80" >
        </el-table-column>
        <el-table-column  label="渠道" prop="bookname" sortable width="100" >
        </el-table-column>
        <el-table-column  label="编辑名" prop="bookname" sortable width="100" >
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
