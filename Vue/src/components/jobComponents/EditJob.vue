<template>
  <div class="container">
    <header class="jumbotron">
      <div v-if="currentJob" class="edit-form">
        <h4>job</h4>
        <form @submit.prevent="updateJob()" :validation-schema="schema" enctype="multipart/form-data">
          <div v-if="!successful">
            <div class="form-group">
              <label for="name">Job Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="currentJob.name"
              />
              <!-- <ErrorMessage name="name" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="currentJob.address"
              />
              <!-- <ErrorMessage name="password" class="error-feedback" /> -->
            </div>

            <div class="form-group">
              <label for="level">Level</label>
              <input
                type="text"
                class="form-control"
                id="level"
                v-model="currentJob.level"
              />
              <!-- <ErrorMessage name="level" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="experience">Experience</label>
              <input
                type="text"
                class="form-control"
                id="experience"
                v-model="currentJob.experience"
              />
              <!-- <ErrorMessage name="level" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="salary">Salary</label>
              <input
                type="text"
                class="form-control"
                id="salary"
                v-model="currentJob.salary"
              />
            <button class="badge badge-danger mr-2" @click="deleteJob">
          Delete
        </button>

        <button type="submit" class="badge badge-success">Update</button>
          </div>

  </div>
      </form>
      </div>
    </header>
  </div>
</template>
  
 
  <script>
import JobService from "@/services/job.service"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import axios from "axios";
/* eslint-disable */
export default {
  name: "jobEdit",
  // data: () => ({
  //   formData: null,
  // }),
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
    });
    return {
      currentJob: null,
      successful: false,
      message: "",
      schema,
      
    };
  },
  methods: {
    getJob(id) {
      JobService.getJob(id)
        .then((response) => {
          this.currentJob = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },


    //    updatejob() {
    //     this.formData = new FormData();
    //         this.formData.append("name", this.currentJob.name)
    //         this.formData.append("address", this.currentJob.address)
    //         this.formData.append("level", this.currentJob.level)
    //         this.formData.append("experience", this.currentJob.experience)
    //         this.formData.append("salary", this.currentJob.salary)
    //   axios({
    //     url: `http://localhost:8080/api/test/job/${this.currentJob.jobId}`,
    //     method: 'PUT',
    //     data: this.formData ,
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type' : 'multipart/form-data'
    //     },
    //   }).then(response => {
    //     console.log(JSON.stringify(response.data))
    //     toast.success(
    //           "Update job successfully !",
    //           {
    //             position: toast.POSITION.BOTTOM_RIGHT,
    //           },
    //           { autoClose: 1000 }
    //         );
    //   }
    //   )
    // },
    updateJob() {
      this.message = "";
      this.successful = false;
      JobService.updateJob(this.currentJob.id, this.currentJob)
        .then((response) => {
          console.log(response.data);
          toast.success(
              "Update job successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
        })
        .catch((e) => {
          console.log(e);
        });
   
    },

    deleteJob() {
      JobService.deletejob(this.currentJob.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "job" }).then((response)=> { 
            // console.log(response);
            toast.success(
              "Delete job successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
          });
        
        })
        .catch((e) => {
          console.log(e);
        });
     
    },
  },
  mounted() {
    // this.message = "";
    this.getJob(this.$route.params.id);
  },
};
</script>