<template>
  <div :style="{left: navPosition}" class="navigation" >
  <ul class="mainmenu">  
    <li class="menu"><a href=""><i class="fa fa-industry"></i><span class="menu-text">제 1 공장</span></a>
      <ul class="linemenu">
        <li class="menu"><a href=""><i class="fa fa-angle-down"></i><span class="menu-text">1 라인</span></a>
        <ul class="opmenu">
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정1</span></a></li>
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정2</span></a></li>
      </ul>
      </li>
      </ul>
      <ul class="linemenu">
        <li class="menu"><a href=""><i class="fa fa-angle-down"></i><span class="menu-text">2 라인</span></a>
        <ul class="opmenu">
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정3</span></a></li>
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정4</span></a></li>
      </ul>
      </li>
      </ul>
      
    </li>

        <li class="menu"><a href=""><i class="fa fa-industry"></i><span class="menu-text">제 2 공장</span></a>
      <ul class="linemenu">
        <li class="menu"><a href=""><i class="fa fa-angle-down"></i><span class="menu-text">1 라인</span></a>
        <ul class="opmenu">
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정1</span></a></li>
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정2</span></a></li>
      </ul>
      </li>
      </ul>
      <ul class="linemenu">
        <li class="menu"><a href=""><i class="fa fa-angle-down"></i><span class="menu-text">2 라인</span></a>
        <ul class="opmenu">
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정3</span></a></li>
        <li class="menu"><a href=""><i class="fa fa-angle-right"></i><span class="menu-text">공정4</span></a></li>
      </ul>
      </li>
      </ul>
      
    </li>
  </ul>

  <div :style="{left: closePosition }" id="closeNav" @click="closeNav"></div>

</div>
</template>

<script>
export default {
  name: 'navigation',
    data(){
    return {
      navPosition:"0px",
      closePosition : "200px"
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
      background-color: #343B43;
      width: 200px;
      height: calc(100% - 60px);
      bottom: 0px;
      z-index: 9999;
      position: fixed;
      font-size: 23px
}
.mainmenu, .submenu, .linemenu, .opmenu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu a:hover{
  color: #C0D8FF;
  background: #121314;
}
.menu:hover{
  padding: 0,10px;
}
.mainmenu a {
  display: block;
  text-decoration: none;
  padding: 10px;
  color: #fff;
}
.mainmenu a:hover {
    background-color:#121314;
}
.mainmenu li:hover .submenu {
  display: block;
  max-height: 200px;
}
.mainmenu li:hover .linemenu, .linemenu li:hover .opmenu {
  display: block;
  max-height: 200px;
}
.linemenu a{
  padding-left: 20px;
}
.opmenu a {
  padding-left: 40px;
}
.linemenu {
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.7s ease-out;
}
.opmenu {
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.7s ease-out;
}
.menu-text{
  margin-left: 12px;
}
</style>