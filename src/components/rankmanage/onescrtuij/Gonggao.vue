<template lang="html">
    <div class="handle-box">
    <div class="msgselect">
        <span :class="msgselect ? 'active' : 'ft-gray'" @click="msgchange(true)" class="tabhover">修改当前榜单设置</span>
        <span :class="msgselect ? 'ft-gray' : 'active'" @click="msgchange(false)" class="tabhover">批量导入</span>
    </div>
    <div v-if="msgshow">
        <div class="pagination">
            <span class="fl ft-red">刷新（上次刷新时间：无）</span>
        </div>
        <div class="handle-contain">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div>
                    <el-form-item label="升级条数">
                        <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="升级规则">
                        <el-select v-model="formInline.bangset" placeholder="请选择">
                            <el-option
                                    v-for="item in banglist"
                                    :key="item.value"
                                    :value="item.value"
                                    :label="item.label"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="本条升级规则名">
                        <el-input v-model="formInline.guizename" placeholder="请输入内容" class="handle-input"></el-input>
                    </el-form-item>
                </div>
                <div class="txct">
                    <el-button type="primary" icon="search" @click="submint">提交</el-button>
                </div>
            </el-form>
        </div>
    </div>
    <div v-else>
        <div class="handle-contain">
            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <div class="txct">
                <el-button type="primary" icon="search" @click="submint">提交</el-button>
            </div>
        </div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    data () {
        return {
            msgselect: true,
            msgshow: true,
            msgdialog: false,
            formInline: {
                bookid: '',
                author: '',
                bookname: '',
                bangset: '',
                guizename: ''
            },
            textarea: ''
        };
    },
    methods: {
        msgchange (val) {
            this.msgselect = val;
            this.msgshow = val;
        }
    }
};
</script>
<style scoped>
    .active{
        color: black;
        font-size: 16px;
    }
    .msgselect span{display: inline-block}
    .msgselect span:first-child{
        border-right: 2px solid black;
        margin-right: 10px;
        padding-right: 10px;
    }
    .el-dialog__header{background: white}
    .el-dialog__title{color: black!important;}
    .el-dialog__body{margin-top: 10px}
    .dialog-footer span{font-size: 12px}
    .handle-contain{
        margin: 22px auto;
        width: 44%;
    }
    .handle-contain >>> .el-input{
        width: 268px;
    }
    .handle-contain >>> .el-form-item__label{
        min-width: 140px;
        text-align: left;
        margin-right: 44px;
    }
</style>
