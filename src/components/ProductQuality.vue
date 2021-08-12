<template>
<div class="productQuality" style="height:100%; width: 100%">
    <!-- <button @click="test()">btn</button> -->
    <div id="serialNumber"><p class="productqualityTxt">{{productSerialNumber}}</p></div>
    <div id="loadingImg" :style="{display:loadingShow}" ><img :src="loadingImageSrc"></div>
    <div id="frequencyImg" :style="{display:frequencyShow}"><img :src="frequncyImageSrc"></div>
    <div id="productQualityTxt">
        <p class="productqualityTxt">{{productQualityTxt}} {{productQualityPercentage}} {{productQualityCode}}</p>
    </div>
</div>
</template>
<script>

export default {
    created() { 

    },
    // start가 오면 로딩중 이미지, 예측중입니다 텍스트, 이전 예측 결과 text 숨기거나 지우기
    // end가 오면 시리얼 넘ㅂㅓ, 결과 이미지 url 다운, 품질 정보(13개 중 한 개), 예측 정확도(소수 둘째 자리 까지) 띄우기
    // 이미지 상대경로 public 밑에
    seckets:{
        qualityPredictStart: function(startInfo){
            console.log("sssssssssssssssssssstartInfo",startInfo)
      },
        qualityPredictEnd: function(endInfo){
            console.log("eeeeeeeeeeeeeeeeeeeeeendInfo",endInfo)
      },
      
  },
  data(){
  return {
      loadingShow:"none",
      frequencyShow: "block",
      productSerialNumber:"AAA",
      productQualityTxt: "Abnormal",
      productQualityPercentage:"22%",
      productQualityCode:"T8080 Broken",
      loadingImageSrc:require("../../public/testFolder/hourglass.gif"),
      frequncyImageSrc:require("../../public/predictImg/item-A202108051030065.jpeg")
    }
  },
  methods:{
      test(){
          this.imageSrc = require("../../public/testFolder/logo.png")
      }
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
    background: #1d1d1d;
}
#frequencyImg{
    height: 60%;
    text-align: center;
}
.productqualityTxt{
    line-height: 60px;
}
/* img{
    height: 30%;
    position: relative;
    top: 35%;
} */
#frequencyImg > img{
    width: 100%;
}
</style>
