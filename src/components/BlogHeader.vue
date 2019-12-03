<template>
  <div class="blog-header">
      <nav>
        <ul>
          <ui class="ui1">
            <router-link to="/" exact>博客</router-link>
            <router-link to="/addblog" exact>写博客</router-link>
          </ui>
        </ul>
      </nav>
    <div class="b">
      <ul>
        <ui>
          <a class="back" @click="pushregister">注册</a>
          <a class="back" @click="pushlogin">登录</a>
        </ui>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
      name:"blog-header",
      data(){
          return {
          }
      },
      methods:{
          pushregister(){
              this.$router.push({
                  path: '/register',
                  name: 'Register',
                  params: {}
              })
          },
          pushlogin(){
              this.$router.push({
                  path: '/login',
                  name: 'Login',
                  params: {}
              })
          }
      }
  }
</script>

<style scoped>
  .blog-header{
    width: 100%;
    height: 15%;
    position: relative;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0px;
  }
  li{
    display: inline-block;
    margin: 0px;
  }

  a{
    color: #ffffff;
    text-decoration: none;
    padding: 5px;
    border-radius: 6px;
    font-size: 1px;
    cursor: pointer;
  }
  nav{
    padding: 30px 0;
    margin-bottom: 40px;
    height: 10px;
    background-color:rgba(180,180,180,0.2);
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }

  .ui1{
     }


  .b{
    position: absolute;
    right: 0px;
    bottom: 0px;
    color: #eeeeee;
  }

  .back{
    color: #ffffff;
  }
</style>
