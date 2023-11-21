<template>
  <div class="color">
    <!-- <button class="btn btn-bg text-danger" style="font-size: 30px;">ENER VISION</button> -->

    <div class="content">
      <h1 class="text" style="font-size: 80px">WELCOME TO ENER VISION</h1>
    </div>
    <div class="color1">
      <div class="container">
        <div class="d-flex justify-content-around">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/02/14/07/27/center-2064919_1280.jpg"
              alt="Card image cap"
            />
            <div @click="Customerview() " class="card-body">
              <p  class="card-text">
                <span class="text-danger fs-3 d-flex justify-content-center"
                  >
                  Customer Data
                </span>
              </p>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.webp?b=1&s=170667a&w=0&k=20&c=L6xi5VJG0gr3a40-i35k8XWcmglc5hlgYP-lSqdEd9s="
            />
            <div class="card-body">
              <p class="card-text">
                <span class="text-danger fs-3 d-flex justify-content-center"
                  ><router-link
                    class="text-danger text-decoration"
                    to="/auditpage"
                    >Audit Data</router-link
                  >
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
return{

}
    },
    methods:{
Customerview(id){
this.$router.push({
    path:'/customerpage',
    query:{
        id:id,
        name:'firstpage/customerpage'
    }
})


}
    }

}


</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  text-align: center;
  height: 50vh;
  justify-content: center;
  color: red;
  overflow: hidden;
  width: 100%; /* Adjust this as needed */
  position: relative;
  white-space: nowrap;
}
.text-decoration {
  text-decoration-line: none !important;
}
.color {
  background-image: linear-gradient(
    to right top,
    #151113,
    #383437,
    #5d5a5f,
    #85838a,
    #afafb8,
    #b0b0b8,
    #b2b0b9,
    #b3b1b9,
    #8b868b,
    #635e61,
    #3c393a,
    #191818
  );
}
.card {
  transition: all 0.3s;
  box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.1);
}
.card:hover {
  transform: translateX(20px);
}
.btn-bg {
  background-image: linear-gradient(
    to right top,
    #151113,
    #383437,
    #5d5a5f,
    #85838a,
    #afafb8,
    #b0b0b8,
    #b2b0b9,
    #b3b1b9,
    #8b868b,
    #635e61,
    #3c393a,
    #191818
  );
}
.text {
  position: absolute;
  left: 0;
  animation: moveRight 5s linear infinite alternate;
}

@keyframes moveRight {
  0% {
    left: 0;
    color: orange;
  }
  50% {
    left: 50%;
    color: green;
  }
  100% {
    left: 100%;
    color: red;
  }
}
</style>

