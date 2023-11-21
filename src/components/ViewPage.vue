<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between mt-1 sticky1">
      <h5>Audit id:{{ $route.query.id }}</h5>
      <button @click="saveData()" class="btn-danger text-white border-0 border">
        Save
      </button> 
    </div>
    <div>
      <ul
        class="nav nav-pills mb-3 gap-3 position-sticky bg-white z-3"
        style="top: 5%"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active text-black border-bottom"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Installation in MeterRoom
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-black border-bottom"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Installation in the Electrical shaft at floorwise
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-black border-bottom"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Installation within the flat
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Observation</th>
                <th scope="col">Observation_type</th>
                <th scope="col">Result</th>
                <th scope="col">Remarks&Recomendations</th>
                <th class="text-nowrap" scope="col">
                  Risks and Clasifications
                </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in data" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.observation }}</td>

                <td>{{ product.observation_type }}</td>

                <td v-if="product.observation_type !== 'Text Type'">
                  <select class="w-100" v-model="product.result_type">
                    <option>Select</option>
                    <option
                      v-for="(option, index) in product.observation_type.split(
                        '/'
                      )"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </select>
                </td>
                <td v-if="product.observation_type == 'Text Type'">
                  <input type="text" />
                </td>
                <td>
                  <input
                    v-model="product.remarks"
                    type="text"
                    placeholder="Remarks"
                  />
                </td>
                <td>
                  <select v-model="product.risk_classification">
                    <option>Select</option>
                    <option>Red</option>
                    <option>green</option>
                    <option>yellow</option>
                    <option>orange</option>
                  </select>
                </td>
                <td>
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-danger border-0 text-white text-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                  >
                    Upload image
                  </button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal4"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel4"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel4">
                            Upload Image
                          </h5>
                          <button
                            type="button "
                            class="close border-0 bg-black text-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form action="/action_page.php">
                            <label for="myFile">Select Image:</label>
                            <input
                              class="ps-2"
                              type="file"
                              id="myFile"
                              name="filename"
                            /><br />
                            <div class="d-flex justify-content-center">
                              <input
                                type="submit"
                                class="mt-3 bg-danger border-0 text-white"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Observation</th>
                <th scope="col">Observation_type</th>
                <th scope="col">Result</th>
                <th scope="col">Remarks&Recomendations</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in tabData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.observation }}</td>

                <td>{{ product.observation_type }}</td>

                <td v-if="product.observation_type !== 'Text Type'">
                  <select class="w-100">
                    <option></option>
                    <option
                      v-for="(option, index) in product.observation_type.split(
                        '/'
                      )"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </select>
                </td>
                <td v-if="product.observation_type == 'Text Type'">
                  <input type="text" />
                </td>
                <td>
                  <input type="text" placeholder="Remarks" />

                  {{ product.remarks }}
                </td>
                <td>
                  <select>
                    <option>Red</option>
                    <option>green</option>
                    <option>yellow</option>
                    <option>orange</option>
                  </select>

                  {{ product.risk_classification }}
                </td>
                <td>
                  <button
                    class="btn btn-success border-0 text-white text-nowrap"
                  >
                    Upload image
                  </button>

                  {{}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Observation</th>
                <th scope="col">Observation_type</th>
                <th scope="col">Result</th>
                <th scope="col">Remarks&Recomendations</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in firsttabData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.observation }}</td>

                <td>{{ product.observation_type }}</td>
                <td v-if="product.observation_type !== 'Text Type'">
                  <select class="w-100">
                    <option
                      v-for="(option, index) in product.observation_type.split(
                        '/'
                      )"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </select>
                </td>
                <td v-if="product.observation_type == 'Text Type'">
                  <input type="text" />
                </td>
                <td>
                  <input type="text" placeholder="Remarks" />

                  {{ product.remarks }}
                </td>
                <td>
                  <select>
                    <option>Red</option>
                    <option>green</option>
                    <option>yellow</option>
                    <option>orange</option>
                  </select>

                  {{ product.risk_classification }}
                </td>
                <td>
                  <button
                    class="btn btn-success border-0 text-white text-nowrap"
                  >
                    Upload image
                  </button>

                  {{}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.border-bottom {
  border-bottom: 1px solid red;
}
.nav-pills .nav-link.active {
  background-color: transparent !important;
  color: grey !important;
  border-bottom: 4px solid rgb(216, 78, 85) !important;
  border-radius: 1px;
}
.sticky1 {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      tabData: [],
      firsttabData: [],
      formData: {},
      tabslist: {
        fetchData: "Installation In Meter Room",
        firstData: "Installation In The Electrical Shaft At Floor Wise",
        secondData: "Installation Within the Flat ",
      },
    };
  },
  mounted() {
    this.fetchData();
    this.firstData();
    this.secondData();
  },
  methods: {
    fetchData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Installation In Meter Room"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.fetchData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.data = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    firstData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push([
        "section",
        "=",
        "Installation In The Electrical Shaft At Floor Wise",
      ]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.firstData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.tabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    secondData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push([
        "section",
        "=",
        "Installation Within the Flat",
      ]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.secondData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.firsttabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveData() {
      const allData = [...this.data, ...this.tabData, ...this.firsttabData];
      axios
        .put(
          "http://192.168.1.190:8002/api/method/ener_vision.ener_vision.doctype.audit_record.audit_record.update_observation_records",
          allData
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });

      // console.log(data)
    },
  },
};
</script>
