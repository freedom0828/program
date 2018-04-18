<template>
    <div class="message">
        <el-row>
             <el-col class="message-title">
                <h1>广告单元</h1>
            </el-col>
            <el-col class="message-msg">
                <h5>基本信息</h5>
            </el-col>
             <el-col>
                <el-form>
                    <el-form-item label="单元名称" prop="address">
                        <el-input 
                            v-model="value1" 
                            auto-complete="off" 
                            placeholder="请设置广告名称"
                        ></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-form>
                    <el-form-item label="投放周期" prop="address">
                        <el-date-picker
                            v-model="value2"
                            type="date"
                            placeholder="请选择订单日期">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col class="message-msg" style="margin-top:40px;">
                <h5>基本信息</h5>
            </el-col>
            <el-col class="message-sex">
                <span>性别：</span>
                <el-radio-group v-model="tabPosition">
                    <el-radio-button label="不限">不限</el-radio-button>
                    <el-radio-button label="男">男</el-radio-button>
                    <el-radio-button label="女">女</el-radio-button>
                </el-radio-group>
            </el-col>
            <el-col class="message-sex">
                <span>年龄：</span>
                <el-radio-group v-model="age">
                    <el-radio-button label="不限">不限</el-radio-button>
                    <el-radio-button label="指定年龄段">指定年龄段</el-radio-button>
                </el-radio-group>
                <el-radio-group v-model="ageArea">
                    <el-radio-button label="<6"></el-radio-button>
                    <el-radio-button label="6-12">6-12</el-radio-button>
                    <el-radio-button label=">12"></el-radio-button>                    
                </el-radio-group>
            </el-col>
            <el-col class="message-area">
                <span>地域：</span>
                <el-radio-group v-model="tabPosition">
                    <el-radio-button label="不限">不限</el-radio-button>
                    <el-radio-button label="指定省市">指定省市</el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      value1: "",
      value2: "",
      tabPosition: "不限",
      age:'不限',
      ageArea:'<6'
    };
  }
};
</script>

<style scoped>
.message-title h1 {
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 32px;
  font-weight: normal;
}
.message-msg h5 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 22px;
}
.el-input {
  width: 432px;
}
.el-radio-group{
  margin:0;
}
.message-sex{
  display:flex;
  align-items: center;
  margin-bottom:31px;
}
</style>