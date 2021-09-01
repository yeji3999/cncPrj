<template>
<div class="about">
      <div ref="left" id="drag-elements" style="display:flex">
        <div>Element 1</div>
        <div>Element 2</div>
        <div>Element 3</div>
      </div>
    <div ref="right" id="drop-target">
              <div>Element 5</div>
        <div>Element 6</div>
        <div>Element 7</div>
    </div>

</div>
</template>

<script > 
import dragula from 'dragula' 
export default { 
  mounted(){ const { left,right } = this.$refs; 
  dragula([ left //어디서 어디로 옮기는지 
  ]),
   dragula([ right //어디서 어디로 옮기는지 
  ])  } }
   </script>




