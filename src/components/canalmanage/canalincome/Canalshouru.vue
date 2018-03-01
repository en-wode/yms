<template lang="html">
  <div>
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div>
          <el-form-item label="关键字">
            <el-input v-model="formInline.bookid" placeholder="请输入内容" class="handle-input" size="small"></el-input>
          </el-form-item>
          <el-form-item label="搜索类别">
            <el-select v-model="authorize" placeholder="请选择" size="small">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属频道">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
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
          <el-form-item label="渠道">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="结算状态">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in reviewoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="冻结状态">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in reviewoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <label class="el-form-item__label">选择月</label>
          <el-date-picker
            v-model="selectdata"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
          <el-checkbox v-model="checked">不包括本站收入</el-checkbox>
          <el-checkbox v-model="checked">计算收入</el-checkbox>
          <div class="txct">
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
            <el-button type="primary" icon="search" @click="search">导出XLS</el-button>
          </div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import searchhead from '../../searchtemplate/searchhead.vue';
  export default{
    components: {
      searchhead
    },
    data () {
      return {
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() > Date.now();
          }
        },
        checked: true, // 多选框
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
        ],
        formInline: {
          bookid: '',
          author: '',
          bookname: ''
        },
        authorize: '',
        selectdata: '', // 选择时间
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
      search () {
        console.log(1);
      }
    }
  };
</script>
<style>
</style>
