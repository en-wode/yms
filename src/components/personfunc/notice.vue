<template lang="html">
    <div class="handle-box">
        <div class="notive_head titlt_line">
            <span class="tabhover ">通知中心</span>
        </div>
        <div class="">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        一致性 Consistency<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="放假通知" name="2">
                    <div>2.13起放假~初六</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="任务通知" name="3">
                    <div>任务1</div>
                    <div>任务2</div>
                    <div>任务3</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange (val) {
                console.log(val);
            }
        }
    };
</script>
<style>
  .notive_head{margin-bottom: 18px}
  .active{
    color: black;
    font-size: 16px;
  }
  .msgselect span{display: inline-block}
  .el-dialog__header{background: white}
  .el-dialog__title{color: black!important;}
  .el-dialog__body{margin-top: 10px}
  .dialog-footer span{font-size: 12px}
</style>
