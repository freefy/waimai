<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt class="select-title">
        {{name}}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <h3>{{name}}</h3>
        <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["name", "list"]
};
</script>


