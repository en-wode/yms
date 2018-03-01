<template>
  <div class="table">
    <!--搜索条件-->
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div>
          <el-form-item label="编辑组">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="频道">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="签约状态">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="总字数">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="连载状态">
            <el-select v-model="review" placeholder="请选择">
              <el-option
                v-for="item in reviewoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
        <div class="aling">
          <el-button type="primary" icon="search" @click="search">搜索</el-button>
          <el-checkbox v-model="checked">导出EXCEL</el-checkbox>
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
      <el-table-column  label="书号/书名" prop="bookid"  >
      </el-table-column>
      <el-table-column label="作者ID/作者" width="120" prop="bookauthor">
      </el-table-column>
      <el-table-column label="更新字数（俩个月）" width="180" prop="booknum" sortable>
      </el-table-column>
      <el-table-column  label="总字数" width="100" prop="booknum" sortable>
      </el-table-column>
      <el-table-column  label="平均订阅" width="160" prop="booksr">
      </el-table-column>
      <el-table-column  label="连载状态" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="签约时间" width="210" prop="bookxs" sortable>
      </el-table-column>
      <el-table-column  label="最后更新时间" width="210" prop="bookxs">
      </el-table-column>
      <el-table-column  label="签约状态" width="100" prop="bookclass">
      </el-table-column>
      <el-table-column  label="签约编辑" width="100" prop="bookclass">
      </el-table-column>
    </el-table>
    <!--tab表格end-->
    <!--弹框-->
    <!--弹框end-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        changework: [],
        value7: '',
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
        dialogworknew: false,
        subscription: false,
        editObj: {
          id: '1',
          version: '2'
        },
        url: './static/vuetable.json',
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
        authorize: '',
        review: '',
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
        let self = this;
        if (process.env.NODE_ENV === 'development') {
          self.url = '/ms/table/list';
        };
        self.$axios.post(self.url, {page: self.cur_page}).then((res) => {
          self.tableData = res.data.list;
        });
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
