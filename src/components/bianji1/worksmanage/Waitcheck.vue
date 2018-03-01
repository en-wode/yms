<template>
  <div class="table">
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div>
          <el-form-item label="搜索">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关键字">
            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
          </el-form-item>
          <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
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
          <el-form-item label="编辑">
          <el-select v-model="review" placeholder="请选择">
            <el-option
              v-for="item in reviewoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="字数">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-select v-model="review" placeholder="请选择">
              <el-option
                v-for="item in reviewoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
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
    <!--tab表格-->
    <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe >
      <el-table-column  label="书号/书名"  width="180" >
        <template slot-scope="scope">
          <el-popover>
            <div slot="reference" class="name-wrapper">
              <span>1561</span>/ <span>你是啥</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="作者号/作者名" width="120" >
        <template slot-scope="scope">
          <el-popover>
            <div slot="reference" class="name-wrapper">
              <span>123123</span>/<span>你是猪</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="章节" width="180" prop="bookid">
        <template slot-scope="scope">
          <div class="name-wrapper">
            <span class="ft-blue tabhover">章节列表</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column  label="字数" width="160" prop="booksr">
      </el-table-column>
      <el-table-column  label="创建时间" width="180" prop="bookxs">
      </el-table-column>
      <el-table-column  label="审核状态" width="100" prop="bookclass">
      </el-table-column>
      <el-table-column  label="最后审核时间" width="180" prop="booknum" >
      </el-table-column>
      <el-table-column  label="拒审理由" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="拒审时间" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="审核次数" width="100" prop="booklz">
      </el-table-column>
      <el-table-column  label="编辑" width="100" prop="booklz">
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="bottom">
            <div slot="reference" class="name-wrapper">
              <p class="ft-blue">选择操作</p>
            </div>
            <div class="caozuo">
              <p class="caozuo" @click="handleClick(scope.row)">通过</p>
              <p class="caozuo" @click="subscripte(scope.row)">拒审</p>
              <p class="caozuo">永久拒审</p>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!--tab表格end-->
    <!--弹框-->
    <changenew :dialogworknew.sync = "dialogworknew" :changework = "changework"></changenew>
    <subscription :subscription.sync = "subscription" :changework = "changework" ></subscription>
    <!--弹框end-->
  </div>
</template>

<script>
  import changenew from '../../popover/changenew.vue';
  import subscription from '../../popover/subscription.vue';
  export default {
    components: {
      changenew, subscription
    },
    data () {
      return {
        changework: [],
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
.handle-box{
  margin-bottom: 20px;
}
.handle-select{
  width: 120px;
}
.handle-input{
  width: 300px;
  display: inline-block;
}

.el-input{
  width: 160px;
  height: 30px;
  margin-right: 20px!important;
}
.el-select{
  margin-right: 20px!important;
}

.el-button{
  width: 100px;
  height: 40px;
  padding: 0;
}


.handle-box{
  background: white;
  padding: 16px 12px 16px 12px;
  border-radius: 6px;
}

.moreSelect{
  margin-left: 40px;
  color: #8a8a8a;
}
.ft-gray {
  margin-right: 34px;
}

.has-gutter > tr > th {
  background-color: red!important;
}
</style>
