<template>
  <div id="login">
    <div class="loginip">
      <el-input v-model="loginname" placeholder="登录账号" class="el-ip"></el-input>
      <el-input v-model="username" placeholder="账户名" class="el-ip"></el-input>
      <el-input v-model="email" placeholder="邮箱" class="el-ip"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="el-ip" show-password></el-input>
      <el-input v-model="passwordagin" placeholder="请确认密码" class="el-ip" show-password></el-input>
      <div class="validatecode">
      </div>
      <div class="imageDiv">
        <el-button class="" style="width: 40%;margin: 0 auto;background-color:rgba(180,180,180,0.2);color: aliceblue" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {
                imgCode:"http://127.0.0.1:8080/validatecode",
                username:"",
                password:"",
                email:"",
                passwordagin:"",
                loginname:""
            }
        },
        methods:{
            register: function () {
                var _this = this;
                this.$http.post("http://127.0.0.1:8080/user/register",{
                    userName:this.username,
                    password:this.password,
                    email:this.email,
                    loginName:this.loginname
                }).then(function (data) {
                    if(data.data.head.flag){
                        this.$message({
                            message: data.data.head.respDesc,
                            type: 'success'
                        });
                    }else{
                        this.$message.error(data.data.head.respDesc);
                    }
                    console.log(data)
                });
            }
        }
    }
</script>

<style  scoped>
  #login {
    width: 30%;
    height: 500px;
    background-color:rgba(88,88,88);
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 16px;
  }
  .el-ip >>> .el-input__inner{
    letter-spacing: 1px;
    margin-bottom:30px;/*输入框设置*/
    border:none;
    border-bottom:1px solid #fff;
    background:transparent;
    color: #eeeeee;
  }
  .el-ipcode >>> .el-input__inner{
    letter-spacing: 1px;
    margin-bottom:30px;/*输入框设置*/
    border:none;
    border-bottom:1px solid #fff;
    background:transparent;
    float: left;
  }
  .el-im >>> .el-image__inner{
    width: 45%;
    height: 120px;
    border-radius: 60px;
    margin-top: 15px;
    opacity:0.6;
  }
  .imageDiv{
    text-align: center;
  }
  .validatecode{
    height: 40px;
  }



</style>
