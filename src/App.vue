<template>
  <div>
    <div class="head">
      <div class="head_title">配方称重</div>
      <div class="head_tips">如果实物不一致，超重或超轻，鼠标光标是不会往下跳的，会一直停留当前输入框</div>
    </div>
    <div>
      <table class="table">
         <tr>
        <th>序号</th>
        <th>原料编码</th>
        <th>原料名称</th>
        <th>原料批号</th>
        <th>计划量</th>
        <th>称重原料编码</th>
        <th>实际称重量</th>
        <th>称重状态1</th>
      </tr>
      <tr @mouseover="mouseover()" @mouseleave="Mouseleave()" :style="aitivecolor">
        <td>1</td>
        <td>B21101506</td>
        <td>水</td>
        <td>A219150</td>
        <td>
          <input ref="hh" type="text" />
        </td>
        <td>3.60000</td>
        <td>3.60000</td>
        <td>
          <div class="table_success">
            称重成功
          </div>
        </td>
      </tr>
      </table>
    </div>
    <div class="bottom">
      <el-row>
        <el-button><i class="el-icon-close el-icon--right">默认按钮</i></el-button>
        <el-button><i class="el-icon-refresh-right el-icon--right">默认按钮</i></el-button>
        <el-button><i class="el-icon-document el-icon--right">默认按钮</i></el-button>
        <el-button type="primary"><i class="el-icon-check el-icon--right">上传</i></el-button>
      </el-row>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aitivecolor: 'background-color:  #ffffff'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.hh.focus()
    })
  },
  methods: {
    mouseover () {
      this.aitivecolor = 'background-color:#666666'
    },
    Mouseleave () {
      this.aitivecolor = 'background-color: #ffffff'
    }
  }
}
</script>

<style scoped>
.table{
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
}
.table th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
}
.table td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
}
.table_success{
  background-color: green;
  border-radius: 12px;
  padding: 5px 10px;
  color: #ffffff;
}
input{
  border: #ffffff 1px solid !important;
}
</style>
