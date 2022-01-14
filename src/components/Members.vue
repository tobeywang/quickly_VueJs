<template>
  <div id="members">
    <!-- <pre>{{ listData }}</pre> -->
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          性別: {{ gender }}
        </div>
        <div class="col-md-2">
          <input type="text" class="form-inline" v-model="userName" placeholder="input userName">
        </div>
        <div class="col-md-8">
          <button class="btn btn-outline-danger" type="button" @click="csvExport()">Export</button>
        </div>
      </div>

    </div>
    
    <div class="mt-2"> 
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
      userName : 'Test',
      allData : []
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
          vm.allData = vm.listData;
        })
        .catch(function (error) {
          // 失敗回應
          console.log(error);
        });
    },
    getDataBySearch(search) {
      console.log("search:" + search);
      let vm = this;
      let newList = [];
      let oldList = vm.allData;
      oldList.forEach(element => {
          if (search == 'all' || element.gender==search )
          {
              newList.push(element)
          }
        });
      vm.listData = newList;

    },
    onSearchClick (myName){
      let vm = this
      // vm.$emit('pushNewName', vm.userName)
      vm.$emit('pushNewName',myName)
          // pushNewName 是寫在 HTML 上的事件名稱
          // vm.username 是預計向外傳的變數
    },
    csvExport() {
      let vm = this;
      let arrdata = this.listData;
      //設定xlsx格式
      let blob = new Blob(arrdata, {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      let fileName = encodeURI('_月申贖-DS(中心)-111111.xlsx')
      console.log("filename: " + fileName)
      // let filename = decodeURIComponent(rs.headers.filename)
      // //解決ie抓不到跨域headers問題
      // if(this.isEmpty(rs.headers.filename))
      //     filename = decodeURIComponent(_.split(rs.headers['content-disposition'],'filename=')[1])
      // FileSaver.saveAs(blob, filename)

    }
  },
  mounted () {
    this.getData()
  }
};
</script>
