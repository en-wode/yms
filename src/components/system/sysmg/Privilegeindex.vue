<template lang="html">
  <div >
    <div class="handle-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div>
          <el-form-item label="编辑分组">
            <el-select v-model="authorize" placeholder="请选择">
              <el-option
                v-for="item in authorizeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" icon="search" @click="search">搜索</el-button>
          <el-button type="warning" icon="search" @click="search" >添加编辑权限</el-button>
        </div>
      </el-form>
    </div>
    <div class="">
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[50, 100, 150, 200]"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
      <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe  fullscreen="true" >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column  label="编辑ID号" prop="bookname" >
        </el-table-column>
        <el-table-column  label="编辑名" prop="booktime">
        </el-table-column>
        <el-table-column  label="频道" prop="booktime">
        </el-table-column>
        <el-table-column  label="QQ" prop="booktime">
        </el-table-column>
        <el-table-column  label="是否分配作者" prop="booktime">
        </el-table-column>
        <el-table-column  label="组名" prop="booktime">
        </el-table-column>
        <el-table-column  label="组长" prop="booktime">
        </el-table-column>
        <el-table-column  label="主编" prop="booktime">
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <ul>
                <el-row :gutter="20">
                  <el-col :span="6">完成</el-col>
                  <el-col :span="6">修改</el-col>
                  <el-col :span="6">置顶</el-col>
                  <el-col :span="6">删除</el-col>
                </el-row>
              </ul>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        msgselect: true,
        msgshow: true,
        cur_page: '',
        multipleSelection: '',
        currentPage4: 1,
        book: [{
          id: '1',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          progress: 80
        }, {
          id: '2',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          progress: 80,
          state: 'exception'
        }, {
          id: '3',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          progress: '100',
          state: 'success'
        }, {
          id: '4',
          bookauthor: '王小虎',
          booktime: '2012-12-12',
          bookname: '无敌杀怒',
          progress: 0,
          state: 'exception'
        }],
        authorize: '',
        formInline: {
          authorize: ''
        },
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
        }]
      };
    },
    methods: {
      search () {
        console.log(1);
      },
      msgchange (val) {
        this.msgselect = val;
        this.msgshow = val;
      },
      handleSelectionChange (val) {
        this.multipleSelection = val;
      },
      handleCurrentChange (val) {
        this.cur_page = val;
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      }
    }
  };
</script>
<style scoped>
.notive_head{margin-bottom: 16px}
</style>
