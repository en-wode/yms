<template lang="html">
    <div class="handle-box">
        <div style="width: 60%;margin: 0 auto">
            <el-form ref="form" :model="form" label-width="140px">
                <el-form-item label="榜单名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="模版调用名(英文)">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="榜单储存类型">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="榜单列表数量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="选择榜单分类">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="手动榜-安卓客户端" value="shanghai"></el-option>
                        <el-option label="手动榜-安卓客户端" value="beijing"></el-option>
                        <el-option label="手动榜-其他" value="other"></el-option>
                        <el-option label="手动榜-女频" value="nvp"></el-option>
                        <el-option label="手动榜-男频" value="nanp"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="顺序滚动显示">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="多少秒滚动一次">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="注释">
                    <el-input type="textarea" v-model="form.zhushi" :rows="3"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input type="textarea" v-model="form.desc" :rows="8"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                form: {
                    name: '',
                    region: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    zhushi: '',
                    desc: `表单调用名命名规则:必须是以下划线连接的英文数字字符串,以下是约定:
首字符auto代表是自动榜,反之则可为空,代表是手动榜
class_nan代表男频,
class_nv代表女频
index 首页
class 分类
global 全站
top全站榜单
字符串最后则为榜单具体含义,以下为自动榜用特殊字符,并且在特殊字符后可附加分类id,如weekhit6
weekhit,weekflower,monthhit,monthflower,totalhit,totalflower,pfb(打分)
特殊约定: 自动榜命名必须是如下格式
auto_index_weekhit7,auto_class_weekflower7,auto_class_nan_weekhit , auto_class_nv_weekhit `
                }
            };
        },
        methods: {
            onSubmit () {
                console.log('submit!');
            }
        }
    };
</script>
<style scoped>
    .handle-box >>> .el-form-item .el-input {
        width: 228px;
    }
</style>
