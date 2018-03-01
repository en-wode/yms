<template lang="html">
  <div class="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>编辑章节标题-严重违禁词</span>
        <div class="fr">
          <el-button style="padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </div>
      <el-input
        type="textarea"
        :rows="22"
        :cols="100"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        textarea: ''
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
