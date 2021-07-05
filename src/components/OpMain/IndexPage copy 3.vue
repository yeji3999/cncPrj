<template>
  <div>
    <Header></Header>
    <!-- <Menu @closeNav="closeNavEvt" ></Menu> -->
    <div style="padding: 100px 30px 30px 40px;" >
      <div style="width: 100%;">
        <div id="indexHeader">
          <h1>HN 브레이크 패드 부품 공장 모니터링 시스템</h1>
        </div>
        <div class="indexContent">
          <div id="indexBody">
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
          </div>
          <div id="info_pic" >
            <div class="factory_pic" v-bind:style="{backgroundImage:'url(' +factoryImg+ ')' }"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'
// import Menu from '../Menu.vue'
import tree from 'liquor-tree'

export default {
  components: {
    Header,
    // Menu,
    tree
  },
  data: () => ({
    factoryImg: "https://images.unsplash.com/photo-1587637885537-bb61f9741cff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    treeData: [
        { text: '제 1공장', state: { expanded: true, selected: true }, data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: '1라인', children: [
             { text: '공정1', id: '/op1' },
             { text: '공정2', id: '/op2' } 
            ]},
            { text: '2라인', children: [
              { text: '공정3', id: '/op3' },
              { text: '공정4', id: '/op4' }
            ]}
          ]},
          { text: '제 2공장', data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: '3라인', children: [
             { text: '공정5', id: '/op5' }
            ]}
          ]}
    ]
    }),

    methods: {
      onSelected: function(node) {
        
        if( node.id.includes('/') ) {
          this.$router.push({ path: node.id })
        }
        else if(node.text == ("제 1공장")){
          this.factoryImg = "https://images.unsplash.com/photo-1587637885537-bb61f9741cff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }
        else if(node.text == ("제 2공장")){
          this.factoryImg = "https://images.unsplash.com/photo-1587638289018-e8f17dfaa23f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        }
      },

    /* closeNavEvt: function(message) {
      if(message =="true"){
        this.mainPpadding = "80px 30px 30px 40px";
      }
      else if(message =="false"){
        this.mainPpadding = "80px 30px 30px 240px";
      }
    } */
  }
  }
</script>

<style scoped>
  .indexContent {
    width: 100%;
  }
  #indexBody, #info_pic{
    display: inline-block; 
    /* width: 50%; */
    vertical-align: top;
  }
  #info_pic {
    padding: 21px 2px 12px 20px; /*위 오른쪽 아래 왼쪽*/
    float: right;  
    width: 70%;
  }
  #indexHeader, #indexBody{
    color: rgb(201, 209, 217);
    padding: 10px 20px 10px 20px; /*위 오른쪽 아래 왼쪽*/
    background-color: #1E1E1E;
    border-radius: 7px;
    border: 0.5px solid #3b3d3e;
  }
  #indexHeader {
    width: 100%;
    height: 70px;
    line-height: 50px;
    text-align: center; 
  }
  #indexBody {
    margin-top: 20px;
    height: 700px;
    font-size: 25px;
    width: 30%;
  }
  .headerTitleTxt{
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px dashed rgba(255,255,255,0.3);
  }
  .factory_pic {
    width: 100%;
    height: 700px;
    background-repeat:no-repeat;
    /* background-image: url('../../assets/factory2.jpg'); */
    background-size:cover;
    border-radius: 7px;
    
  }
</style>
