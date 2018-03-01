<template lang="html">
    <div class="handle-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline drag-list">
            <div class="notive_head titlt_line" >
                <span class="tabhover ">备忘录</span>
            </div>
            <el-row :gutter="24">
                <el-col :span="8">
                    <div class="wap_bang">
                        <div class="header_bang">
                            <span class="fl tabhover" @click="mbang = true">序号</span>
                            <span class="fr tabhover" @click="showbang = true">编辑</span>
                        </div>
                        <div class="contain_bang">
                            <p class="contain_title">
                                <label>书号：</label><span>1</span>
                                <label>书名：</label><span class="bookname">修罗天帝</span>
                                <label>提交人：</label><span>肥虫</span></p>
                            <p class="contain_intor"><label>简介：</label>八年前，雷霆古城一夜惊变，少城主秦命押入青云宗为仆，二十万民众赶进大山为奴</p>
                            <p class="contain_tip"><label>提交时间：</label><a href="javascript:void (0)" class="fr">查看图片</a></p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="wap_bang">
                        <div class="header_bang">
                            <span class="fl">序号</span>
                            <span class="fr">编辑</span>
                        </div>
                        <div class="contain_bang"></div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="wap_bang">
                        <div class="header_bang">
                            <span class="fl">序号</span>
                            <span class="fr">编辑</span>
                        </div>
                        <div class="contain_bang"></div>
                    </div>
                </el-col>
            </el-row>
        </el-form>
        <div>
            <setbang :showbang.sync = "showbang"></setbang>
            <mbang :mbang.sync = "mbang"></mbang>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import setbang from '../../popover/setbang.vue';
    import mbang from '../../popover/mbang.vue';
    export default{
        components: {
            setbang, mbang
        },
        data () {
            return {
                showbang: false,
                mbang: false,
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
    .el-row {
        margin: 20px 0;
        height: 208px;
        min-width: 1200px;
    }
    .el-row .el-col {
        height: 100%;
    }
    .el-row .wap_bang {
        height: 100%;
    }
    .el-row .wap_bang .header_bang {
        color: white;
        padding: 0 16px;
        font-size: 16px;
        height: 24px;
        line-height: 24px;
        background-color: #3ea5f1;
        border-radius: 6px 6px 0px 0px;
    }
    .el-row .wap_bang .contain_bang {
        height: 100%;
        border: 2px solid #d9d9d9;
        border-top: none;
        border-radius: 0px 0px 6px 6px;
        font-size: 14px;
    }
    .el-row .wap_bang .contain_bang label {
        color: #b9b6b6
    }
    .el-row .wap_bang .contain_bang span {
        margin: 0 16px 0 8px;
    }
    .el-row .wap_bang .contain_bang .bookname {
        display: inline-block;
        width: 20%;
        overflow: hidden;
        vertical-align: bottom;
    }
    .el-row .wap_bang .contain_bang .contain_title {
        padding: 20px 16px 0 16px;
    }
    .el-row .wap_bang .contain_bang .contain_intor {
        padding: 20px 16px 26px 16px;
        min-height: 80px;
    }
    .el-row .wap_bang .contain_bang .contain_tip {
        padding: 0 16px 16px 16px;
    }
    .el-row .wap_bang .contain_bang .contain_tip a{
        color: #3ea5f1;
    }
</style>
