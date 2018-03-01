<template lang="html">
  <div class="handle-box">
    <div class="notive_head titlt_line" >
      <span class="tabhover ">导入榜单</span>
    </div>
    <div class="handle-contant">
      <div>
        <el-input
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <div class="warning">
          <p>功能：批量写入榜单数据</p>
          <p>操作方法：复制填写好的excel榜单数据，数据顺序为：序号，榜单英文名	，推荐榜单	，作品书号，	关键字</p>
          <p>若书籍包含黑名单书籍或者不存在书籍，会提示报错，必须更正相应的书籍，再做批量写入操作。</p>
          <p>操作成功会有提示</p>
        </div>
      </div>
      <div class="handle-contant txct">
        <el-button type="primary" @click="dialogFormVisible = false">确认导入</el-button>
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
<style>

</style>
