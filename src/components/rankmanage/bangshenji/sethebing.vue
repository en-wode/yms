<template>
    <div class="table">
    <!--搜索条件-->
    <div class="handle-box">
        <div class="handle-contain">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div>
                    <el-form-item label="来源">
                        <el-select v-model="bangset" placeholder="请选择">
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
                    <el-form-item label="目标">
                        <el-select v-model="bangset" placeholder="请选择">
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
    <!--搜索条件end-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                bangset: '首页一屏推荐--一屏男生推荐',
                banglist: [{
                    value: '首页一屏推荐--一屏男生推荐',
                    label: '首页一屏推荐--一屏男生推荐'
                }, {
                    value: '首页一屏推荐--大封推荐',
                    label: '首页一屏推荐--大封推荐'
                }, {
                    value: '首页一屏推荐--一屏公告推荐',
                    label: '首页一屏推荐--一屏公告推荐'
                }, {
                    value: '首页一屏推荐--一屏女生推荐',
                    label: '首页一屏推荐--一屏女生推荐'
                }],
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
                }],
                formInline: {
                    bookid: '',
                    author: '',
                    bookname: '',
                    bangset: '',
                    guizename: ''
                }
            };
        },
        created () {
        },
        computed: {
        },
        methods: {
            submint () {
                console.log(1);
            }
        }
    };
</script>

<style scoped>
  h3{
    font-weight: 700;
    margin: 12px 0;
  }
  .handle-contain{
    margin: 22px auto;
    width: 42%;
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
