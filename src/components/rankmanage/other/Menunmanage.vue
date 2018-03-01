<template lang="html">
    <div class="handle-box">
        <el-table
                :data="bangmanage"
                border
                style="width: 100%"
        >
            <el-table-column
                    prop="bangname"
                    label="榜单分类名字"
                    width="280">
            </el-table-column>
            <el-table-column
                    prop="shunxu"
                    label="顺序号"
                    width="130">
            </el-table-column>
            <el-table-column
                    prop="show"
                    label="是否显示"
                    width="130">
            </el-table-column>
            <el-table-column
                    label="操作(提示:点击隐藏(显示)榜单分类),该分类下榜单也都隐藏(显示)">
                <template slot-scope="scope">
                    <div class="caozuo">
                        <span class="caozuo" @click="handleClick(scope.row)">修改</span>
                        <span class="caozuo" @click="subscripte(scope.row)">删除</span>
                        <span class="caozuo">初始化稿费的数据</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                bangmanage: [{
                    bangname: '手动榜-安卓客户端',
                    shunxu: '1',
                    show: '是'
                }, {
                    bangname: '手动榜-首页',
                    shunxu: '2',
                    show: '否'
                }, {
                    bangname: '手动榜-首页',
                    shunxu: '3',
                    show: '是'
                }]
            };
        }
    };
</script>
<style>
</style>
