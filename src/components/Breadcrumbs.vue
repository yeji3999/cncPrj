<template>
  <div class="Breadcrumbs" style="margin-bottom: 15px;">
    <div id="headerTitle"> <span class="headerTitleTxt" style="padding-left:0px">{{headerFac}}</span> <span class="headerTitleTxt">{{headerLine}}</span> <span class="headerTitleTxt" style="border:none">{{headerOP}}</span></div>    
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
    data(){
    return {
     headerFac:"제 1 공장",
     headerLine: "1 라인",
     headerOP: "공정 1"
    }
    },
    method:{
      headerFac: function(message){
        console.log(message)
      }
    }
  }

</script>

<style scoped>
  #headerTitle{
    display:inline; 
    position:relative; 
    top:-10px; 
    font-size: 14px;
    font-weight: normal;
    color: rgba(255,255,255,0.7);
  }
  .headerTitleTxt{
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px dashed rgba(255,255,255,0.3);
  }

</style>