<template>
    <div class="choose-plan">
        <el-row>
            <el-col class="choole-plan-title">
                <h1>建立广告计划</h1>
            </el-col>
           <div style="margin-bottom:24px;">
               <el-row :gutter="12">
                    <el-col :span="7" class="choose-cart">
                        <el-card shadow="always" style="height:80.25px;">
                            <dl>
                                <dt><i class="el-icon-circle-plus"></i></dt>
                                <dd>
                                    <p>已有计划</p>
                                    <span>选择已有计划，直接创建广告</span>
                                </dd>
                            </dl>
                        </el-card>
                    </el-col>
                    <el-col :span="7" class="choose-cart">
                        <el-card shadow="always" style="height:80.25px;">
                            <dl>
                                <dt><i class="el-icon-circle-plus"></i></dt>
                                <dd>
                                    <p>新建计划</p>
                                    <span>新建推广目标，计划设置</span>
                                </dd>
                            </dl>
                        </el-card>
                    </el-col>
               </el-row>
           </div>
           <el-col class="choose-plan-to-promote">
               <span>推广目标：</span>
                <el-radio-group v-model="tabPosition">
                    <el-radio-button label="网页" class="el-radio-button">网页</el-radio-button>
                    <el-radio-button label="iOS应用" class="el-radio-button">iOS应用</el-radio-button>
                    <el-radio-button label="Android" class="el-radio-button">Android</el-radio-button>
                </el-radio-group>
           </el-col>
           <el-col class="choose-plan-to-promote">
               <span>计划名称：</span>
               <el-input type="text" placeholder="请设置广告名称" style="width:432px;height:32px;" class="choose-plan-input"></el-input>
           </el-col>
           <el-col class="choose-plan-to-promote">
               <span>计划名称：</span>
               <el-input type="text" placeholder="请设置广告名称" style="width:432px;height:32px;" class="choose-plan-input"></el-input>
                <span>元/天<i class="el-icon-question"></i></span>
           </el-col>
           <el-col style="margin-top:65px;" >
               <el-button disabled>下一步</el-button>
               <el-button>保存</el-button>
           </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'ChoosePlan',
        data(){
            return {
                tabPosition: '网页'
            }
        }
    }
</script>

<style scoped>
    .choole-plan-title h1{
        font-size: 34px;
        color: rgba(0,0,0,0.85);
        letter-spacing: 0;
        margin:28px 0 32px 0;
        font-weight:normal;
    }

    .choose-cart dl{
        display:flex;
        align-items: center;
    }
    .choose-cart dl dt{
        margin-right:17px;
    }
    .choose-cart dl dt i{
        display:block;
        width:26px;
        height:26px;
        color:#2873FF;
    }
    .choose-cart dl dt .el-icon-circle-plus:before{
        display:block;
       font-size:26px;
    }
    .choose-cart dl dd p{
        font-size: 18px;
        color: #000000;
        letter-spacing: -0.12px
    }
    .choose-cart dl dd span{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: rgba(0,0,0,0.65);
        letter-spacing: -0.08px;
    }
    .choose-plan-to-promote{
        display:flex;
        align-items:center;
        height:32px;
        margin-top:25px;
    }
    .choose-plan-to-promote span{
        font-size:14px;
        line-height:19px;
    }
    .el-radio-group{
        margin:0;
        height:100%;
    }
    .choose-plan-input .el-input__inner{
        height:32px;
        line-height: 32px;
    }
    .el-radio-group label{
        height:32px;
        line-height:32px;
    }
    .el-radio-group label .el-radio-button__inner{
        padding: 8px 20px;
    }
</style>