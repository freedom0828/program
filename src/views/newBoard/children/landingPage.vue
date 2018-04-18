<template>
    <div class="landing-page">
        <!-- 落地页 -->
        <el-row>
            <el-col class="landing-page-title">
                <h1>广告创意</h1>
            </el-col>
            <el-col class="landing-page-landing">
                <h5>落地页</h5>
            </el-col>
            <el-col>
                <el-form>
                    <el-form-item label="着陆页地址：" prop="address">
                        <el-input 
                            v-model="address" 
                            auto-complete="off" 
                            placeholder="请设置广告名称"
                        ></el-input>
                        <el-button disabled>预定</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
             <el-col class="landing-page-landing">
                <h5 style="margin:0">上传创意</h5>
                <a href="#" @click="show" v-if='landFile'>+添加创意</a>
                <div v-else style="position:relative">
                  <el-tabs v-model="editableTabsValue2" type="card" closable>
                    <el-tab-pane
                      v-for="(item) in editableTabs2"
                      :key="item.name"
                      :label="item.title"
                      :name="item.name"
                    >
                    <Upload></Upload>
                    </el-tab-pane>
                  </el-tabs>
                   <el-button
                      size="small"
                      @click="addTab(editableTabsValue2)"
                      class="el-button-create"
                    >
                      +新建创意
                    </el-button>
                </div>
            </el-col>
            <el-col style="margin-top:80.7px;" class="landing-page-button">
                 <el-button type="info" :disabled="statusInput">预定</el-button>{{statusInput}}
            </el-col>
           
              <el-col v-if="showOrHide" class="landing-page-model" :span="10">
                  <h5>选择创意</h5>
                  <div>
                      <img src="../../../../static/img/1.png" alt="" @click="landingFile">
                      <img src="../../../../static/img/2.png" alt="" @click="landingFile">
                  </div>
              </el-col>


        </el-row>
    </div>
</template>

<script>
import Upload from "./upload";
import {mapState} from 'vuex'
import store from '../../../store/store'
export default {
  name: "landingPage",
  data() {
    return {
      address: "",
      showOrHide: false,
      landFile: true,
      editableTabsValue2: "2",
      editableTabs2: [
        {
          title: "创意1",
          name: "1"
        },
        {
          title: "创意2",
          name: "2"
        }
      ],
      tabIndex: 2
    };
  },
  components: {
    Upload
  },
  computed:{
    ...mapState(['statusInput']),
  },
  methods: {
   
    show() {
      this.showOrHide = !this.showOrHide;
    },
    landingFile() {
      this.landFile = !this.landFile;
      this.showOrHide = !this.showOrHide;
    },
    addTab(targetName) {
      
      let newTabName = ++this.tabIndex + "";
      this.editableTabs2.push({
        title: "创意" + this.tabIndex,
        name: newTabName
      });
      this.editableTabsValue2 = newTabName;
      document.getElementsByClassName('el-button-create')[0].style.left =( 85* this.tabIndex) +'px' 
    }
  },
  computed:{
  
   
  }
};
</script>

<style scoped>
.landing-page-title h1 {
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 32px;
  font-weight: normal;
}
.landing-page-landing h5 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-bottom: 22px;
}
.el-input {
  width: 432px;
  height: 32px;
}
.el-input .el-input__inner {
  height: 100%;
}
.landing-page-button .el-button {
  width: 166px;
  height: 52px;
}
.landing-page-mark {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
}
.landing-page-model {
  width: 439px;
  height: 282px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.landing-page-model h5 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 33px;
}
.landing-page-model div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
}
.landing-page-model div img {
  width: 180px;
  height: 147px;
}

.el-button-create {
  position: absolute;
  top: 5px;
  left:170px;
}
.el-tabs__item{
  width:83px;
}
</style>