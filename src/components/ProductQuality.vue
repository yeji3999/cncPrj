<template>
<div class="productQuality" style="height:100%; width: 100%">
    <div id="serialNumber"><p class="productqualityTxt">{{productSerialNumber}}</p></div>
    <div id="loadingImg" :style="{display:loadingShow}" ><img :src="loadingImageSrc"></div>
    <div id="NoImg" :style="{display:noImgShow}"><img :src="NoImgSrc">
        <span id="noImgAbnormalTxt" :style="{display:abnormalTxtShow,}">Bad Quality, {{abnormalTxt}}</span>
    </div>
    <div id="frequencyImg" :style="{display:frequencyShow}"><img :src="frequencyImageSrc">
        <span id="abnormalTxt" :style="{display:abnormalTxtShow}">Bad Quality, {{abnormalTxt}}</span>
    </div>
    <div id="productQualityTxt">
        <p class="productqualityTxt" :style="{color:abnormalColor}">{{productQualityTxt}} {{productQualityPercentage}}</p>
    </div>
</div>
</template>
<script>

export default {
    // start가 오면 로딩중 이미지, 예측중입니다 텍스트, 이전 예측 결과 text 숨기거나 지우기
    // end가 오면 시리얼 넘버, 결과 이미지 url 다운, 품질 정보(13개 중 한 개), 예측 정확도-acc(소수 셋째 자리 까지) 띄우기
    // 이미지 상대경로 public 밑에

    created(){
        this.$socket.emit('recentlyPredictInfo')
    },
    sockets:{
        qualityPredictStart: function(startInfo){
            this.loadingShow = "block"
            this.frequencyShow = "none"
            this.noImgShow = "none"
            this.loadingImageSrc = require("../../public/productQualityImg/loading2_18.gif")
            this.productSerialNumber = startInfo.sn
            this.productQualityTxt = "Predicting..."
            this.productQualityPercentage = ""
            this.abnormalColor = "#f5faff"
      },
        qualityPredictEnd: function(endInfo){
            this.loadingShow = "none"
            this.frequencyShow = "block"
            this.noImgShow = "none"
            this.productSerialNumber = endInfo.sn
            this.fnName = endInfo.fn
            try{
                this.frequencyImageSrc = 'http://9.8.100.153:8082/predictImg/' + this.fnName
            }catch(error){
                console.log(error)
                this.loadingShow = "none"
                this.frequencyShow = "none"
                this.noImgShow = "block"
                this.productQualityTxt = "none"
                this.NoImgSrc = require("../../public/productQualityImg/noImage.png")
            }
            this.productQualityPercentage = endInfo.acc + "%"
            this.abnormalTxt = this.productQualityCode
            this.productQualityTxt = "Normal"
            if(endInfo.predict!="0"){
                this.abnormalTxtShow = "block"
                this.productQualityTxt = "Abnormal"
                this.abnormalColor = "#c72a2a"
                switch(endInfo.predict){
                    case "1":
                        this.abnormalTxt = "T8080 Wear"
                        break;     
                    case "2":
                        this.abnormalTxt = "T2030 Wear"
                        break;                        
                    
                    case "3":
                        this.abnormalTxt = "T2020 Wear"
                        break;                        
                    
                    case "4":
                        this.abnormalTxt = "T6070 Wear"
                        break;                        
                    
                    case "5":
                        this.abnormalTxt = "T6060 Wear"
                        break;                        
                    
                    case "6":
                        this.abnormalTxt = "T1212  Wear"
                        break;                        
                    
                    case "7":
                        this.abnormalTxt = "T8080 Broken"
                        break;                        
                    
                    case "8":
                        this.abnormalTxt = "T2030 Brokenr"
                        break;                        
                    
                    case "9":
                        this.abnormalTxt = "T2020 Broken"
                        break;                        
                                                     
                    case "10":
                        this.abnormalTxt = "T6070 Broken"
                        break;                        
                    
                    case "11":
                        this.abnormalTxt = "T6060 Broken"
                        break;                        

                    case "12":
                        this.abnormalTxt = "T1212 Broken"
                        break;                        
                    
                    default:
                        this.abnormalTxt = ""
                        break;
                }

            }else if(endInfo.predict=="0"){
                this.abnormalTxtShow = "none"
                this.productQualityTxt = "Normal"
                this.abnormalColor = "#f5faff"
            }
      }, 
  },
  data(){
  return {
      abnormalColor: "",
      abnormalTxtShow:"none",
      abnormalTxt:"",
      fnName:"",
      loadingShow:"block",
      frequencyShow: "none",
      noImgShow:"none",
      productSerialNumber:"",
      productQualityTxt: "",
      productQualityPercentage:"",
      productQualityCode:"",
      loadingImageSrc:require("../../public/productQualityImg/logo.png"),
      frequencyImageSrc:"",
      NoImgSrc:""
    }
  }
}
</script>

<style>
#serialNumber, #productQualityTxt{
    height: 20%;
    color: #f5faff;
    text-align: center;
    font-weight: 700;
    font-size: 1.6em;
    background: #1d1d1d;
    overflow: hidden;
}
#frequencyImg, #loadingImg, #NoImg{
    height: 60%;
    text-align: center;
    overflow: hidden;
    border-left: solid 0.8rem #1d1d1d;
    border-right: solid 0.8rem #1d1d1d;
}
#freauencyImg{
    background: rgb(0, 0, 4);
}
.productqualityTxt{
    line-height: 60px;
}
#loadingImg > img, #NoImg > img{
    height: 30%;
    position: relative;
    top: 40%;
}
#frequencyImg > img{
    height: 100%;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #424242;
}
#noImgAbnormalTxt{
    display: block;
    z-index: 99;
    position: relative;
    color: #fbd3a4;
    top: -50px;
    font-size: 1.6em;
    font-weight: 700;
    font-family: helvetica;
}
#abnormalTxt{
    display: block;
    z-index: 99;
    position: relative;
    color: #fbd3a4;
    top: -160px;
    font-size: 1.6em;
    font-weight: 700;
    font-family: helvetica; 
}
</style>
