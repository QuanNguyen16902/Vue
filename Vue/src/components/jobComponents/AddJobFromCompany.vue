<template>
  <div class="container">
    <div class="jumbotron">
      <Form
        @submit="saveJob()"
        :validation-schema="schema"
      >
        <div class="form-group">
          <label for="name">Job Name</label>
          <Field
            name="name"
            type="text"
            class="form-control"
            v-model="job.name"
          />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <Field
            name="address"
            type="text"
            class="form-control"
            v-model="job.address"
          />
          <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="level">Level</label>
          <Field
            name="level"
            type="text"
            class="form-control"
            v-model="job.level"
          />
          <ErrorMessage name="level" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="experience">Experience</label>
          <Field
            name="experience"
            type="text"
            class="form-control"
            v-model="job.experience"
          />
          <ErrorMessage name="experience" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="salary">Salary</label>
          <Field
            name="salary"
            type="text"
            class="form-control"
            v-model="job.salary"
          />
          <ErrorMessage name="salary" class="error-feedback" />
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import CompanyService from "@/services/company.service";
import JobService from "@/services/job.service"
// import axios from 'axios';
/* eslint-disable */
export default {
  name: "Createjob",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  
  data(){
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("job name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),

    });

    return {
      // selectedFile: null,
      // previewImage: null,
      job: {
        id: null,
        name: "",
        salary: "",
        level:"",
        experience: "",
        address:"",
        // companies: [],
      },
      currentCompany: null,
      message:"",
      schema,
    };
  },

  mounted(){
    this.getCompany(this.$route.params.id);
  },

  methods: {
    getCompany(id) {
      CompanyService.getCompany(id)
        .then((response) => {
          this.currentCompany = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
 
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
    saveJob() {
      var data = {
        id: this.job.id,
        name: this.job.name,
        salary: this.job.salary,
        level:this.job.level,
        experience: this.job.experience,
        address:this.job.address,
      };
        JobService.createJobFromCompany(this.currentCompany.companyId ,data)
        .then(response => {
            this.job.id = response.data.id;
            console.log(response,data);
            toast.success(
              "Add job successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
        })
      .catch((error) => {
        
              toast.error(
                // error.response.data.message,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
      })
 
           },

   
    newjob() {
      this.submitted = false;
      this.job = {};
    },
  
  },

};
</script>
  
<style>
@import "../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
@import "../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/app.min.css";
/* @import '../../assets/css/bootstrap-dark.min.css'; */
@import "../../assets/css/app-dark.min.css";
@import "../../assets/css/icons.min.css";
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