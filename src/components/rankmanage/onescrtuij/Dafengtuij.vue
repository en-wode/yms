<template lang="html">
    <div class="handle-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline drag-list">
            <div class="notive_head titlt_line" >
                <span class="tabhover ">备忘录</span>
            </div>
            <table style="border-collapse: collapse;bordercolor: #ccc;margin-top: 60px;">
                <thead >
                当前榜单
                </thead>
                <tr class="onetr">
                    <span class="fl tabhover">刷新</span>
                    <span class="fr tabhover" @click="bangshow()">修改当前榜单设置</span>
                </tr>
                <tr >
                    <td>
                        <el-form-item label="分类">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </td>
                    <td>
                        <el-form-item label="颜色">
                            <el-color-picker v-model="formInline.color"></el-color-picker>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <td>
                        <el-form-item label="标题">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </td>
                    <td>
                        <el-form-item label="链接">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr style="line-height: 60px">
                    <td>
                        上次提交人：
                    </td>
                    <td>
                        上次提交时间：
                    </td>
                </tr>
                <div class="txct">
                    <el-button type="primary" icon="search" @click="submint">提交</el-button>
                </div>
            </table>
        </el-form>
        <div>
            <setbang :showbang.sync = "showbang"></setbang>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import setbang from '../../popover/setbang.vue';
    export default{
        components: {
            setbang
        },
        data () {
            return {
                showbang: false,
                formInline: {
                    checked: true,
                    color: '#ccc',
                    bookname: '',
                    bangset: '',
                    guizename: ''
                }
            };
        },
        methods: {
            submint () {
                console.log(1);
            },
            bangshow () {
                this.showbang = true;
            }
        }
    };
</script>
<style scoped>
  .drag-box-left{
    float: left;
    width: 100%;
  }
  .handle-box table{
    color: #606266;
    margin:0 auto;
    padding: 18px 0;
    font-size: 14px;
  }
  .handle-box table .onetr {
      height: 32px;
      line-height: 32px;
  }
  .handle-box table .onetr span{
      padding: 0 6px;
  }
  .handle-box table thead {
    height: 34px;
    line-height: 34px;
    text-align: center;
    background-color: #3EA5F1;
    padding: 6px 0;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    color: white;
  }
  .handle-box table tr{
    border:1px solid #ccc;
    height: 60px;
    padding: 4px 8px;
  }
  .handle-box table tr td:first-child{
    border-right: 1px solid #ccc;
  }
  .drag-list td {
    padding: 12px;
    width: 320px;
    display: inline-block;
  }
  .handle-box table .txct{
      margin: 28px 0 10px 0;
  }
  /*颜色选择器*/
  .el-color-picker{
    vertical-align: -15px;
  }
  .el-color-picker__trigger{
    height: 30px;
  }
  .el-form--inline .el-form-item{
    margin-bottom: 0;
  }
  .el-color-picker{height: auto}
</style>
