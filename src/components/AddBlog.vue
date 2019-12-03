<template>
  <div class="maindiv">
    <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if="submitFlag">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容</label>
        <!--      <textarea v-model="blog.content" required></textarea>-->
        <vue-html5-editor
          ref="editor"
          :height="140"
          style="height: 300px;background-color:rgba(180,180,180,0.2);color: #444444 "
          :show-module-name="false"
          :content="content"
          @change="updateContentData">
        </vue-html5-editor>

        <div id="checkboxes">
          <label>随笔/感悟</label>
          <input type="checkbox" value="随笔/感悟" v-model="blog.categories">
          <label>生活记录</label>
          <input type="checkbox" value="生活记录" v-model="blog.categories">
          <label>娱乐/八卦</label>
          <input type="checkbox" value="娱乐/八卦" v-model="blog.categories">
          <label>艺术赏析</label>
          <input type="checkbox" value="艺术赏析" v-model="blog.categories">
        </div>
        <!--      <label>作者:</label>-->
        <!--      <select v-model="blog.author">-->
        <!--        <option class="op1" v-for="author in authors">-->
        <!--          {{author}}-->
        <!--        </option>-->
        <!--      </select>-->
        <button v-on:click.prevent="post">提交博客</button>
      </form>

      <div v-if="!submitFlag">
        <h3>您的博客发布成功!</h3>
      </div>

      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容:</p>
        <p v-html="this.blog.content"></p>
        <p>博客分类:</p>
        <ul>
          <li v-for="categories in blog.categories">
            {{categories}}
          </li>
        </ul>
        <!--      <p>作者:</p>-->
        <!--      <p>{{blog.author}}</p>-->
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: 'add-blog',
        data () {
            return {
              blog:{
                  title:"",
                  content:"",
                  categories:[]
                  // author:""
              },
              authors:["henny","jack","rose"],
              submitFlag:true,
                message : ""
            }
        },
        methods:{
            post:function () {
              var _this = this;
              var str = this.blog.categories.toString();
              this.$http.post("http://127.0.0.1:8080/myblog/addblog",{
                  title:this.blog.title,
                  content:this.blog.content,
                  type:str
              }).then(function (data) {
                  _this.submitFlag=false
                  console.log(data)
              });
            },
            updateContentData: function (data) {
                this.blog.content = data
            }
        }
    }
</script>

<style scoped>
  .maindiv{
    height:auto!important;
    min-height:800px;
    background-color: rgba(250,250,250);
  }
  #add-blog *{
    box-sizing: border-box;
    color: #444;
  }

  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 10px 0 10px;
  }

  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
    background-color:rgba(180,180,180,0.2);
  }

  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label{
    display: inline-block;
    margin-top: 0px;
  }

  button{
    display: block;
    margin: 20px 0;
    background-color:rgba(180,180,180,0.2);
    color: #969696;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    background-color:rgba(180,180,180,0.2);
    color: #444444;
  }

  h3{
    margin-top: 10px;
    color: #444;
  }

  textarea{
    height: 200px;
  }
  .op1 {
    background-color:rgba(180,180,180,0.2);
  }


</style>
