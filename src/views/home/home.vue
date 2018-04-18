<template>
    <el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #022050" class="home-menu" >
        <el-menu :default-openeds="['1', '3']" router >
          <el-menu-item index="/index/createBoard"><i class="el-icon-message"></i>新建广告</el-menu-item>
          <el-menu-item index="/index/home"><i class="el-icon-message"></i>首页概览</el-menu-item>
          <el-submenu index="2" class="submenu">
            <template slot="title"><i class="el-icon-menu"></i><span>广告管理</span></template>
            <el-menu-item index="/index/plan">广告计划</el-menu-item>
            <el-menu-item index="/index/level">广告单元</el-menu-item>
            <el-menu-item index="/index/idea">广告创意</el-menu-item> 
          </el-submenu>
            <el-menu-item index="/index/dataBase"><i class="el-icon-message"></i>数据管理</el-menu-item>
            <el-menu-item index="/index/tool"><i class="el-icon-message"></i>工具箱</el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header class="el-header" style="text-align: right; font-size: 12px;line-height:64px;">
          <el-dropdown>
            <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><small>现金余额</small><br/>￥126,560.00</el-dropdown-item>
              <el-dropdown-item><small>今日消耗</small><br/>￥5,600</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <i class="el-icon-warning" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>如有问题，邮箱请至</el-dropdown-item>
              <el-dropdown-item>freedom_snake@163.com</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState(['username'])
  },
  method:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
  .el-header{
    background: plum;
  }
  .home-menu .el-menu-item.is-active{
    color:rgba(255,255,255,1);
    background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
  }
  .home-menu .submenu span{
    color:rgba(255,255,255,0.65)!important;
  }
  .home-menu .el-submenu,.el-submenu__title,.el-menu-item{
    background-color: #022050;
    color:rgba(255,255,255,0.65);
  }
  .home-menu .el-submenu__title>.el-menu-item{
    background: rgba(28,41,65,1);
  }
  
</style>
