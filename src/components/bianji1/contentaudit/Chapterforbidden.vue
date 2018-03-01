<template lang="html">
  <div class="table">
    <div class="handle-box">
    </div>
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
    <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe >
      <el-table-column  label="书名" prop="bookid" >
      </el-table-column>
      <el-table-column  label="责编" prop="bookid" width="80" >
      </el-table-column>
      <el-table-column  label="作者" width="160" prop="booksr" sortable>
      </el-table-column>
      <el-table-column  label="待审数" width="160" prop="bookxs" sortable>
      </el-table-column>
      <el-table-column  label="驳回数" width="160" prop="booksr" sortable>
      </el-table-column>
      <el-table-column  label="复审数" width="160" prop="booksr" sortable>
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
  </div>
</template>


<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() > Date.now();
          }
        },
        value7: '',
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        },
        multipleSelection: [],
        authorize: '',
        checked: '',
        cur_page: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
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
      handleSelectionChange (val) {
        this.multipleSelection = val;
      },
      getData () {
        console.log('取值');
      }
    }
  };
</script>

<style>
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
