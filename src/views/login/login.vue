<template>
    <div class="login">
        <el-row type='flex' justify="center" align="middle" class="login-box">
          <el-col :span="10" class="login-box-col">
              <el-form  :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm login-container">
                <h3 class="title">系统登录</h3>
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm2.username" auto-complete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-checkbox checked class="remember">记住密码</el-checkbox>
                <el-form-item style="width:100%;">
                <el-button type="primary" style="width:60%;" @click="loginFn">登录</el-button>
                </el-form-item>
            </el-form>
          </el-col>
            
        </el-row>
        
    </div>
</template>

<script>
import {login} from '@/utils/request'
  export default {
    name:"login",
    data() {
      return {
        ruleForm2: {
          username: '',
          password: ''
        },
        rules:{
          username:[
            {required:true,message:"请输入用户名"},
            {type:'email',message:'用户名格式不正确，请重新输入'}
          ],
          password:[
            {required:true,message:'请输入密码'}
          ]
        }
      };
    },
    watch:{

    },
    computed:{

    },
    methods: {
      loginFn(){
        this.$refs.ruleForm2.validate((isValid,options) => {
          if(isValid){
            this.$store.dispatch('saveToken',{
              ruleform:this.ruleForm2,
              router:this.$router,
              message:this.$message
            })

          }
        })
      }
    },
    created(){

    }
  }
</script>

<style scoped>
  .login{
    width:100%;
    height:100%;
    background: url('../../../static//img/timg.jpg');
    background-size: 100% 100%;
  }
  .login .login-box{
    height:100%;
  }
  .login .login-box-col{
    background: #fff;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 35px 35px 15px 35px;
  }
  .login .title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-size:20px;
  }
</style>
