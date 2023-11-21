
<template>
  <div class=" d-flex justify-content-between  p-2 position-sticky  z-3 bg-white " style=" top:0%">

    <h4 class=" ps-3"><router-link class=" text-danger  text-decoration-none " to="/firstpage">Home</router-link></h4>
   <button
            type="button"
            class="btn btn-danger text-white  "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add details
          </button>
  </div>
 
  <div class="content position-sticky  bg-white z-2 " style="top:9%">
    <img
      src="https://www.visionenergy.com/favicon/og.jpg"
      class="align-items-start opacity-25"
    />
    <h1 class="text" style="font-size: 80px">ENER VISION</h1>
  </div>
 
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- Button trigger modal -->
        <div class="sticky1  d-flex  justify-content-between ">
          <h3 class="align-content-start text-black">Customer</h3>
         
        </div>

        <!-- <table></table> -->

        <table class="table table-hover table-responsive-lg   table-responsive-md  table-responsive-sm table-bordered mt-3">
          <thead>
            <tr class="sticky2">
              <th scope="col">S.No</th>
              <th scope="col">Location</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile.no</th>
              <th scope="col">Companyname</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="user in fullDetails" :key="user">
                  <td>{{ user.location }}</td>
                  <td>{{ user.firstName + user.lastName }}</td>

                  <td>{{ user.email }}</td>
                  <td>{{ user.mobile }}</td>
                  <td>{{ user.companyName }}</td>
                </tr> -->
            <tr v-for="(product, index) in CustomerData" :key="index">
              <td>{{ index+1 }}</td>
              <td class="text-center">
               {{ product.location }}
               
              </td>
              <td>{{ product.name }}</td>

              <td>{{ product.email_id }}</td>
              <td>{{ product.mobile_no }}</td>
              <td>{{ product.company }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          -
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header bg-light d-flex align-items-center justify-content-between"
              >
                <h5 class="m-0">Customer</h5>
                <button
                  type="button"
                  class="btn-close text-white float-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form v-on:submit.prevent="addItem">
                <div class="form-group form-control w-100">
                  <label for="companyname">Enter CompanyName:</label>
                  <input
                    class="form-control"
                    id="companyname"
                    type="text"
                    placeholder="Enter your CompanyName"
                    v-model="formData.company"
                  /><br />
                  <label for="firstname">Enter Name:</label>
                  <input
                    class="form-control"
                    id="firstname"
                    type="text"
                    placeholder="Enter your Name"
                    v-model="formData.full_name"
                  /><br />
                  <!-- <label for="lastname">Enter LastName:</label>
                  <input
                    class="form-control"
                    id="lastname"
                    type="text"
                    placeholder="Enter your LastName"
                    v-model="formData.last_name"
                  /><br /> -->
                  <label for="mobileno">Enter MobileNumber:</label>
                  <input
                    class="form-control"
                    id="mobileno"
                    type="number"
                    placeholder="Enter your Mobilenumber"
                    v-model="formData.mobile_no" v-on:input="oldfuction" :class="{'is-invalid ':errors.mobile_no}"
                />
                  <br />
                  <div class="error text-danger " v-if="errors.mobile_no">{{ errors.mobile_no }}</div>  
                  <label for="email">Enter Email-id:</label>
                  <input
                    class="form-control"
                    id="email"
                    type=" email"
                    placeholder="Enter your Email"
                    v-model="formData.email_id"  v-on:input="newfunction" :class="{ 'is-invalid': errors.email_id }"
                  /><br />
                  <div class="error text-danger " v-if="errors.email_id">{{ errors.email_id }}</div>
                  <label for="location">Enter Location:</label>
                  <input
                    class="form-control"
                    id="location"
                    type=" text"
                    placeholder="Enter your Location"
                    v-model="formData.location"
                  /><br />
                  <div class=" d-flex  justify-content-around ">

                    <button type="submit , reset" class="btn btn-danger w-25  mt-2">
                    Submit
                  </button>
                  <button type="reset" class="btn btn-danger w-25   mt-2">
                    Clear All
                  </button>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <pre v-for="(product, index) in data" :key="index">{{ product }}</pre> -->
  <!-- <pre v-for="(item,index) in getAudit" :key="index">{{ item }}</pre> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      errors:{},
      CustomerData: [],

      formData: {},

      myDetails: [],
    };
  },
  // components: {
  //   SideBar,
  // },
  computed: {
 hasErrors() {
 return Object.keys(this.errors).length > 0;
 },
 },

  mounted() {
    this.fetchData();
  },
  methods: {
    newfunction(){
    if (!this.formData.email_id) {
      this.errors.email_id = 'Email is required';
    }else if(!this.formData.email_id.includes("@gmail.com")){
        this.errors.email_id='email format is not correct';
    }
    else {
 delete this.errors.email_id;
 }
    
    
},
oldfuction(){
  const validMobile =/^[0-9]{10}$/;
    if (!validMobile.test(this.formData.mobile_no)) {
      this.errors.mobile_no = 'mobileno  must be in 10 digits';
    } else if (
      !this.formData.mobile_no) {
      this.errors.mobile_no = 'mobileno number required';
    }else{
        delete this.errors.mobile_no;
    }
   
},

    async fetchData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Customer?fields=[%22*%22]&limit_page_length=*"
      );

      let res = await response.json();
      this.CustomerData = res.data;
      // this.myDetails.push(res);
    },

    addItem() {
      console.log("======");
      axios
        .post(
          "http://192.168.1.190:8002/api/resource/Customer?fields=[%22*%22]&limit_page_length=*",
          this.formData
        )
        .then((res) => {
          this.fetchData();
          console.log(res);
          // this.myDetails.push(res);
        })
        .catch((error) => {
          console.log("Error i =n posting Customer Data", error);
        });
    },
  },
};
</script>
<style scoped>
th {
  background-color:lightgray;
  color:black;
  text-align: center;
}
td {
  text-align: center;
}
.table-hover:hover{
  background: lightblue !important;
}
.bg-color {
  background-color: black !important;
}
.content {
  display: flex;
  align-items: center;
  text-align: center;
  height: 35vh;
  justify-content: center;
  color: red;
  overflow: hidden;
  white-space: nowrap;
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );
  /* background: repeating-linear-gradient(45deg, black, transparent 100px) !; */
  /* background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); */
}
.sticky2 {
  position: sticky;
  top: 50%;
  background: black;
}
.sticky1 {
  position: sticky;
  top: 43%;
 background: white;
  color: white;
}

.text {
  position: absolute;
  left: 0;
  animation: moveRight 5s linear infinite;
}

@keyframes moveRight {
  0% {
    left: 0;
    color: red;
    border: 3px dashed red;
  }
  100% {
    left: 100%;

    color: green;
    border: 3px dashed green;
  }
}
</style>