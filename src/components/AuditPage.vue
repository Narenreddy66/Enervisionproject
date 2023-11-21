<template>
  <div
    class="d-flex justify-content-between mt-2 p-2 bg-white position-sticky z-3"
    style="top: 0%"
  >
    <h4 class="ps-3">
      <router-link class="text-danger text-decoration-none" to="/firstpage"
        >Home</router-link
      >
    </h4>
    <button
      type="button"
      class="btn btn-danger text-white pe-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add details
    </button>
  </div>
  <div class="content position-sticky bg-white z-2" style="top: 9%">
    <img
      src="https://www.visionenergy.com/favicon/og.jpg"
      class="align-items-start opacity-25"
    />
    <h1 class="text" style="font-size: 80px">ENER VISION</h1>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between sticky1">
          <h3 class="align-content-start">Audit Records</h3>
          <!-- Button trigger modal -->
        </div>
        <table class="table table-hover table-bordered mt-4">
          <thead>
            <tr class="sticky2">
              <th scope="col">S.No</th>
              <th scope="col">Id</th>
              <th scope="col">Customer</th>
              <th scope="col">Start_Date</th>

              <th scope="col">End_Date</th>
              <th scope="col">Doneby</th>
              <th scope="col">Type_of_reports</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in auditData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.customer }}</td>

              <td>{{ item.started_date }}</td>
              <td>{{ item.end_date }}</td>
              <td>{{ item.done_by }}</td>
              <td>{{ item.type_of_reports }}</td>

              <td>
                <i
                  @click="getDownload()"
                  class="bi bi-cloud-arrow-down-fill"
                ></i>
                <i
                  v-if="item.type_of_reports == 'Form-A'"
                  @click="routeToViewFormA(item.name)"
                  class="bi bi-eye-fill"
                ></i>
                <i
                  v-if="item.type_of_reports == 'Form-B'"
                  @click="routeToViewFormB(item.name)"
                  class="bi bi-eye-fill"
                ></i>
              </td>
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
                class="modal-header d-flex align-items-center justify-content-between"
              >
                <h5 class="m-0">Audit</h5>
                <button
                  type="button"
                  class="btn-close float-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form v-on:submit.prevent="addItem">
                <div class="form-group form-control w-100">
                  <label for="customerName">Enter CustomerName:</label>
                  <select
                    class="form-control"
                    id="customerName"
                    type="text"
                    value="Enter Customer Name"
                    v-model="myData.customer"
                    @input="customerData"
                  >
                  <option>select</option>
                    <option value="" disabled selected hidden>
                      Enter CustomerName
                    </option>
                    <option v-for="(product, index) in customers" :key="index">
                      {{ product.name }}
                    </option>
                  </select>

                  <br />
                  <label for="startdate">Start Date:</label>
                  <input
                    class="form-control"
                    type="date"
                    placeholder="Start Date"
                    id="Startdate"
                    v-model="myData.started_date"
                  /><br />
                  <label for="enddate">End Date:</label>
                  <input
                    class="form-control"
                    type="date"
                    id="enddate"
                    placeholder="End Date"
                    v-model="myData.end_date"
                  /><br />
                  <label for="doneby">Done by:</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Done by"
                    v-model="myData.done_by"
                  /><br />
                  <label for="fromtype">Type_of_reports:</label>
                  <select
                    class="form-control"
                    name="formtype"
                    id="fromtype"
                    v-model="myData.type_of_reports"
                  >
                    <option>Select</option>
                    <option value="Form-A">FORM-A</option>
                    <option value="Form-B">FORM-B</option>
                  </select>
                  <div class="d-flex justify-content-around">
                    <button type="submit" class="btn btn-danger mt-4">
                      Submit Data
                    </button>
                    <button type="reset" class="btn btn-danger  mt-4">
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
</template>
<script>
// import SideBar from "./SideBar.vue";
import axios from "axios";
export default {
  // components: {
  //   SideBar,
  // },
  data() {
    return {
      customers: [],
      auditData: [],
      customerName: [],
      fullDetails: [],
      myData: {},
      downloadData: [],
    };
  },
  mounted() {
    this.getAuditdata();
    this.customerData();
    this.getDownload();
  },
  methods: {
    async getDownload() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/method/ener_vision.ener_vision.doctype.audit_record.audit_record.downloading_pdf_file"
      );
      let res = await response.json();
      this.downloadData = res.data;
      console.log(this.downloadData);
    },
    async getAuditdata() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record?fields=[%22*%22]&limit_page_length=*"
      );
      let res = await response.json();
      this.auditData = res.data;
      console.log(this.auditData);
      // this.fullDetails.push(res);
    },
    routeToViewFormA(id) {
      this.$router.push({
        path: "/form-A",

        query: {
          id: id,
          name: "auditform-a",
        },
      });
    },
    routeToViewFormB(id) {
      this.$router.push({
        path: "/form-B",
        query: {
          id: id,
          name: "auditform-b",
        },
      });
    },

    addItem() {
      axios
        .post(
          "http://192.168.1.190:8002/api/resource/Audit%20Record?fields=[%22*%22]",
          this.myData
        )
        .then((res) => {
          console.log(res);
          this.getAuditdata();
          // this.fullDetails.push(res);
        })
        .catch((error) => {
          console.log("Error i =n posting Customer Data", error);
        });
    },
    async customerData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Customer?fields=[%22*%22]&limit_page_length=*"
      );
      let res = await response.json();
      this.customers = res.data;
      this.customers.filter((customer) => {
        this.customerName.push(customer);
      });
    },
  },
};
</script>
<style scoped>
th {
  background-color: lightgray;
  color: black;
}
tr:hover {
  background: lightgreen !important;
}
.bg-color {
  background-color: black !important;
  color: white;
  /* height: 100vh; */
}
/* .form-group{
  background: radial-gradient(red, transparent);

} */

.sticky2 {
  position: sticky;
  top: 50%;
  background: black;
}
.sticky1 {
  position: sticky;
  top: 43%;
  background: white !important;
  color: black;
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
  /* background: repeating-linear-gradient(45deg, black, transparent 100px) !important; */
  /* background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); */
}

.text {
  position: absolute;
  left: 0;
  animation: moveRight 8s linear infinite;
}

@keyframes moveRight {
  0% {
    left: 0;

    color: green;
    border: 3px dashed green;
  }
  100% {
    left: 100%;

    color: red;
    border: 3px dashed red;
  }
}
</style>
