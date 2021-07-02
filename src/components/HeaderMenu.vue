<template>
    <div class="topComponentMenu" style="z-index:9999">
        <button @click="menuDownEvt" style="margin-left:5px; margin-right: 30px;"><i class="fa fa-th-large fa-2x" aria-hidden="true"></i></button>
        <button @click="chartmenuDownEvt"><i class="fa fa-bar-chart fa-2x" aria-hidden="true"></i></button>
        <div style="background:white; position:fixed; border-radius:10px" :style="{display:menuShow}">
            <ul>
                <!-- <li @click="openAllMenu">All</li> -->
                <li @click="closeOP" style="border-radius:10px 10px 0px 0px">Running Status</li>
                <li @click="closePR">Total Production</li>
                <li @click="closeCT">Cycle Time</li>
                <li @click="closeMae">MAE</li>
                <li @click="closeAnomal" style="border-radius:0px 0px 10px 10px">Anomaly Detection</li>
            </ul>
        </div>
        <div style="background:white; position:fixed; border-radius:10px" :style="{display:chartmenuShow}">
            <ul>
                <!-- <li @click="openAllChartMenu">All</li> -->
                <li @click="closeChart" style="border-radius:10px 10px 0px 0px">grafana chart</li>
                <li @click="closeRealChart" style="border-radius:0px 0px 10px 10px">Realtime Chart</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default({
data:() =>({
    menuShow:"none",
    chartmenuShow:"none"
}),
methods:{
    chartmenuDownEvt(){
        if(this.chartmenuShow == "block"){
            this.chartmenuShow = "none";
        }else if(this.chartmenuShow == "none"){
            this.chartmenuShow = "block";
            this.menuShow = "none";
        }       
    },
    menuDownEvt(){
        if(this.menuShow == "block"){
            this.menuShow = "none";
        }else if(this.menuShow == "none"){
            this.menuShow = "block";
            this.chartmenuShow = "none";
        }  
    },
    closeOP(){
      this.$emit("closeOP",0);
      this.menuShow = "none";
    },
    closePR(){
      this.$emit("closePR",1);
      this.menuShow = "none";
    },
    closeCT(){
      this.$emit("closeCT",2);
      this.menuShow = "none";
    },
    closeMae(){
      this.$emit("closeMae",3);
      this.menuShow = "none";
    },
    closeAnomal(){
      this.$emit("closeAnomal",4);
      this.menuShow = "none";
    },
    closeRealChart(){
      this.$emit("closeRealChart",5)
      this.chartmenuShow = "none";
    },
    closeChart(){
      this.$emit("closeChart",6)
      this.chartmenuShow = "none"; 
    },
    // openAllMenu(){
    //   this.$emit("openAllMenu","allmenu")
    //   this.menuShow = "none";  
    // },
    // openAllChartMenu(){
    //  this.$emit("openAllChartMenu","allchartmenu")
    //  this.chartmenuShow = "none"; 
    // }
    }

})
</script>


<style scoped>
button{
    color: #fff;
    margin-right: 15px; 
}
button:hover{
    color: lightblue;
}
.topComponentMenu{
    position: relative;
    float: right;
    right: 10px;
}
li{
    list-style: none;
    line-height: 38px;
    text-align: center;
    font-weight: 600;
    padding: 3px;
    font-size: 14px;
    background: rgb(240, 246, 255);
    width: 150px;
}
li:hover{
    background: lightblue;
}
</style>
