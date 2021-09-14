<template>
  <div>
    <Header></Header>
    <div id ="indexPageBack">
      <div class="Breadcrumbs">
        <p id="nowFacNum" style="display:none"></p>
        <div id="headerTitle">
          <span class="headerTitleTxt" id="headerFacInfo" style="padding-left:0px; font-weight:500">View All Factory</span>
          <button @click="unityRefreshBtn" id="unityRefresh" style="margin-left:5px; margin-right: 5px; float:right"><i class="fa fa-retweet fa-2x" aria-hidden="true"></i></button>  
          <button @click="allFactroyBtn" id="allFactroy" style="margin-left:5px; margin-right: 20px; float:right"><i class="fa fa-industry fa-2x" aria-hidden="true"></i></button> 
          </div>
      </div>
      <div style="width: 100%; margin-top:10px">
        <div class="indexContent">
          <div id="indexBody" :style="{width:indexNavWidth}">
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
            <div id="closeIndexNav" @click="closeIndexNav" :style="{left:indexNavBtn}"></div>
          </div>
          <div id="info_pic" :style="{width:infoWidth}">
            <div class="factory_pic">
              <Unity :stepNum="clickFacNum" ref="Unity"></Unity>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import tree from 'liquor-tree'
import Unity from '../Unity.vue'
export default {
  components: {
    Header,  Unity
    ,tree,
  },
  data: () => ({
    saveUnityClickNum:"0",
    treeDataVal:"",
    saveNodeId: "0",
    clickFacNum: "0",
    line1Show: true,
    op11Show: true,
    op12Show: true,
    indexNavWidth: "15%",
    indexNavBtn: "14.5%",
    infoWidth: "85%",
    indexNav: false,
    treeData: [
        { text: 'View All Workshop', id: "0" , state: { expanded: false, selected: true }, data: { icon: '../../assets/factory_defalut.png' }},
        { text: 'Workshop 1',  state: { expanded: false, selected: false }, id: "1", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "11", state: { expanded: false, selected: false }, options:{autoCheckChildren:true}, children: [
             { text: 'Operation 1', id: "111" },
             { text: 'Operation 2', id: "112" , state:{disabled: true}},
             { text: 'Operation 3', id: "113" , state:{disabled: true}},
            ]},
            { text: 'Line 2', id: "12", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "121" , state:{disabled: true}},
             { text: 'Operation 5', id: "122" , state:{disabled: true}},
             { text: 'Operation 6', id: "123" , state:{disabled: true}},
            ]}
          ]},
        { text: 'Workshop 2',  state: { expanded: false, selected: false }, id: "2", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "21", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 1', id: "211" , state:{disabled: true}},
             { text: 'Operation 2', id: "212" , state:{disabled: true}},
             { text: 'Operation 3', id: "213" , state:{disabled: true}},
            ]},
            { text: 'Line 2', id: "22", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "221" , state:{disabled: true}},
             { text: 'Operation 5', id: "222" , state:{disabled: true}},
             { text: 'Operation 6', id: "223" , state:{disabled: true}},
            ]}
          ]},
        { text: 'Workshop 3',  state: { expanded: false, selected: false }, id: "3", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "31", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 1', id: "311" , state:{disabled: true}},
             { text: 'Operation 2', id: "312" , state:{disabled: true}},
             { text: 'Operation 3', id: "313" , state:{disabled: true}},
            ]},
            { text: 'Line 2', id: "32", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "321" , state:{disabled: true}},
             { text: 'Operation 5', id: "322" , state:{disabled: true}},
             { text: 'Operation 6', id: "323" , state:{disabled: true}},
            ]}
          ]
        }
      ]
    }),
    methods: {
      // unityMove(event){
      //   const targetId = event.currentTarget.id;
      //   console.log(targetId);
      //   document.getElementById("nowFacNum").innerText = targetId 
      //   this.clickFacNum = targetId 
      //   this.$refs.Unity.unityRefreshEvt();
      // },
      closeIndexNav(){
        if(this.indexNav === false){
          this.indexNavWidth = "2%"
          this.indexNavBtn = "2%"
          this.infoWidth = "97%"
          this.indexNav = true
        }else{
          this.indexNavWidth = "15%"
          this.indexNavBtn = "14.5%"
          this.infoWidth = "85%"
          this.indexNav = false
        }
      },
      unityRefreshBtn(){
        this.saveNodeId = document.getElementById("nowFacNum").innerText
        this.clickFacNum = this.saveNodeId
        this.$refs.Unity.unityRefreshEvt();
      },
      allFactroyBtn(){
        var treeOpen = document.getElementsByClassName("tree-content")
        this.clickFacNum = "0"
        document.getElementById("nowFacNum").innerText = "0"
        this.$refs.Unity.unityRefreshEvt();
        document.getElementById("headerFacInfo").innerText = "View All Factory"
        treeOpen[0].click();

      },
      // unityBeforeStepBtn(){ 
      //   var clickNum = document.getElementById("nowFacNum").innerText
      //   console.log(clickNum)
      //   if(parseInt(clickNum.length) == 1){
      //     this.clickFacNum = "0"
      //   }else if(parseInt(clickNum.length) == 2){
      //     this.clickFacNum = clickNum.substring(0,1)
      //   }
      //   this.$refs.Unity.unityRefreshEvt(); 
      // },
      onSelected: function(node) {
        document.getElementById("nowFacNum").innerText = node.id
        this.clickFacNum = node.id
        this.$refs.Unity.unityRefreshEvt();


        if(String(this.clickFacNum).length == 3 ) {
          if(this.clickFacNum == 111){
            this.$router.push({ path: "/op" + this.clickFacNum })
          }else{
            return false
          }
        }

        switch(node.id){
          case "0":
            document.getElementById("headerFacInfo").innerText = "View All Factory"             
            break;
          case "1":
            document.getElementById("headerFacInfo").innerText = "Workshop 1"               
            break;
          case "2" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 2"
            break;
          case "3" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 3"
            break;
          case "11" :
            document.getElementById("headerFacInfo").innerText = "Workshop 1  |  Line 1"
            break;
          case "12" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 1  |  Line 2"
            break;
          case "21" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 1"
            break;
          case "22" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 2"
            break;
          case "31" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 1"
            break;
          case "32" :
            document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 2"
            break;
          default:
            document.getElementById("headerFacInfo").innerText = "View All Factory"
          }
      }
    }
  }
