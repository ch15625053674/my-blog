<template>
  <div id="manager">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'manager',
        data () {
            return {
            }
        },
        methods:{
            clickSrc: function () {
            }
        }
    }
</script>

<style  scoped>
  #manager {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }

</style>
