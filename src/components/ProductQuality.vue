<template>
<div class="productQuality" style="height:100%; width: 100%">
    <div id="serialNumber"><p class="productqualityTxt">{{productSerialNumber}}</p></div>
    <div id="frequencyImg"><img :src="imageSrc"></div>
    <div id="productQualityTxt"><p class="productqualityTxt">{{productQualityTxt}}</p></div>
</div>
</template>
<script>

export default {
    created() { 

    },
    seckets:{
        productSerialNum: function(s){
            console.log("SSSSSSSSSSSSSSSS", s)
            this.productSerialNumber = s
      }
  },
  
  data(){
  return {
      productSerialNumber:"",
      productQualityTxt: "Normal",
    //   imageSrc:require("../assets/loading.gif")
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#serialNumber, #productQualityTxt{
    height: 20%;
    color: #fff;
    text-align: center;
    font-weight: 800;
    font-size: 1.7em;
    background: #353535;
}
#frequencyImg{
    height: 60%;
    text-align: center;
}
.productqualityTxt{
    line-height: 60px;
}
img{ vertical-align: middle; height: 95%;}
</style>
