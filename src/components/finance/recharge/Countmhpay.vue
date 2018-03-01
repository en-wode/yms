<template>
  <div>
    <!--搜索条件-->
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <div>
          <span class="demonstration">时间</span>
          <el-date-picker
            v-model="valuetime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-button type="primary" icon="search" @click="search" size="small">搜索</el-button>
        </div>
      </el-form>
    </div>
    <!--搜索条件end-->

    <!--tab表格-->
    <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe v-loading="loading" fullscreen="true" :span-method="objectSpanMethod">
      <el-table-column  label="充值类型" prop="cztapy"  width="210" >
      </el-table-column>
      <el-table-column  label="运营商" width="160" prop="carrier">
      </el-table-column>
      <el-table-column  label="统计情况">
        <template slot-scope="scope">
            <p v-for="data in scope.row.count">{{ data }} </p>
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
        valuetime: '',
        tableData: [],
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
        book: [{
          cztapy: '客户端',
          carrier: '电信',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
        }, {
          cztapy: '客户端',
          carrier: '移动',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
        }, {
          cztapy: '客户端',
          carrier: '联通',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
        }, {
          cztapy: 'wap端',
          carrier: '电信',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
        }, {
          cztapy: 'wap端',
          carrier: '移动',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
        }, {
          cztapy: 'wap端',
          carrier: '联通',
          count: ['2元(充值成功0条)', '5元(充值成功0条)', '10元(充值成功0条)']
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
      objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      getcatalog () {
        this.$router.push('/allcatalog');
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