</script>

<style scoped>
  #indexPageBack{
    padding: 80px 20px 20px 30px;
    background:#1b2329;
    height: 100vh;
  }
  .indexContent {
    width: 100%;
    display: inline-block;
  }
  #indexBody, #info_pic{
    display: inline-block; 
    /* vertical-align: top; */
  }
  #info_pic {
    padding: 0px 2px 12px 20px; /*위 오른쪽 아래 왼쪽*/
    float: right;  
    width: 85%;
    overflow: hidden;
  }
  #indexBody {
    /* margin-top: 20px; */
    height: 88vh;
    font-size: 20px;
    width: 15%;
    background-color: #1E1E1E;
    color: rgb(201, 209, 217);
    padding: 10px 20px 10px 20px; /*위 오른쪽 아래 왼쪽*/
    border-radius: 7px;
    border: 2px solid #9c9c9c;
    overflow: auto;
  }
  ::-webkit-scrollbar {
    background-color: #1E1E1E;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #1E1E1E;
  }
  .factory_pic {
    width: 100%;
    height: 88vh;
    background-repeat:no-repeat;
    /* background-image: url('../../assets/factory2.jpg'); */
    background-size:cover;
    border-radius: 7px;
    border: 2px solid #9c9c9c;
  }

  #headerTitle{
    display:inline; 
    position:relative; 
    top:-10px; 
    /* margin-left:75px;  */
    font-size: 14px;
    font-weight: normal;
    color: rgba(255,255,255,0.7);
  }
  .headerTitleTxt{
    padding-left: 10px;
    padding-right: 10px;
    /* border-right: 1px dashed rgba(255,255,255,0.3); */
  }
  .tree{
    overflow: hidden;
  }
  button:hover{
    color: lightblue;
}
#closeIndexNav{
  position: fixed;
  top: 50%;
  margin-top: -26px;
  width: 26px;
  height: 52px;
  left: 14.5%;
  z-index: 9999;
  background: url('../../assets/close_nav.png') no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  transition: all .5s
}
</style>
