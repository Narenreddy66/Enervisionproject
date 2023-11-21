 <template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between mt-2 sticky1">
      <!-- <div v-for="(product,index) in data" :key="index"> </div> -->
      <h5>Audit id:{{ $route.query.id }}</h5>
      <button
        @click="saveData(data)"
        class="btn-success text-white border-0 border"
      >
        <!-- v-for="(product, index) in filteredSection"
        :key="index" -->
        Save
      </button>
    </div>

    <ul
      class="nav nav-pills mb-3 gap-1 bg-light position-sticky z-3"
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
          Main LT Panel
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-home-tab1234"
          data-bs-toggle="pill"
          data-bs-target="#pills-home1234"
          type="button"
          role="tab"
          aria-controls="pills-home1234"
          aria-selected="true"
        >
          Electrical-bill
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
          UPS, Inverter& Batteries
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
          Bill cursor-pointer
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-home-tab1"
          data-bs-toggle="pill"
          data-bs-target="#pills-home1"
          type="button"
          role="tab"
          aria-controls="pills-home1"
          aria-selected="true"
        >
          StockRoom
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-profile-tab1"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile1"
          type="button"
          role="tab"
          aria-controls="pills-profile1"
          aria-selected="false"
        >
          Cashoffice
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-contact-tab1"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact1"
          type="button"
          role="tab"
          aria-controls="pills-contact1"
          aria-selected="false"
        >
          ShopArea
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-home-tab2"
          data-bs-toggle="pill"
          data-bs-target="#pills-home2"
          type="button"
          role="tab"
          aria-controls="pills-home2"
          aria-selected="true"
        >
          Fire alaram syestm
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-profile-tab2"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile2"
          type="button"
          role="tab"
          aria-controls="pills-profile2"
          aria-selected="false"
        >
          Staff Room
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-contact-tab2"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact2"
          type="button"
          role="tab"
          aria-controls="pills-contact2"
          aria-selected="false"
        >
          Electrical Room
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-home-tab3"
          data-bs-toggle="pill"
          data-bs-target="#pills-home3"
          type="button"
          role="tab"
          aria-controls="pills-home3"
          aria-selected="true"
        >
          Ac units
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-profile-tab3"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile3"
          type="button"
          role="tab"
          aria-controls="pills-profile3"
          aria-selected="false"
        >
          Smoke detectors
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link text-black border-bottom"
          id="pills-contact-tab3"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact3"
          type="button"
          role="tab"
          aria-controls="pills-contact3"
          aria-selected="false"
        >
          Fire Extinguishers
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
              <th class="text-nowrap" scope="col">Risk classfications</th>
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
                  type="text"
                  placeholder="Remarks"
                  v-model="product.remarks"
                />
              </td>
              <td>
                <select v-model="product.risk_classification">
                  <option value="red">Red</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="white">white</option>
                </select>
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
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
              <th class="text-nowrap" scope="col">Risk classfications</th>
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel1"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">
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
        id="pills-home1234"
        role="tabpanel"
        aria-labelledby="pills-home-tab1234"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in eleventabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal2"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel2"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">
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
              <th class="text-nowrap" scope="col">Risk classfications</th>
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal3"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel3"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel3">
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
        class="tab-pane fade show"
        id="pills-home1"
        role="tabpanel"
        aria-labelledby="pills-home-tab1"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in secondtabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
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
        id="pills-profile1"
        role="tabpanel"
        aria-labelledby="pills-profile-tab1"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in thirdtabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal5"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel5"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel5">
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
        id="pills-contact1"
        role="tabpanel"
        aria-labelledby="pills-contact-tab1"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in forthtabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal6"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel6"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel6">
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
        id="pills-home2"
        role="tabpanel"
        aria-labelledby="pills-home-tab2"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in fifthtabData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ product.observation }}</td>

              <td>{{ product.observation_type }}</td>
              <td>
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
              <td>
                <input type="text" placeholder="Remarks" />

                {{ product.remarks }}
              </td>
              <td>
                <select>
                  <option>Red</option>
                  <option>green</option>
                  <option>yellow</option>
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal7"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel7"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel7">
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
        id="pills-profile2"
        role="tabpanel"
        aria-labelledby="pills-profile-tab2"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in sixtabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal8"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal8"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel8"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel8">
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
        id="pills-contact2"
        role="tabpanel"
        aria-labelledby="pills-contact-tab2"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in seventabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal9"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal9"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel9"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel9">
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
        id="pills-home3"
        role="tabpanel"
        aria-labelledby="pills-home-tab3"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in eighttabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal99"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal99"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel99"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel99">
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
        id="pills-profile3"
        role="tabpanel"
        aria-labelledby="pills-profile-tab3"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in ninetabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal88"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal88"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel88"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel88">
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
        id="pills-contact3"
        role="tabpanel"
        aria-labelledby="pills-contact-tab3"
      >
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Observation</th>
              <th scope="col">Observation_type</th>
              <th scope="col">Result</th>
              <th scope="col">Remarks&Recomendations</th>
              <th class="text-nowrap" scope="col">Risk classfications</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in tentabData" :key="index">
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
                  <option>blue</option>
                  <option>white</option>
                </select>

                {{ product.risk_classification }}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-danger border-0 text-white text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal81"
                >
                  Upload image
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal81"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel81"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel81">
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
    </div>
  </div>

  <!-- <div>
    <p v-for="(product,index) in data " :key="index">{{ product }}</p>
  </div> -->
