<template lang="html">
    <div class="handle-box">
    <div class="notive_head titlt_line" >
        <span class="tabhover ">导出榜单</span>
    </div>
    <div class="handle-contant txct">
        <div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="1">男频榜单</el-checkbox>
                <el-checkbox label="2">女频榜单</el-checkbox>
                <el-checkbox label="3">无分类榜单</el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="handle-contant">
            <el-button type="primary" @click="dialogFormVisible = false">确认导出</el-button>
        </div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                checkList: ['1']
            };
        },
        methods: {
        }
    };
</script>

<style scoped>
    .handle-contant{
        padding-top: 48px;
    }
    .handle-box label{
        margin-right: 28px;
    }
</style>
