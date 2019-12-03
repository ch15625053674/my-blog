<template>
<!--  <div v-theme:column="'narrow'" id="show-blogs">-->
  <div class="maindiv">
    <div class="narrow"  id="show-blogs">
      <div class="pdiing-class">
        <h1>博客总览</h1>
      </div>
      <input type="text" v-model="serch" placeholder="搜索" class="text1">
      <div v-for="data in filteredBlogs" class="single-blog">
        <div class="pdiing-class">
          <router-link v-bind:to="'/blog/'+ data.id"><h2 v-rainbow>{{data.title | to-uppercase}}</h2></router-link>
          <article>{{data.content | to-snippet}}</article>
          {{data.categories}}
          {{data.author}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'show-blogs',
        data(){
            return {
              blogs:[],
              serch:""
            }



            
        },
        created() {
            var _this = this;
            this.$http.post("http://127.0.0.1:8080/myblog/showblog",{
            }).then(function (data) {
                console.log(data)
                _this.blogs = data.data.data;
            });

        },
        computed:{
            filteredBlogs:function () {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.serch);
                })
            }
        },
        filters:{
            toSnippet (value) {
                return value.slice(0,5)+"...";
            }
        },
        directives: {
            'rainbow':{
                bind(el,binding,vnode){
                    el.style.color = "#444444";//+ Math.random().toString(16).slice(2,8);
                }
            },
            'theme':{
                bind(el,binding,vnode){
                    if(binding.value == 'wide'){
                        el.style.maxWidth = "1260px";
                    } else if (binding.value == 'narrow') {
                        el.style.maxWidth = "70%";
                    }

                    if(binding.arg == 'column'){
                        el.style.background = "#6677cc";
                        el.style.padding = '20px';
                    }
                }
            }
        }

    }
</script>

<style>
  #show-blogs{
    max-width: 60%;
    margin: 0 auto;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 1px dotted #aaa;
    color: #444444;
  }

  #show-blogs a{
    color: #444444;
    text-decoration: none;
  }
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  .narrow{
    color: #444;
    max-width: 70%;
  }
  h1{
  }
  .text1{
    color: #eeeeee;
  }
  .pdiing-class{
    padding: 20px;
  }
  .maindiv{
    height:auto!important;
    min-height:800px;
    background-color: rgba(250,250,250);
  }
</style>
