<template>
    <div class="upload">
        <el-upload
            action="http://localhost:9000/dsp-creative/creative/upload"
            list-type="picture-card"
            :success="handleAvatarSuccess">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div class="el-upload__text">640*240像素<p>点击上传</p></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/jpeg文件，且不超过500kb</div>
         <el-col class="choose-plan-to-promote">
            <span>广告文案:</span>
            <el-input type="text" placeholder="请设置广告名称" style="width:432px;" :disabled="readonly" @input="changeNumber" class="choose-plan-input" v-model="designName"></el-input>
            <span style="font-size:14px;line-height:19px;color:rgba(0,0,0,.65)" @input="changeNumber">{{designName.length}}/18<i class="el-icon-question"></i></span>
        </el-col>
        <el-col class="choose-plan-to-promote">
            <span>监控链接:</span>
            <el-input type="text" placeholder="请设置广告名称" style="width:432px;" class="choose-plan-input" v-model="MonitorLink"></el-input>
        </el-col>
       
            <!-- form表单上传图片，form必须写enctype="multipart/form-data",input['file']必须有name="file" -->
            <!-- <form action="http://localhost:9000/dsp-creative/creative/upload" enctype='multipart/form-data' method="post">
                <label for="file"></label>
                <input type="file" name="file">
                <input type="submit" value="提交">
            </form> -->
        
    </div>
</template>

<script>
import $http from '../../../utils/request'
import store from '../../../store/store'
export default {
  name: "upload",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      designName: "",
      readonly:false,
      MonitorLink:""
    };
  },
  watch:{
      designName(n,o){
          console.log(store)
            if(n !== o){
                store.commit('saveInputStatus','true')
            }
      },
      MonitorLink(n,o){

      }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = "http://localhost:9000/" + res.data.value;
      this.$message({
        message: "添加成功，但我不想显示",
        type: "success"
      });
      
    },
    changeNumber(){
        
        if(this.designName.length >= 18){
            this.$message({
                type:"warning",
                message: '只允许输入18个字'
            });
           this.readonly = !this.readonly
        }
    },
    submitFn(){

    },
    // 上传图片
    // callback(e) {
    //     let file = e.target.files[0];//类数组
    //     let FD = new FormData();
    //     FD.append('file',file) //file是名称 和后台upload.single('file') 要一致
    //     $http.post('http://localhost:9000/dsp-creative/creative/upload',FD)
    //     .then(res => {
    //         console.log(res)
    //     })
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.choose-plan-to-promote {
  margin-top: 24px;
}
</style>