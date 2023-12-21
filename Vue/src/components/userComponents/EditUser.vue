<template>
  <div class="container">
    <header class="jumbotron">
      <div v-if="currentUser" class="edit-form">
        <h4>User</h4>
        <form @submit.prevent="updateUser()" :validation-schema="schema">
          <div v-if="!successful">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="currentUser.username"
              />
              <!-- <ErrorMessage name="username" class="error-feedback" /> -->
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="text"
                class="form-control"
                id="password"
                v-model="currentUser.password"
              />
              <!-- <ErrorMessage name="password" class="error-feedback" /> -->
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="currentUser.email"
              />
              <!-- <ErrorMessage name="email" class="error-feedback" /> -->
            </div>
            <button class="badge badge-danger mr-2" @click="deleteUser">
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
import UserService from "../../services/user.service.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
export default {
  name: "userEdit",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      currentUser: null,
      successful: false,
      message: "",
      schema,
      
    };
  },
  methods: {
    getUser(id) {
      UserService.getUser(id)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    //   updatePublished(status) {
    //     var data = {
    //       id: this.currentUser.id,
    //       username: this.currentUser.username,
    //       email: this.currentUser.email,
    //       password: this.currentUser.password,
    //     //   published: status
    //     };

    //     UserService.update(this.currentUser.id, data)
    //       .then(response => {
    //         this.currentUser.published = status;
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   },

    updateUser() {
      // this.message = "";
      // this.successful = false;
      UserService.updateUser(this.currentUser.id, this.currentUser)
        .then((response) => {
          console.log(response.data);
          toast.success(
              "Update user successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
          // this.message = "User update successfully!";
          this.successful = true;
        })
        .catch((e) => {
          console.log(e);
          // this.successful = false;
        });
   
    },

    deleteUser() {
      UserService.deleteUser(this.currentUser.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "user" }).then((response)=> { 
            // console.log(response);
            toast.success(
              "Delete user successfully !",
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
    this.getUser(this.$route.params.id);
  },
};
</script>