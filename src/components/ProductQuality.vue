<template>
<div class="productQuality" style="height:100%; width: 100%">
    <!-- <button @click="test()">btn</button> -->
    <div id="serialNumber"><p class="productqualityTxt">{{productSerialNumber}}</p></div>
    <div id="loadingImg" :style="{display:loadingShow}" ><img :src="loadingImageSrc"></div>
    <div id="NoImg" :style="{display:noImgShow}"><img :src="NoImgSrc"></div>
    <div id="frequencyImg" :style="{display:frequencyShow}"><img :src="frequncyImageSrc">
            <span id="abnormalTxt" :style="{display:abnormalTxtShow}">Bad Quality, {{abnormalTxt}}</span>
    </div>
    <div id="productQualityTxt">
        <p class="productqualityTxt">{{productQualityTxt}} {{productQualityPercentage}}</p>
    </div>
</div>
</template>
<script>

export default {
    created() { 

    },
    // start가 오면 로딩중 이미지, 예측중입니다 텍스트, 이전 예측 결과 text 숨기거나 지우기
    // end가 오면 시리얼 넘ㅂㅓ, 결과 이미지 url 다운, 품질 정보(13개 중 한 개), 예측 정확도-acc(소수 셋째 자리 까지) 띄우기
    // 이미지 상대경로 public 밑에
    sockets:{
        qualityPredictStart: function(startInfo){
            console.log("sssssssssssssssssssstartInfo",startInfo)
            this.loadingShow = "block"
            this.frequencyShow = "none"
            this.noImgShow = "none"
            this.loadingImageSrc = require("../../public/testFolder/nRotate.gif")
            this.productSerialNumber = startInfo.sn
            this.productQualityTxt = "Predicting..."
      },
        qualityPredictEnd: function(endInfo){
            console.log("eeeeeeeeeeeeeeeeeeeeeendInfo",endInfo)
            this.loadingShow = "none"
            this.frequencyShow = "block"
            this.noImgShow = "none"
            this.productSerialNumber = endInfo.sn
            this.fnName = endInfo.fn
            try{
                this.frequncyImageSrc = require("../../public/predictImg/" + this.fnName ) 
            }catch(error){
                console.log(error)
                this.loadingShow = "none"
                this.frequencyShow = "none"
                this.noImgShow = "block"
                this.NoImgSrc = require("../../public/testFolder/noImage.png")
            }
            this.productQualityPercentage = endInfo.acc + "%"
            this.abnormalTxt = this.productQualityCode
            this.productQualityTxt = "Normal"
            if(endInfo.code!="0"){
                this.abnormalTxtShow = "block"
                switch(endInfo.code){
                    case "1":{
                        this.abnormalTxt = "T8080 Wear"
                        break;
                    }
                    case "2":{
                        this.abnormalTxt = "T2030 Wear"
                        break;                        
                    }
                    case "3":{
                        this.abnormalTxt = "T2020 Wear"
                        break;                        
                    }
                    case "4":{
                        this.abnormalTxt = "T6070 Wear"
                        break;                        
                    }
                    case "5":{
                        this.abnormalTxt = "T6060 Wear"
                        break;                        
                    }
                    case "6":{
                        this.abnormalTxt = "T1212  Wear"
                        break;                        
                    }
                    case "7":{
                        this.abnormalTxt = "T8080 Broken"
                        break;                        
                    }
                    case "8":{
                        this.abnormalTxt = "T2030 Brokenr"
                        break;                        
                    }
                    case "9":{
                        this.abnormalTxt = "T2020 Broken"
                        break;                        
                    }
                    case "10":{
                        this.abnormalTxt = "T6070 Broken"
                        break;                        
                    }
                    case "11":{
                        this.abnormalTxt = "T6060 Broken"
                        break;                        
                    }
                    case "12":{
                        this.abnormalTxt = "T1212 Broken"
                        break;                        
                    }
                    default:{
                        this.abnormalTxt = ""
                        break;
                    }
                }

            }else if(endInfo.code=="0"){
                this.productQualityTxt = "Normal"
            }

      },
      
  },
  data(){
  return {
      abnormalTxtShow:"none",
      abnormalTxt:"",
      fnName:"",
      loadingShow:"block",
      frequencyShow: "none",
      noImgShow:"none",
      productSerialNumber:"",
      productQualityTxt: "",
      productQualityPercentage:"",
      productQualityCode:"T2030 Broken",
      loadingImageSrc:require("../../public/testFolder/logo.png"),
      frequncyImageSrc:"",
      NoImgSrc:""
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
    font-size: 1.6em;
    background: #1d1d1d;
}
#frequencyImg, #loadingImg, #NoImg{
    height: 60%;
    text-align: center;
    overflow: hidden;
}
.productqualityTxt{
    line-height: 60px;
}
#loadingImg > img, #NoImg > img{
    height: 30%;
    position: relative;
    top: 35%;
}
#frequencyImg > img{
    height: 100%;
    width: 100%;
}
#abnormalTxt{
    display: block;
    z-index: 99;
    position: relative;
    color: #fbd3a4;
    top: -130px;
    font-size: 1.6em;
    font-weight: 700;
    font-family: helvetica;
}

</style>
