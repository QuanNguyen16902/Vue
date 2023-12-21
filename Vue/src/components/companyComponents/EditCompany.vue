<template>
  <div class="container">
    <header class="jumbotron">
      <div v-if="currentCompany" class="edit-form">
        <h4>Company</h4>
        <form @submit.prevent="updateCompany()" :validation-schema="schema" enctype="multipart/form-data">
          <div v-if="!successful">
            <div class="form-group">
              <label for="Companyname">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="Companyname"
                v-model="currentCompany.companyName"
              />
              <!-- <ErrorMessage name="Companyname" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="currentCompany.address"
              />
              <!-- <ErrorMessage name="password" class="error-feedback" /> -->
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="currentCompany.email"
              />
              <!-- <ErrorMessage name="email" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                v-model="currentCompany.description"
              />
              <!-- <ErrorMessage name="email" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="currentCompany.phone"
              />
            <div class="form-group">
              <!-- <input
                type="file"
                class="form-control"
                id="phone"
                v-model="currentCompany.logo"
              /> -->
              <input v-model="currentCompany.logo" readonly/>
            <label for="file">Logo</label>
            <input name="file" type="file" accept="image/*" @change="onChange()" ref="uploadImage" required/>
              <!-- <ErrorMessage name="email" class="error-feedback" /> -->
            </div>
            <button class="badge badge-danger mr-2" @click="deleteCompany">
          Delete
        </button>

        <button type="submit" class="badge badge-success">Update</button>
          </div>

          <!-- <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div> -->

        <!-- <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->
  </div>
      </form>

        <!-- <p>{{ message }}</p> -->
        <!-- <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div> -->
      </div>
    </header>
  </div>
</template>
  
 
  <script>
import CompanyService from "../../services/company.service"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
/* eslint-disable */
export default {
  name: "CompanyEdit",
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
        .required("Companyname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
    });
    return {
      currentCompany: null,
      successful: false,
      message: "",
      schema,
      
    };
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

    //   updatePublished(status) {
    //     var data = {
    //       id: this.currentCompany.id,
    //       Companyname: this.currentCompany.Companyname,
    //       email: this.currentCompany.email,
    //       password: this.currentCompany.password,
    //     //   published: status
    //     };

    //     CompanyService.update(this.currentCompany.id, data)
    //       .then(response => {
    //         this.currentCompany.published = status;
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   },
    onChange() {
            // this.$emit('update:modelValue', event.target.files[0]);
            // this.selectedFile = event.target.files[0]
            let file = this.$refs.uploadImage.files[0]
            this.formData = new FormData();
            this.formData.append("file", file);
            this.formData.append("companyName", this.currentCompany.companyName)
            this.formData.append("address", this.currentCompany.address)
            this.formData.append("email", this.currentCompany.email)
            this.formData.append("description", this.currentCompany.description)
            this.formData.append("phone", this.currentCompany.phone)
        },
       updateCompany() {
      axios({
        url: `http://localhost:8080/api/test/company/${this.currentCompany.companyId}`,
        method: 'PUT',
        data: this.formData ,
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'multipart/form-data'
        },
      }).then(response => {
        console.log(JSON.stringify(response.data))
        toast.success(
              "Update company successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
      }
      )
    },
    // updateCompany() {
    //   // this.message = "";
    //   // this.successful = false;
    //   CompanyService.updateCompany(this.currentCompany.id, this.currentCompany)
    //     .then((response) => {
    //       console.log(response.data);
    //       toast.success(
    //           "Update Company successfully !",
    //           {
    //             position: toast.POSITION.BOTTOM_RIGHT,
    //           },
    //           { autoClose: 1000 }
    //         );
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
   
    // },

    deleteCompany() {
      CompanyService.deleteCompany(this.currentCompany.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "Company" }).then((response)=> { 
            // console.log(response);
            toast.success(
              "Delete Company successfully !",
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
    this.getCompany(this.$route.params.id);
  },
};
</script>