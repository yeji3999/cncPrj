<template>
  <div>
    <Header></Header>
    <!-- <Menu @closeNav="closeNavEvt" ></Menu> -->
    <div>
      <div id="back" v-bind:style="{backgroundImage:'url(' +factoryImg+ ')' }">
        <div style="background:rgba(0,0,0,0.3">
        <div class="indexContent">
          <div id="indexBody">
            <tree :data="treeData" class="tree" @node:selected="onSelected"></tree>
          </div>
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
#back{
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

  .indexContent {
    width: 100%;
  }
  #indexBody, #info_pic{
    display: inline-block; 
    /* width: 50%; */
    vertical-align: top;
  }
  #indexBody{
    /* color: rgb(201, 209, 217); */
    color: #000;
    padding: 50px 20px 10px 20px; /*위 오른쪽 아래 왼쪽*/
    /* background-color: #1E1E1E; */
    background: rgba(255,255,255,0.8);
    /* border-radius: 7px;
    border: 0.5px solid #3b3d3e; */
    margin-top: 60px;
    position: relative;
    left: 130px;
    height: 100vh;
    font-size: 25px;
    width: 20%;
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
