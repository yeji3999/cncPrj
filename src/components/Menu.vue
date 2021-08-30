<template>
  <div :style="{left: navPosition}" class="navigation" >
      <v-list 
        v-for="item in items" 
        :key="item.title"
        dark
        v-model="item.active"

       >
        <div v-if="!item.items">
          <v-list-item 
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-title @click="menuStepInfo(item.action)">{{item.title}}</v-list-item-title>
          </v-list-item>
        </div>
        <v-list-group
          v-else
          no-action 
        >
        <!--no-action: 왼쪽 패딩을 제거 -->

        <!-- factory 1depth-->
          <template v-slot:activator >
            <v-list-item 
            :to="item.route"
            >
            <!-- workshop -->
            <v-list-item-title @click="menuStepInfo(item.action)">{{item.title}}</v-list-item-title>
            </v-list-item>          
          </template>

          <div 
            v-for="item in item.items"
            :key="item.title"
          >
          <!-- line -->
            <v-list-group
              v-if="item.items"
              no-action
              sub-group 
            >
            <!-- line 2depth-->
              <template v-slot:activator> 
                <v-list-item-content>
                <v-list-item 
                  :to="item.route"
                >
                <v-list-item-title @click="menuStepInfo(item.action)">{{item.title}}</v-list-item-title>
                </v-list-item>                 
                </v-list-item-content>
              </template>
              
              <!-- op 3depth-->
              <v-list-item
                v-for="(item, i) in item.items"
                :key="i"
                :to="item.route"
              >
              <!-- op -->
                <v-list-item-title @click="menuStepInfo(item.action)">{{item.title}}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-item 
              v-else
              :to="item.route"
            >
            <v-list-item-title >{{item.title}}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </div>
        </v-list-group>
      </v-list>
  <div :style="{left: closePosition }" id="closeNav" @click="closeNav" ></div>
  
</div>
</template>

<script>
export default {
  name: 'navigation',
    data(){
    return {
      navPosition:"-200px",
      closePosition : "0px",
        items: [
          { title: 'Workshop 1', action: 1,
            items:[
              { title: 'Line 1', action: 11,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', route: '/op111', action: 111},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 112},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 113}
                ]
              },
              { title: 'Line 2', action: 12,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', action: 121},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 122},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 123}
                ]
              },
            ]
          },
          { title: 'Workshop 2', action: 2,
            items:[
              { title: 'Line 1', action: 21 ,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', action: 211},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 212},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 213}

                ]
              },
              { title: 'Line 2', action: "22" ,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', action: 221},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 222},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 223}
                ]
              },
            ]
          },
          { title: 'Workshop 3', action: 3,
            items:[
              { title: 'Line 1', action: 31,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', action: 311},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 312},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 313}

                ]
              },
              { title: 'Line 2', action: 32 ,
                items:[
                  { icon: 'mdi-factory',  title: 'Operation 1', action: 321},
                  { icon: 'mdi-factory',  title: 'Operation 2', action: 322},
                  { icon: 'mdi-factory',  title: 'Operation 3', action: 323}
                ]
              },
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
      this.$emit('closeNav', true);
      }
      else{
      this.navPosition = "0px";
      this.closePosition = "200px";
      this.$emit('closeNav', false);
      }
    },
    menuStepInfo(action){
      this.$emit('menuStepInfo', action);
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
  transition: all .5s
}
.navigation {
  background: #1E1E1E;
  width: 200px;
  height: calc(100% - 60px);
  bottom: 0px;
  z-index: 9999;
  position: fixed;
  font-size: 23px;
  transition: all .5s
}
</style>