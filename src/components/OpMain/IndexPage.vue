<template>
  <div>
    <Header></Header>
    <!-- <Menu @closeNav="closeNavEvt" ></Menu> -->
    <div style="padding: 80px 30px 30px 40px;" >
      <div style="width: 100%;">
        <div id="indexHeader">
          <h1>HN 브레이크 패드 부품 공장 모니터링 시스템</h1>
        </div>
        <div class="Breadcrumbs">
          <div id="indexBody">
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
          </div>
          <div id="info_pic" >
            <div class="factory_pic"></div>
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
    factoryImg: "'../../assets/factory2.jpg'",
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
      }
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
  .Breadcrumbs {
    width: 100%;
  }
  #indexBody, #info_pic{
    display: inline-block; 
    width: 50%;
    vertical-align: top;
  }
  #info_pic {
    padding: 21px 2px 12px 20px; /*위 오른쪽 아래 왼쪽*/
    float: right;
    
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
    height: 80px;
  }
  #indexBody {
    margin-top: 20px;
    height: 500px;
    
  }
  .headerTitleTxt{
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px dashed rgba(255,255,255,0.3);
  }
  .factory_pic {
    width: 100%;
    height: 500px;
    background-repeat:no-repeat;
    background-image: url("../../assets/factory2.jpg");
    background-size:cover;
    border-radius: 7px;
  }
</style>
