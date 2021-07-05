<template>
  <div>
    <Header></Header>
    <div id="indexPageContent">
      
      <div id="indexHeader">
        <p id="indexTitle">HN 브레이크 패드 부품 공장 모니터링 시스템</p>
      </div>
       <div id="indexBody">
         <div id="indexTree">
        <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
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
#indexPageContent{
  width: 60%;
  height: auto;
  background: #111217;
  margin: auto;
  position: relative;
  top: 250px;
}
#indexHeader{
  color:#38e09a;
  padding: 20px;
  text-align: center;
}
#indexTitle{
  font-size: 2em;
  font-weight: 600;
  background: #1e1e1e;
  padding: 10px;
}
#indexBody{
  padding: 20px;
  font-size: 25px;
  margin: auto;
}
#indexTree{
  background: #1e1e1e;
  padding: 10px; 
}
.tree-arrow.has-child:after{
  border: 2px solid red;
}
</style>
