<template>
  <div id="members">
    <!-- <pre>{{ listData }}</pre> -->
    <div>性別: {{ gender }}</div>
    <input type="text" class="form-inline" v-model="userName">
    <button class="btn btn-outline-danger my-2 my-sm-0" type="button" >Update</button>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Img</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">button</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v,k,i) in listData">
          <th scope="row">{{ k + 1 }}</th>
          <td><img :src="v.picture.medium"></td>
          <td>{{v.name.first}} {{v.name.last}}</td>
          <td>{{ v.email}}</td>
          <td>
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="onSearchClick(v.name.first)">Search</button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Members",
  //接球
  props :['gender'],
  computed :{
    normalizedSize: function () {
      return this.gender.trim().toLowerCase()
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App 2",
      listData: [],
      userName : 'Test'
    };
  },
  methods: {
    getData() {
      let vm = this;
      this.axios
        .get("https://randomuser.me/api/?results=50")
        .then(function (response) {
          // 成功回應
          console.log(response.data);
          vm.listData = response.data.results;
        })
        .catch(function (error) {
          // 失敗回應
          console.log(error);
        });
    },
    onSearchClick (myName){
      let vm = this
      // vm.$emit('pushNewName', vm.userName)
      vm.$emit('pushNewName',myName)
          // pushNewName 是寫在 HTML 上的事件名稱
          // vm.username 是預計向外傳的變數
    }
  },
  mounted () {
    this.getData()
  }
};
</script>
