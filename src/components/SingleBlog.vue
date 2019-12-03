<template>
  <div class="maindiv">
    <div id="single-blog">
      <div id="contentDiv">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
      </div>
      <div id="commentDiv">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="comment">
        </el-input>
      </div>
      <div class="imageDiv">
        <el-button class="" style="width: 40%;margin: 0 auto;" @click="submitComment">提交评论</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:"single-blog",
        data(){
            return {
                id:this.$route.params.id,
                blog:{},
                comment:""
            }
        },
        methods:{
            submitComment: function () {
                this.$message('亲，评论功能暂未上线，敬请期待!');
            }
        },
        created() {
            var _this = this;
            this.$http.post("http://127.0.0.1:8080/myblog/blogdetail",{
                id:this.id
            }).then(function (data) {
                console.log(data)
                _this.blog = data.data;
            });
        }
    }
</script>
<style>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    border:none;
    border-bottom:1px solid #fff;
  }

  .el-ip >>> .el-textarea__inner {
    letter-spacing: 1px;
    margin-bottom:30px;/*输入框设置*/
    border:none;
    border-bottom:1px solid #fff;
    background:transparent;
    color: #444444;
  }

  #commentDiv{
    margin-top: 20px;
    width: 50%;
  }
  .imageDiv{
    margin-top: 20px;
    width: 250px;
  }
  .maindiv{
    height:auto!important;
    min-height:500px;
    background-color: rgba(250,250,250);
  }

</style>
