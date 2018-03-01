<template lang="html">
    <div class="handle-box">
        <h4 class="handle-box">书号（一行一个）</h4>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <div class="handle-box">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
      <div class="handle-box">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        radio: '1',
        checkList: ['选中且禁用', '复选框 A']
      };
    }
  };
</script>
<style>
</style>
