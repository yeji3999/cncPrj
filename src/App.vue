<template>
  <div id="wrap">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
  #wrap{
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: "padding".5s;
  background-color: #2b2d30;
  }
  .tree-node > .tree-content > .tree-anchor {
    color: rgb(201, 209, 217);
  }
  .tree-node.selected > .tree-content > .tree-anchor {
    color: #1E1E1E;
    font-weight: bold;
  }
</style>
