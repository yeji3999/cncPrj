<template>
  <div>
    <Header></Header>
    <div id ="indexPageBack">
      <div class="Breadcrumbs">
        <p id="nowFacNum" style="display:none"></p>
        <div id="headerTitle">
          <span class="headerTitleTxt" id="headerFacInfo" style="padding-left:0px">View All Factory</span>
          <button @click="unityRefreshBtn" id="pageBackBtn" style="margin-left:5px; margin-right: 10px; float:right"><i class="fa fa-retweet fa-lg" aria-hidden="true"></i></button>  
          <button @click="allFactroyBtn" id="pageBackBtn" style="margin-left:5px; margin-right: 10px; float:right"><i class="fa fa-industry fa-lg" aria-hidden="true"></i></button> 
          </div>
      </div>
      <div style="width: 100%;">
        <div class="indexContent">
          <div id="indexBody">
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
          </div>
          <div id="info_pic">
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
    Header, tree, Unity
  },
  created(){
    setTimeout(() => {
      var treeChild = document.getElementsByClassName("tree-children")
      for(let i = 0; i < treeChild.length; i++){
        treeChild[i].className += ' closed'
      }
    }, 0);
  },
  data: () => ({
    saveUnityClickNum:"0",
    treeDataVal:"",
    saveNodeId: "0",
    clickFacNum: "0",
    treeData: [
        { text: 'View All Workshop', id: "0" , state: { expanded: true, selected: true }, data: { icon: '../../assets/factory_defalut.png' }},
        { text: 'Workshop 1',  state: { expanded: true, selected: false }, id: "1", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "11", state: { expanded: true, selected: false }, options:{autoCheckChildren:true}, children: [
             { text: 'Operation 1', id: "111" },
             { text: 'Operation 2', id: "112"},
             { text: 'Operation 3', id: "113"},
            ]},
            { text: 'Line 2', id: "12", state: { expanded: true, selected: false }, children: [
             { text: 'Operation 4', id: "121"},
             { text: 'Operation 5', id: "122"},
             { text: 'Operation 6', id: "123"},
            ]}
          ]},
        { text: 'Workshop 2',  state: { expanded: true, selected: false }, id: "2", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "21", state: { expanded: true, selected: false }, children: [
             { text: 'Operation 1', id: "211"},
             { text: 'Operation 2', id: "212"},
             { text: 'Operation 3', id: "213"},
            ]},
            { text: 'Line 2', id: "22", state: { expanded: true, selected: false }, children: [
             { text: 'Operation 4', id: "221"},
             { text: 'Operation 5', id: "222"},
             { text: 'Operation 6', id: "223"},
            ]}
          ]},
        { text: 'Workshop 3',  state: { expanded: true, selected: false }, id: "3", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "31", state: { expanded: true, selected: false }, children: [
             { text: 'Operation 1', id: "311"},
             { text: 'Operation 2', id: "312"},
             { text: 'Operation 3', id: "313"},
            ]},
            { text: 'Line 2', id: "32", state: { expanded: true, selected: false }, children: [
             { text: 'Operation 4', id: "321"},
             { text: 'Operation 5', id: "322"},
             { text: 'Operation 6', id: "323"},
            ]}
          ]},
    ]
    }),

    methods: {
      unityRefreshBtn(){
        this.saveNodeId = document.getElementById("nowFacNum").innerText
        this.clickFacNum = this.saveNodeId
        // console.log("uni",this.clickFacNum)
        // console.log("1111111111111122222222222222223333333333333",this.$refs.Unity)
        this.$refs.Unity.unityRefreshEvt(); 
      },
      allFactroyBtn(){
        this.clickFacNum = "0"
        console.log("al",this.clickFacNum)
        document.getElementById("nowFacNum").innerText = "0"
        this.$refs.Unity.unityRefreshEvt();
        let treeNode  = document.getElementsByClassName('tree-node')
        for(let i = 0; i<treeNode.length; i++){     
          if(treeNode[i].classList.contains("selected")){
            treeNode[i].classList.remove("selected")
            treeNode[0].classList.add("selected")
          }
        }
      },
      onSelected: function(node) { 
        let treeNode  = document.getElementsByClassName('tree-node')
        document.getElementById("nowFacNum").innerText = node.id
        
        this.clickFacNum = node.id
        this.$refs.Unity.unityRefreshEvt();
        console.log("onsel",document.getElementById("nowFacNum").innerText)

        if( String(this.clickFacNum).length == 3 ) {
            this.$router.push({ path: "/op" + this.clickFacNum })
          }

        for(let i = 0; i<treeNode.length; i++){      
          if(node.id == treeNode[i].dataset.id){
            treeNode[i].className += ' selected';
                  if(treeNode[i].children[1].className == "tree-children closed"){
        treeNode[i].children[1].className+= ' opened'
        treeNode[i].children[1].classList.remove("closed") 
       }
          }else if(node.id != treeNode[i].dataset.id){
            treeNode[i].classList.remove('selected')
          }
        }

  //         for(let i = 0; i<treeNode.length; i++){
  //   if(number == treeNode[i].dataset.id){
  //     treeNode[i].className += ' selected';
  //     if(treeNode[i].children[1].className == "tree-children closed"){
  //       treeNode[i].children[1].className+= ' opened'
  //       treeNode[i].children[1].classList.remove("closed") 
  //      }
  //   }else if(number != treeNode[i].dataset.id){
  //     treeNode[i].classList.remove('selected')
  //   }  
  // }
       
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
            document.getElementById("headerFacInfo").innerText = "Workshop 1  |  Line "
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
    padding: 100px 30px 30px 40px;
    background:#1b2329;
    height: 100vh;
  }
  .indexContent {
    width: 100%;
  }
  #indexBody, #info_pic{
    display: inline-block; 
    vertical-align: top;
  }
  #info_pic {
    padding: 21px 2px 12px 20px; /*위 오른쪽 아래 왼쪽*/
    float: right;  
    width: 80%;
    overflow: hidden;
  }
  #indexBody {
    margin-top: 20px;
    height: 80vh;
    font-size: 20px;
    width: 20%;
    background-color: #1E1E1E;
    color: rgb(201, 209, 217);
    padding: 10px 20px 10px 20px; /*위 오른쪽 아래 왼쪽*/
    border-radius: 7px;
    border: 2px solid #616161;
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
    height: 80vh;
    background-repeat:no-repeat;
    /* background-image: url('../../assets/factory2.jpg'); */
    background-size:cover;
    border-radius: 7px;
    border: 2px solid #616161;
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
  
</style>
