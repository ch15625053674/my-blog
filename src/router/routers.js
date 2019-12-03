import ShowBlog from "../components/ShowBlog";
import AddBlog from "../components/AddBlog";
import SingleBlog from "../components/SingleBlog";
import Login from "../components/login";
import Register from "../components/register";
import Manager from "../components/manager"
export default [
  {
    path:"/",component:ShowBlog
  },  {
    path:"/addblog",component:AddBlog,name:"Add"
  },  {
    path:"/blog/:id",component:SingleBlog,name:"Blog"
  },  {
    path:"/login",component:Login,name:"Login"
  },  {
    path:"/register",component:Register,name:"Register"
  },  {
    path:"/manager",component:Manager,name:"Manager"
  }

]
