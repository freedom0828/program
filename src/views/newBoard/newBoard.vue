<template>
    <div class="newBoard">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background:#F5F5F5;width:114px;overflow:visible">
                <el-menu :default-openeds="['1', '3']" class="new-board-title" router> 
                     <el-submenu index="1">
                        <template slot="title"><span>建立广告计划</span></template>
                        <el-menu-item index="/index/createBoard/choosePlan"><i></i>选择计划</el-menu-item>
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title"><span>广告单元</span></template>
                        <el-menu-item index="/index/createBoard/message">基本信息</el-menu-item>
                        <el-menu-item index="/index/createBoard/message">定向</el-menu-item>
                        <el-menu-item index="/index/createBoard/message">广告位</el-menu-item> 
                        <el-menu-item index="/index/createBoard/message">出价</el-menu-item> 
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><span>广告创意</span></template>
                        <el-menu-item index="/index/createBoard/landingPage">落地页</el-menu-item>
                        <el-menu-item index="/index/createBoard/landingPage">上传创意</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
  
            <el-container> 
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "newBoard"
};
</script>

<style scoped>
.newBoard span {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
}

.el-menu-item.is-active {
  color: rgba(40, 115, 255, 1);
}
.el-submenu__title,
.el-menu-item {
  background: #F5F5F5;
  font-size: 12px;
}
.el-submenu__title{
    background: #F5F5F5;
}
.el-submenu .el-menu-item{
    padding:0;
    min-width:100%;
}
.el-submenu__title > .el-menu-item {
   background: #F5F5F5;
}
</style>