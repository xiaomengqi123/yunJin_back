<template>
  <div id="app">
    <div class="top">
      <span class="welcome">Welcome</span>
      <span class="shu"></span>
      <span class="sysName">云锦后台管理系统</span>
    </div>
    <div class="content">
     <div class="left">
       <ul>
         <li>
           <router-link to="/directorymsg">
             <i class="icon-keyboard_arrow_right"></i>
             目录管理
            </router-link>
           </li>
         <li>
           <router-link to="/imagemsg">
             <i class="icon-keyboard_arrow_right"></i>
             图片管理
           </router-link>
           </li>
         <li>
           <router-link to="/detailmsg">
             <i class="icon-keyboard_arrow_right"></i>
             详情管理
           </router-link>
           </li>
       </ul>
     </div>
     <div class="right">
       <router-view></router-view>
     </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style>
@import "./common/style.css";
@import "../static/css/reset.css";
@import 'iview/dist/styles/iview.css';

.top{
  width:100%;
  height:60px;
  background-color: #0fa2b3ba;
}
.welcome{
  font-size: 30px;
    line-height: 60px;
    color: #fff;
    padding: 0px 20px 0px 50px;
    /* border-right: 2px solid #fff; */
}
.shu{
      width: 2px;
    height: 26px;
    background: #fff;
    display: inline-block;
    line-height: 60px;
}
.sysName{
    vertical-align: super;
    font-size: 18px;
    color: #fff;
    margin: 0px 20px;
}
.content{
  width:100%;
  display:flex;
  overflow: hidden;
  height:100%;
  position: absolute;
}
.left{
  width:180px;
  background-color: #34445e;
  flex:0 0 180px;
}
.left ul{
  margin-top:20px;
}
.left ul li{
    font-size: 16px;
}
.left ul li a{
    color: #a7b1c2;
    font-weight: 700;
    display: block;
   padding: 26px 20px;    
}
.right{
  flex:1;
  background-color: #fff;
}
</style>