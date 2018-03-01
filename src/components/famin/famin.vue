<template lang="html">
    <div>
        <el-dialog :visible.sync="faminshow" title="选择后台" @close='closeDialog'>
            <div class="caozuoclass">
                <el-row type="flex" class="row-bg">
                    <el-col :span="6" class="gezi" @click.native="wdlc('zhanwu')">站务后台</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('rankmanage')">榜单后台</el-col>
                    <el-col :span="6" class="gezi">授权书库V4</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('finance')">财务工具</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('bianji1')" >编辑后台</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('bianji2')">编辑后台2</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('system')">系统管理</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('qudao')" >渠道数据管理</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('business')">商务后台</el-col>
                    <el-col :span="6" class="gezi" @click.native="wdlc('Mstation')">M站后台</el-col>
                    <!--<el-col :span="6" class="gezi" v-has="1" @click.native="wdlc('Mstation')">M站后台</el-col>-->
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    props: ['faminsw'],
    data () {
        return {
            faminshow: false,
            worktrans: false,
            name: 'linxin'
        };
    },
    created () {
        this.setfamin(sessionStorage.fadmin);
    },
    computed: {
        username () {
            let username = localStorage.getItem('ms_username');
            return username;
        },
        fadmin () {
            return this.$store.state.fadmin;
        }
    },
    watch: {
        faminsw (newVal) {
            this.faminshow = newVal;
            this.$emit('update:faminsw', newVal);
        },
        faminshow (newVal) {
            this.$emit('update:faminsw', newVal);
        }
    },
    methods: {
        handleCommand (command) {
            if (command === 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
        wdlc (loact) {
            this.famin = false;
            this.$store.commit('fadmin', loact);
            this.$emit('update:faminsw', false);
            this.$router.push({path: '/index/home', query: {'act': loact}});
        },
        setfamin (val) {
            let vm = this;
            if (val === '' || typeof (val) === 'undefined') {
                vm.faminshow = true;
            }
        },
        closeDialog () {
            this.$store.commit('swfadmin', false);
        }
    }
};
</script>
<style scope>
  /*身体*/
  .caozuoclass{
    text-align: center;
    border-top: 1px solid #e6ebf5;
    border-left: 1px solid #e6ebf5;
  }
  .el-row--flex{
    flex-flow: row wrap
  }
  .gezi{
    height: 76px;
    line-height: 76px;
    color: #666;
    border-right: 1px solid #e6ebf5;
    border-bottom: 1px solid #e6ebf5;
    cursor: pointer;
  }
  .gezi:hover{
    border: 1px solid #ef4b4b;
    color: #ef4b4b;
    background-color: #ffe5e5;
  }


</style>
