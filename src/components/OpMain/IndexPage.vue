<template>
  <div>
    <Header></Header>
    <!-- <Menu @closeNav="closeNavEvt" ></Menu> -->
    <div id ="indexPageBack">
      <div style="width: 100%;">
        <!-- <div id="indexHeader">
          <h1>HN 브레이크 패드 부품 공장 모니터링 시스템</h1>
        </div> -->
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
    factoryImg: "https://images.unsplash.com/photo-1613077639458-948512cbb9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
    treeData: [
        { text: 'Workshop 1', state: { expanded: true, selected: true }, data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 1', children: [
             { text: 'Operation 1', id: '/op1' },
             { text: 'Operation 2', id: '/op2' } 
            ]},
            { text: 'Line 2', children: [
              { text: 'Operation 3', id: '/op3' },
              { text: 'Operation 4', id: '/op4' }
            ]}
          ]},
          { text: 'Workshop 2', data: { icon: '../../assets/factory_defalut.png' }, children: [
            { text: 'Line 3', children: [
             { text: 'Operation 5', id: '/op5' }
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
          this.factoryImg = "https://images.unsplash.com/photo-1613077639458-948512cbb9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
        }
        else if(node.text == ("제 2공장")){
          this.factoryImg = "https://images.unsplash.com/photo-1599728613885-bc908f9d6d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
</style>
