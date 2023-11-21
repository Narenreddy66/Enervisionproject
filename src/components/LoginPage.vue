<template>
  
    <div class="container-fluid bg-color">
      <div class=" ">
        
         
            <img
              src="https://www.genergy.vision/wp-content/uploads/2015/08/energy-vision_logo.png"
              class=" w-75 ms-2"
            />
          </div>
         <div>
          <form class="form-inf ">
              <div class="form-outline w-100">
                <h4 class="text-white "><router-link  class="text-decoration1 "  to="/firstpage">Welcome to Ener vision</router-link></h4>
                <p class="text-white">Signin using your valid credentilas</p>
                <label class="text-white" for="exampleInputEmail1"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control  "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"  v-model="formData.userEmail" v-on:input="newfunction" :class="{ 'is-invalid': errors.userEmail }"
                />
                <div class="error text-danger " v-if="errors.userEmail">{{ errors.userEmail }}</div>
              </div>
              <div class="form-group">
                <label class="text-white" for="exampleInputPassword1"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password" v-model="formData.userPassword" v-on:input="oldfuction" :class="{'is-invalid ':errors.userPassword}"
                />
                <div class="error text-danger " v-if="errors.userPassword">{{ errors.userPassword }}</div>  
              </div>

              <button @click="Viewfirstpage(loginpage)" type="submit" :disabled="!formData.userEmail || !formData.userPassword"  class="btn btn-danger w-100 mt-4">
                <!-- <router-link class="link" to="/firstpage"
                  >SignIn</router-link -->
                  SignIn
                
              </button>
            </form>
         </div>
          
          </div>
        
</template>
<style scoped>
.bg-color {
  background-image: linear-gradient(to right top, #000000, #050304, #0a0508, #0e080c, #110b10, #171115, #1c1519, #22191d, #2c2022, #362827, #3f312c, #473a31);
  height: 100vh;
 
  display: flex;
justify-content: center;
  align-items: center;
}
.form-inf{
  border: 1px solid white;
    padding: 20px 20px 20px 20px;
    border-radius: 10px;
    width: 70vh;
    box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.1);

}
.link {
  text-decoration-line: none;
  color: white;
}
.text-decoration1{
  text-decoration-line: none !important;
  color: white !important;
}
.text {
    position: absolute;
    left: 0;
    animation: moveRight 5s linear infinite ;
}
@media (min-width: 468px) and (max-width: 699px){
.form-inf{
  width: 50vh;
}
}

@keyframes moveRight {
    0% {
        left: 0;
        color:orange;
        /* background-color: orange; */
        border-radius: 10px;
    }
    50%{
        color: green;
        /* background-color: lightgreen; */
        border-radius: 10px;
    }
    100% {
        left: 80%;
        color: red;
        /* background-color: lightpink; */
        border-radius: 10px;
    }
}
</style>
<script>
export default{
    data(){
        return{
            formData:{
                userEmail:null,
            userPassword:null
            },
            errors:{
                userEmail:"",
                userPassword:""
            },
            
             items:[

              ],
             
        }
    },
    computed: {
 hasErrors() {
 return Object.keys(this.errors).length > 0;
 },
 },
    methods:{
newfunction(){
    if (!this.formData.userEmail) {
      this.errors.userEmail = 'Email is required';
    }else if(!this.formData.userEmail.includes("@gmail.com")){
        this.errors.userEmail='email format is not correct';
    }
    else {
 delete this.errors.userEmail;
 }
    
    
},
oldfuction(){
    if (!this.formData.userPassword) {
      this.errors.userPassword = 'Password is required';
    } else if (this.formData.userPassword.length < 8) {
      this.errors.userPassword = 'Password must be at least 8 characters';
    }else{
        delete this.errors.userPassword;
    }
   
},
Viewfirstpage(id){
  this.$router.push({
    path:'/firstpage',
    query:{
      id:id,
      name:''
    }
  })

},
 submitForm() {
 // Check for errors before submitting
 if (this.hasErrors) {
 alert("Please fix the form errors.");
 return;
 }
 // Form data is valid, submit it
 alert("Form submitted successfully!");

 let user={
        email:this.formData.userEmail,
        Password:this.formData.userPassword
    }
    this.items=[user]
    
    }
   
    // this.details=[user]
}
    }

</script> 