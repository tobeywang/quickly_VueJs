<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/h2'">Hello 2 </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/users'">Users</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <div class="dropdown">
          <select name="" class="form-control" @change="onchange" v-model="gender" >
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Man</option>
          </select>
        </div>
        <div class="nav-text">Hi,{{userName}}</div>
        <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
      </div>
    </nav>
    
    <!-- 選單 -->
    <div>
    <sidebar-menu-akahon />
    <!-- <sidebar-menu-akahon @search-input-emit="search"/> -->
    </div>

    <!-- pushNewName 是內部向外拋出的事件 -->
    <!-- getNewName 是外部接收的方法 -->
    <!-- child 是外部觸發內部方法 -->
    <router-view :gender = "appgender" @pushNewName="getNewName" ref="membersSearch"></router-view>
  </div>
</template>

<script>
import SidebarMenuAkahon from "@/components/Sidebar-menu-akahon.vue"
export default {
  name: "App",
  components: {
    SidebarMenuAkahon,
  },
  data(){
    return {
      gender :'',
      appgender:'',
      userName: ''
    }
  },
  methods :{
    onchange (){
      console.log(this.gender)
      this.appgender = this.gender
      //觸發內部方法
      this.$refs.membersSearch.getDataBySearch(this.appgender);
    },

    // getNewName 是接收用的事件
    getNewName (newName) {
      let vm = this
      vm.userName = newName
    }

  }
};
</script>

<style>
@import "bootstrap";
@import "bootstrap/dist/css/bootstrap.min.css";
/* lang="scss"
 @import "~/bootstrap/scss/bootstrap"; */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