</template>
<style scoped>
.nav-pills .nav-link.active {
  background-color: transparent !important;
  color: grey !important;
  border-bottom: 3px solid rgb(216, 78, 85) !important;
  border-radius: 1px;
}
th {
  background-color: black;
  color: white;
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
      myData: [],
      firsttabData: [],
      tabData: [],
      secondtabData: [],
      thirdtabData: [],
      forthtabData: [],
      fifthtabData: [],
      sixtabData: [],
      seventabData: [],
      eighttabData: [],
      ninetabData: [],
      tentabData: [],
      eleventabData: [],
      savetabData: [],
      mainLtpanel: {},
      filteredSection: [],
      auditRecords: [],
      twentytabData: [],
      tabslist: {
        fetchData: "Main LT Panel",
        firstData: "UPS, Inverter& Batteries",
        secondData: "Electrical DB\u2019s ",
        thirdData: "Billing Counter",
        forthData: "Stock Room",
        fifthData: "Cash Office",
        sixthData: "Shop Area",
        seventhData: "Fire alarm System",
        eighthData: "Staff Room",
        ninethData: "Electrical Room",
        tenthData: "AC Units",
        elevenData: "Smoke Detectors",
        tweleData: "Fire Extinguishers",
      },
    };
  },
  mounted() {
    this.fetchData();
    this.firstData();
    this.secondData();
    this.thirdData();
    this.forthData();
    this.fifthData();
    this.sixthData();
    this.seventhData();
    this.eighthData();
    this.ninethData();
    this.tenthData();
    this.elevenData();
    this.tweleData();

    this.filteredSection = this.data;
  },
  methods: {
    //     addItem(){
    // this.saveData.push(this.mainLtpanel)
    //     },
    fetchData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Main LT Panel"]);
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
      queryParams.filters.push(["section", "=", "UPS, Inverter& Batteries"]);
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
      queryParams.filters.push(["section", "=", "Electrical DB\u2019s"]);
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
          this.eleventabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    thirdData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Billing Counter"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.thirdData);
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
    forthData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Stock Room"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.forthData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.secondtabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },

    fifthData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Cash Office"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.fifthData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.thirdtabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sixthData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Shop Area"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.sixthData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.forthtabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    seventhData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Fire alarm System"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.seventhData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.fifthtabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    eighthData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Staff Room"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.eighthData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.sixtabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    ninethData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Electrical Room"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.ninethData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.seventabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    tenthData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "AC Units"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.tenthData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.eighttabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    elevenData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Smoke Detectors"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.elevenData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.ninetabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    tweleData() {
      let queryParams = { filters: [] };
      queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
      queryParams.filters.push(["section", "=", "Fire Extinguishers"]);
      queryParams.filters = JSON.stringify(queryParams.filters);
      queryParams.fields = JSON.stringify(["*"]);
      console.log("name:", this.$route.query.id);
      console.log("tab name :" + this.tweleData);
      axios
        .get(
          "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&limit_page_length=*",
          {
            params: queryParams,
          }
        )
        .then((response) => {
          this.tentabData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveData() {
      const allData = [
        ...this.data,
        ...this.tabData,
        ...this.eleventabData,
        ...this.firsttabData,
        ...this.secondtabData,
        ...this.thirdtabData,
        ...this.forthtabData,
        ...this.fifthtabData,
        ...this.sixthtabData,
        ...this.eighttabData,
        ...this.ninetabData,
        ...this.tentabData,
      ];
      axios
        .post(
          "http://192.168.1.190:8002/api/method/ener_vision.ener_vision.doctype.audit_record.audit_record.update_observation_records&limit_page_length=*",
          allData
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      // console.log(data);
    },
  },
};
</script>
<!-- this.filteredSection = this.data.filter(
  (obj) => obj.name === e.product.section
); -->
