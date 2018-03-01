<template>
  <div>
    <!--搜索条件-->
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <div>
          <el-form-item label="订单号">
            <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-button type="primary" icon="search" @click="search" size="small">提交</el-button>
        </div>
      </el-form>
    </div>
    <!--搜索条件end-->
    <!--分页-->
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
    <!--分页end-->

    <!--tab表格-->
    <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe v-loading="loading" fullscreen="true">
      <el-table-column  label="订单号" prop="bookid" sortable width="80" >
      </el-table-column>
      <el-table-column  label="用户" width="160" prop="booksr">
      </el-table-column>
      <el-table-column  label="封号状态" width="210" prop="bookxs">
      </el-table-column>
      <el-table-column  label="充值时间" width="100" prop="bookclass">
      </el-table-column>
      <el-table-column  label="支付方法" width="100" prop="booknum" >
      </el-table-column>
      <el-table-column  label="金额" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="确认状态" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="来源" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="交易状态" width="100" prop="booklz">
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="bottom">
            <div slot="reference" class="name-wrapper">
              <p class="ft-blue txct">选择操作</p>
            </div>
            <div class="caozuo">
              <p class="caozuo" @click="handleClick(scope.row)">申章节</p>
              <p class="caozuo" @click="subscripte(scope.row)">订阅记录</p>
              <p class="caozuo">平均订阅统计</p>
              <p class="caozuo">统计</p>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!--tab表格end-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
        cur_page: 1,
        multipleSelection: [],
        select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false,
        input: '',
        checked: false,
        loading: false,
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        book: [{
          bookid: '2016',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          bookbreak: 33,
          bookremarks: '预计字数200',
          booksr: '8/1/4.00',
          bookxs: '上海市普陀区金沙江路 1518 弄',
          bookclass: '男频都市',
          booknum: '83.5万',
          booklz: '连载'
        }, {
          bookid: '123123',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          bookbreak: 25,
          bookremarks: '预计字数200，存稿90',
          booksr: '0/1/0.00',
          bookxs: '上海市普陀区金沙江路 1518 弄',
          bookclass: '男频都市',
          booknum: '83.5万',
          booklz: '完结'
        }, {
          bookid: '41123',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          bookbreak: 25,
          bookremarks: '预计字数200，存稿10',
          booksr: '0/1/0.00',
          bookxs: '上海市普陀区金沙江路 1518 弄',
          bookclass: '男频都市',
          booknum: '83.5万',
          booklz: '连载'
        }, {
          bookid: '1231234',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          bookbreak: 24,
          bookremarks: '预计字数200，存稿10',
          booksr: '0/1/0.00',
          bookxs: '上海市普陀区金沙江路 1518 弄',
          bookclass: '男频都市',
          booknum: '83.5万',
          booklz: '完结'
        }]
      };
    },
    created () {
      this.getData();
    },
    computed: {
      data () {
        const self = this;
        return self.tableData.filter(function (d) {
          let isdel = false;
          for (let i = 0; i < self.del_list.length; i++) {
            if (d.name === self.del_list[i].name) {
              isdel = true;
              break;
            }
          }
          if (!isdel) {
            if (d.address.indexOf(self.select_cate) > -1 &&
              (d.name.indexOf(self.select_word) > -1 ||
              d.address.indexOf(self.select_word) > -1)
            ) {
              return d;
            }
          }
        });
      }
    },
    methods: {
      getcatalog () {
        this.$router.push('/allcatalog');
      },
      subscripte (row) {
        this.subscription = true;
        this.changework = row;
      },
      dialogwork (row) {
        this.dialogworknew = true;
        this.changework = row;
      },
      handleClick (row) {
        console.log(row);
      },
      handleCurrentChange (val) {
        this.cur_page = val;
        this.getData();
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      getData () {
        console.log(process);
      },
      search () {
        this.is_search = true;
      },
      formatter (row, column) {
        return row.address;
      },
      filterTag (value, row) {
        return row.tag === value;
      },
      handleEdit (index, row) {
        this.$message('编辑第' + (index + 1) + '行');
      },
      handleDelete (index, row) {
        this.$message.error('删除第' + (index + 1) + '行');
      },
      handleSelectionChange (val) {
        this.multipleSelection = val;
      }
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
