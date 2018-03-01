<template lang="html">
    <div class="">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>榜单黑名单</span>
                <div class="fr">
                    <el-button style="padding: 3px 0" type="text">增加</el-button>
                </div>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="书号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="书名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="时间">
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="bottom">
                            <div slot="reference" class="name-wrapper">
                                <p class="ft-blue txct">选择操作</p>
                            </div>
                            <div class="caozuo">
                                <p class="caozuo" >申章节</p>
                                <p class="caozuo" @click="subscripte(scope.row)">订阅记录</p>
                                <p class="caozuo">平均订阅统计</p>
                                <p class="caozuo">统计</p>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                textarea: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        methods: {
        }
    };
</script>
<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>
