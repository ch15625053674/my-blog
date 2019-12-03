<template>
  <div id="app" class="">
    <blog-header></blog-header>
    <manager></manager>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from "./components/ShowBlog";
import BlogHeader from "./components/BlogHeader";
import Manager from "./components/manager"
import 'font-awesome/css/font-awesome.min.css'
const loginName = "";
export default {
  name: 'App',
  components: {
      AddBlog,
      ShowBlogs,
      BlogHeader,
      Manager,
  }
}
</script>

<style>
  #app{
    background-image: url("./assets/b7.jpg");
    background-size: 100% 100%;
  }
  .title_div{width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:white;
    background-color:rgba(180,180,180,0.2);
  }

</style>
