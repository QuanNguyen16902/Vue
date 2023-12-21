<template>
  <div class="container">
    <div class="jumbotron">

      <Form @submit="saveCompany()"  :validation-schema="schema" enctype="multipart/form-data">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="companyName">Company Name</label>
            <Field name="companyName" type="text" class="form-control"  v-model="company.companyName"/>
            <ErrorMessage name="companyName" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <Field name="address" type="text" class="form-control" v-model="company.address" />
            <ErrorMessage name="address" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" v-model="company.email"/>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <Field name="description" type="description" class="form-control" v-model="company.description" />
            <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <Field name="phone" type="phone" class="form-control" v-model="company.phone"/>
            <ErrorMessage name="phone" class="error-feedback" />
          </div>
          <div class="form-group">
            <input type="hidden" v-model="company.logo"/>
            <label for="file">Logo</label>
            <input name="file" type="file" accept="image/*" @input="pickFile" @change="onChange" ref="uploadImage" required/>
            
            <!-- <input id="file" ref="fileInput" class="form-control" name="file" type="file" @input="pickFile" required/> -->
            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
            <!-- <button @click="submitFile">Upload!</button> -->
            <ErrorMessage name="logo" class="error-feedback" />
          </div>
    
          <button type="submit" class="btn btn-success">Submit</button>
          <!-- <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Submit
            </button>
          </div> -->
        </div>
        <div v-else>
            <h4>You add company successfully!</h4>
            <button class="btn btn-success" @click="newCompany">Add</button>
       </div>
      </Form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import CompanyService from "@/services/company.service";
import axios from 'axios';
/* eslint-disable */
export default {
  name: "CreateCompany",
  data: () => ({
    formData: null,
  }),
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  
  data() {
    const schema = yup.object().shape({
      companyName: yup
        .string()
        .required("Company name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      //   password: yup
      //     .string()
      //     .required("Password is required!")
      //     .min(6, "Must be at least 6 characters!")
      //     .max(40, "Must be maximum 40 characters!"),
    });

    return {
      selectedFile: null,
      previewImage: null,
      company: {
        companyId: null,
        companyName: "",
        description: "",
        address: "",
        email:"",
        description: "",
        phone:"",
      },
      message:"",
      schema,
    };
  },
  // props: ['modelValue'],
  methods: {
    // selectImage () {
    //       this.$refs.fileInput.click()
    //   },
      pickFile () {
        let input = this.$refs.uploadImage;
        let file = input.files
    
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
    onChange() {
            // this.$emit('update:modelValue', event.target.files[0]);
            // this.selectedFile = event.target.files[0]
            let file = this.$refs.uploadImage.files[0]
            this.formData = new FormData();
            this.formData.append("file", file);
            this.formData.append("companyName", this.company.companyName)
            this.formData.append("address", this.company.address)
            this.formData.append("email", this.company.email)
            this.formData.append("description", this.company.description)
            this.formData.append("phone", this.company.phone)
        },
    // uploadFile(event) {
    //     this.logo = event.target.files[0];
    //   },


    saveCompany() {
      axios({
        url: 'http://localhost:8080/api/test/company/add',
        method: 'POST',
        data: this.formData ,
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'multipart/form-data'
        },
      }).then(response => {
        console.log(JSON.stringify(response.data))
        toast.success(
              "Add company successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
      }
      ).catch((error) => {
        // this.message = error.response.data.message
              // (error.response &&
              //   error.response.data &&
              //   error.response.data.message) ||
              // error.message 
              // ||
              // error.toString();
        
              toast.error(
                error.response.data.message,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
      })
 
           },
          // this.$router.push({path: '/company'})
      // var formData = {
      //   companyId: this.company.companyId,
      //   companyName: this.company.companyName,
      //   address: this.company.address,
      //   email: this.company.email,
      //   description: this.company.description,
      //   phone: this.company.phone,
      // };
      // formData = new FormData();
      // formData.append('file', file);
      // formData.append('data', data);
      // CompanyService.createCompany(formData)
      //   .then((response) => {  
        
      //     this.company.companyId = response.data.companyId;
      //     console.log(response, data);
      //     this.submitted = true;
      //   })
      //   .catch((error) => {
      //     // this.errors.push(error);
      //     console.log(error);
      //     // this.errors.error_serve = error.response.data.errors;
      //   });
   
    newCompany() {
      this.submitted = false;
      this.company = {};
    },
  
  },

};
</script>
  
<style>
@import '../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
@import '../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/css/app.min.css';
/* @import '../../assets/css/bootstrap-dark.min.css'; */
@import '../../assets/css/app-dark.min.css';
@import '../../assets/css/icons.min.css';
  .imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
.error-feedback {
  color: red;
}
</style>