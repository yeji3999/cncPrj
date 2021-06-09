<template>
<div class="login">
    <div id="loginArea">
       <span> ID </span><input type="text" id="loginId">
       <span> PW </span><input type="password" id="loginPw">
      <button id="loginBtn">Login</button>
    </div>

</div>
    
</template>
<script>
export default {
    name:'Login'
}
</script>
<style>
#loginArea{
    height: 100px;
    width: 500px;
    margin: auto;
    position: relative;
    top: 400px;
}
span{
    color:white
}
#loginId, #loginPw{
    color:white;
    border: 1px solid white;
}
#loginBtn{
    background: rgb(69, 117, 69);
    float: right;
    width: 60px;
    height: 20px;
}

</style>