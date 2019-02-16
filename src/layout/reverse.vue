<template>
  <div class="reverse-content">
    <form action=''>
      <div class="primary-input-content">
        <label for="name">昵称：</label>
        <input id="name" type="text">
      </div>
      <div class="primary-input-content">
        <label for="sex">性别：</label>
        <select id="sex">
          <option>男</option>
          <option>女</option>
        </select>
      </div>
      <div class="primary-input-content">
        <label for="height">身高(cm)：</label>
        <input id="height" type="text">
      </div>
      <div class="primary-input-content">
        <label for="weight">体重(kg)：</label>
        <input id="weight" type="text">
      </div>
      <div class="primary-input-content">
        <label for="age">年龄：</label>
        <input id="age" type="text">
      </div>
      <div class="reverse-button-group">
          <button type='submit' class="confirm">确认</button>
          <button type='reset' class="cancel">取消</button>
      </div>
    </form>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "reverse",
  props: [],
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style type="text/css">
.reverse-button-group {
  text-align: center;
}
.reverse-button-group {
  padding-top: 35px;
}
.reverse-button-group button {
  width: 30%;
  text-align: center;
  color: white;
  padding: 10px 0;
  border-radius: 15px;
}
.reverse-button-group .confirm {
  margin-right: 15px;
  background-color: #15c015;
}
.reverse-button-group .cancel {
  background-color: #777;
}
</style>