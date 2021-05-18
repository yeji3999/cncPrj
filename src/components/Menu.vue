<template>
  <div :style="{left: navPosition}" class="navigation" >

      <v-list 
        v-for="item in items" 
        :key="item.title"
        class="py-0"
        dark
       >
        <div v-if="!item.items">
          <v-list-item 
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-title >{{item.title}}</v-list-item-title>
          </v-list-item>
        </div>

        <v-list-group
          v-else
          no-action
          
        >
        <!-- factory 1depth-->
          <template v-slot:activator>
            <v-list-item-title>{{item.title}}</v-list-item-title>  
          </template>

          <div 
            v-for="item in item.items"
            :key="item.title"
          >
            <v-list-group
              v-if="item.items"
              no-action
              sub-group
            >
            <!-- line 2depth-->
              <template v-slot:activator> 
                <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
              </template>
              
              <!-- op 3depth-->
              <v-list-item
                v-for="(item, i) in item.items"
                :key="i"
                :to="item.route"
              >
                <v-list-item-title>{{item.title}}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-item 
              v-else
              :to="item.route"
            >
            <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </div>

        </v-list-group>

      </v-list>

  <div :style="{left: closePosition }" id="closeNav" @click="closeNav"></div>

</div>
</template>

<script>
export default {
  name: 'navigation',
    data(){
    return {
      navPosition:"0px",
      closePosition : "200px",
        items: [
          { title: '제 1 공장',
            items:[
              { title: '1 라인',
                items:[
                  { icon: 'mdi-factory',  title: '공정 1', route: '/3depth1' },
                ]
              },
              { title: '2 라인',
                items:[
                  { icon: 'mdi-factory',  title: '공정 2', route: '/3depth1' },
                  { icon: 'mdi-factory',  title: '공정 3', route: '/3depth2' }
                ]
              },
            ]
          },
          { title: '제 2 공장',
            items:[
              { title: '3 라인',
                items:[
                  { icon: 'mdi-factory',  title: '공정 4', route: '/3depth1' },
                  { icon: 'mdi-factory',  title: '공정 5', route: '/3depth2' }
                ]
              }
            ]
          },
        ],
    }
  },
    methods:{
    closeNav: function(){
      if(this.navPosition == "0px"){
      this.navPosition = "-200px";
      this.closePosition = "0px";
      this.$emit('closeNav', 'true');
      }
      else{
      this.navPosition = "0px";
      this.closePosition = "200px";
      this.$emit('closeNav', 'false');
      }
    }
  }
}
</script>

<style>
#closeNav{
  position: fixed;
    top: 50%;
    margin-top: -26px;
    width: 26px;
    height: 52px;
    left: 200px;
    z-index: 9999;
    background: url('../assets/close_nav.png') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    }
.navigation {
      /* background-color: #343B43; */
      background: #1E1E1E;
      width: 200px;
      height: calc(100% - 60px);
      bottom: 0px;
      z-index: 9999;
      position: fixed;
      font-size: 23px
}
</style>