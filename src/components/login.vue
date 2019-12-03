<template>
  <div id="login">
    <div class="loginip">
      <div class="imageDiv">
        <el-image class="el-im" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569588363671&di=1170f01801754d8120a174269c770c03&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F04b377df244e16e4656e97e6d3152b024793bb71283f4-RUWBRN_fw658"></el-image>
      </div>
      <el-input v-model="loginName" placeholder="登录账号" class="el-ip"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="el-ip" show-password></el-input>
      <div class="validatecode">
        <div class="d1">
          <el-input v-model="code" placeholder="验证码" class="el-ipcode"></el-input>
        </div>
        <div class="d2">
<!--          <el-image class="el-imcode" src=this.imageUrl @click="clickSrc"></el-image>-->
          <img :src="imgCode" class="el-imcode" @click="clickSrc"/>
        </div>
      </div>
      <div class="imageDiv">
        <el-button class="" style="width: 40%;margin: 0 auto;background-color:rgba(180,180,180,0.2);color: aliceblue" @click="register">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                imgCode:"http://127.0.0.1:8080/validatecode",
                loginName:"",
                password:"",
                code:""
            }
        },
        methods:{
            clickSrc: function () {
                var num=Math.ceil(Math.random()*10);
                this.imgCode = "http://127.0.0.1:8080/validatecode?" + num;
            },
            register: function () {
                var _this = this;
                this.$http.post("http://127.0.0.1:8080/user/login",{
                    password:this.password,
                    loginName:this.loginName
                }).then(function (data) {
                    if(data.data.head.flag){
                        this.$message({
                            message: data.data.head.respDesc,
                            type: 'success'
                        });
                        App.loginname = "aa";
                        alert(App.loginname)
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
    height: 400px;
    background-color:rgba(35,35,35);
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 26px;
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
  .el-imcode {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .imageDiv{
    width: 100%;
    background-color: rgba(35,35,35);
    text-align: center;
    margin-top: 20px;
    border-radius: 26px;
  }
  .validatecode{
    height: 40px;
    color: #eeeeee;
  }

  .d1{
    height: 40px;
    width: 60%;
    float: left;
  }
  .d2{
    height: 40px;
    width: 39%;
    float: left;
  }


</style>
