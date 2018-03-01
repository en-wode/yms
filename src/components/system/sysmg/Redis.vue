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
          name: '刷新用户信息'
        }, {
          value: '选项2',
          name: '刷新用户粉丝值'
        }, {
          value: '选项3',
          name: '刷新按最新回复排序书评'
        }, {
          value: '选项4',
          name: '刷新每本书的总积分'
        }, {
          value: '选项5',
          name: '刷新每本书的书评总数(先更新字段再更新redis)'
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
