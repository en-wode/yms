<template lang="html">
  <div class="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>刷新缓存</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="redis in flush" :key="redis.value" class="text item tabhover" @click="flushredis(redis)">
        {{redis.name }}
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        flush: [{
          value: '选项1',
          name: '查看全局设置缓存'
        }, {
          value: '选项2',
          name: '查看网站设置缓存'
        }, {
          value: '选项3',
          name: '查看用户组缓存'
        }, {
          value: '选项4',
          name: '查看分类缓存'
        }, {
          value: '选项5',
          name: '查看权限缓存'
        }],
        reviewoptions: [{
          value: '选项1',
          name: '重写书评的最后回复日期和最后回复人字段'
        }, {
          value: '选项2',
          name: '修正连续签到bug'
        }]
      };
    },
    methods: {
      flushredis (redkey) {
        console.log(redkey);
      }
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
