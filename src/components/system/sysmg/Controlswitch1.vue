<template lang="html">
  <div >
    <div class="">
      <div class="pagination">
        <el-button type="primary" icon="search" @click="dialogPay = true">搜索</el-button>
        <el-button type="warning" icon="search" @click="search" >刷新缓存</el-button>
      </div>
      <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe  fullscreen="true" >
        <el-table-column  label="名字" prop="bookname" >
        </el-table-column>
        <el-table-column  label="开关状态" >
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-switch
                v-model="scope.row.booktime"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column  label="操作" prop="bookenname">
        </el-table-column>
        <el-table-column  label="对应的英文名字" prop="bookenname">
        </el-table-column>
        <el-table-column  label="类型" prop="bookenname">
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加控制开关" :visible.sync="dialogPay">
      <el-form :model="form">
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="对应的英文名字" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开关状态" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPay = false">取 消</el-button>
        <el-button type="primary" @click="dialogPay = false">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        dialogPay: false,
        multipleSelection: '',
        book: [{
          id: '1',
          booktime: true,
          bookname: '扫码转公众号',
          bookenname: 'NOWPAY_WEB_GZH',
          status: 1
        }, {
          id: '2',
          booktime: true,
          bookname: '微信支付',
          bookenname: 'WX_PAY',
          status: 1
        }, {
          id: '3',
          booktime: false,
          bookname: 'WEB_WEIXINPAY',
          bookenname: 'WEB_WEIXINPAY',
          status: 1
        }, {
          id: '4',
          booktime: true,
          bookname: '扫码转公众号',
          bookenname: 'NOWPAY_WEB_GZH',
          status: 1
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
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      search () {
        console.log(1);
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
