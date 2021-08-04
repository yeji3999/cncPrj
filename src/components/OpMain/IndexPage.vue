<template>
  <div>
    <Header></Header>
    <div id ="indexPageBack">
      <div class="Breadcrumbs">
        <p id="chkTest"></p>
        <div id="headerTitle"> <span class="headerTitleTxt" id="headerFacInfo" style="padding-left:0px"></span></div>    
      </div>
      <div style="width: 100%;">
        <div class="indexContent">
          <div id="indexBody">
            <!-- <p id="treeDataVal" style="color:white" ref="test">0{{treeDataVal}}</p> -->
            <!-- <button @click="testClick">btn</button> -->
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
          </div>
          <div id="info_pic">
            <div class="factory_pic">
              <Unity :stepNum="clickFacNum"></Unity>
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
  data: () => ({
    treeDataVal:"",
    clickFacNum: "0",
    factoryImg: "https://images.unsplash.com/photo-1613077639458-948512cbb9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
    treeData: [
        { text: 'View All Workshop', id: "0" , state: { expanded: false, selected: false }, data: { icon: '../../assets/factory_defalut.png' }},
        { text: 'Workshop 1',  state: { expanded: false, selected: false }, id: "1", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "11", children: [
             { text: 'Operation 1', id: "111" },
             { text: 'Operation 2', id: "112"},
             { text: 'Operation 3', id: "113"},
            ]},
            { text: 'Line 2', id: "12", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "121"},
             { text: 'Operation 5', id: "122"},
             { text: 'Operation 6', id: "123"},
            ]}
          ]},
        { text: 'Workshop 2',  state: { expanded: false, selected: false }, id: "2", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "21", children: [
             { text: 'Operation 1', id: "211"},
             { text: 'Operation 2', id: "211"},
             { text: 'Operation 3', id: "213"},
            ]},
            { text: 'Line 2', id: "22", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "221"},
             { text: 'Operation 5', id: "222"},
             { text: 'Operation 6', id: "223"},
            ]}
          ]},
        { text: 'Workshop 3',  state: { expanded: false, selected: false }, id: "3", data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', id: "31", children: [
             { text: 'Operation 1', id: "311"},
             { text: 'Operation 2', id: "311"},
             { text: 'Operation 3', id: "313"},
            ]},
            { text: 'Line 2', id: "32", state: { expanded: false, selected: false }, children: [
             { text: 'Operation 4', id: "321"},
             { text: 'Operation 5', id: "322"},
             { text: 'Operation 6', id: "323"},
            ]}
          ]},
    ]
    }),
    beforeUpdate(){
      // alert(this.treeData)
      // this.treeData
    },
    update(){
      alert("update")
    },
    methods: {
//       testClick(){
//         this.treeDataVal = Number(this.$refs.test.innerText)
//         this.opVal = this.$refs.test.innerText.length
// if(this.opVal==3){
//   alert("FEFEF")
// }
//         for(let i = 0; i < this.treeData.length; i++){

//           if( this.treeData[i].id == this.treeDataVal){
//             // this.treeData[i].state.selected = true
//             // this.treeData[i].state.expanded = true
//             this.$set(this.treeData[i].state, "selected", true);
//             this.$set(this.treeData[i].state, "expanded", true);
//             console.log(this.treeData)
//                                         alert(this.treeData[i].id)

//           }else{
//             // this.treeData[i].state.selected = false
//             // this.treeData[i].state.expanded = false
//             this.$set(this.treeData[i].state, "selected", false);
//             this.$set(this.treeData[i].state, "expanded", false);
//             // this.treeData[i].unselect()
//           }
//         if(( this.opVal == 3) && (this.treeDataVal == this.treeData[i].id)){
//           alert("SSSSSSSSSS")
//         }


//         }
//       },
      onSelected: function(node) {       
      this.clickFacNum = node.id
      switch(node.id){
        case 0:
          document.getElementById("headerFacInfo").innerText = "View All Factory"               
          break;
        case 1:
          document.getElementById("headerFacInfo").innerText = "Workshop 1"               
          break;
        case 2 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2"
          break;
        case 3 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3"
          break;
        case 11 :
          document.getElementById("headerFacInfo").innerText = "Workshop 1  |  Line "
          break;
        case 12 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 1  |  Line 2"
          break;
        case 21 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 1"
          break;
        case 22 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 2  |  Line 2"
          break;
        case 31 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 1"
          break;
        case 32 :
          document.getElementById("headerFacInfo").innerText  = "Workshop 3  |  Line 2"
          break;
        default:
          document.getElementById("headerFacInfo").innerText = "View All Factory"
        }
        if( String(node.id).length == 3 ) {
          this.$router.push({ path: "/op" + node.id })
        }
      },
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
  }

  #indexBody {
    margin-top: 20px;
    height: 80vh;
    font-size: 25px;
    width: 20%;
    background-color: #1E1E1E;
    color: rgb(201, 209, 217);
    padding: 10px 20px 10px 20px; /*위 오른쪽 아래 왼쪽*/
    border-radius: 7px;
    border: 2px solid #616161;
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
