<template>
  <div class="container">
    <header class="jumbotron">
      <Form @submit="saveUser()" :validation-schema="schema" enctype="multipart/form-data">
        <div v-if="!successful">
          <div class="form-group">
            <input v-model="user.avatar" type="hidden"/>
            <label for="file">Avatar</label>
            <input name="file" type="file" accept="image/*" @change="onChange" ref="uploadImage" required/>
            <ErrorMessage name="file" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <Field
              name="username"
              type="text"
              class="form-control"
              id="username"
              v-model="user.username"
            />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <Field
              name="email"
              type="email"
              class="form-control"
              id="email"
              v-model="user.email"
            />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field
              name="password"
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
            />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Submit
            </button>
          </div>
        </div>
      </Form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </header>
  </div>
</template>
<style>
@import "../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
@import "../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/app.min.css";
/* @import '../../assets/css/bootstrap-dark.min.css'; */
@import "../../assets/css/app-dark.min.css";
@import "../../assets/css/icons.min.css";
</style>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import userService from "../../services/user.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';
/* eslint-disable */
export default {
  name: "CreateUser",
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
    user: {
      id: null,
      username: "",
      email: "",
      password: "",
    },
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    addUser() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    retrieveUser() {
      userService.getUserBoard()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    onChange() {
            // this.$emit('update:modelValue', event.target.files[0]);
            // this.selectedFile = event.target.files[0]
            let file = this.$refs.uploadImage.files[0]
            this.formData = new FormData();
            this.formData.append("file", file);
            this.formData.append("username", this.user.username)
            this.formData.append("email", this.user.email)
            this.formData.append("password", this.user.password)
        },
    saveUser() {
      axios({
        url: 'http://localhost:8080/api/test/user/add',
        method: 'POST',
        data: this.formData ,
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'multipart/form-data'
        },
      }).then(response => {
        console.log(JSON.stringify(response.data))
        toast.success(
              "Add user successfully !",
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
                // error.response.message,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
      })
 
           },
      // var data = {
      //               username: this.user.username,
      //               email: this.user.email,
      //               password: this.user.password
      //           };
           
      // userService
      //   .createUser(data)
      //   .then((response) => {
      //     this.user.id = response.data.id;
      //     console.log(response, data);
      //     this.submitted = true;
      //     toast.success(
      //         "Add user successfully !",
      //         {
      //           position: toast.POSITION.BOTTOM_RIGHT,
      //         },
      //         { autoClose: 1000 }
      //       );
      //       // this.retrieveUser();
      //   })
      //   // .then(this.$router.push({path: '/user'}))
      //   .catch((error) => {
      //     // this.errors.push(error);
      //     console.log(error);
      //     // this.errors.error_serve = error.response.data.errors;
      //   });
      //        },
      // handleRegister(user) {
      // this.message = "";
      // this.successful = false;
      // this.loading = true;
          // let file = this.$refs.uploadImage.files[0]
          //   this.user = new FormData();
          //   this.user.append("avatar", file);
          //   this.user.append("companyName", this.user.username)
          //   this.user.append("email", this.user.email)
          //   this.user.append("password", this.user.password)
  //     this.$store.dispatch("auth/addUser", user).then(
  //         (data) => {
  //           this.message = data.message;
  //           this.successful = true;
  //           this.loading = false;
  //         },
  //         (error) => {
  //           this.message =
  //             (error.response &&
  //               error.response.data &&
  //               error.response.data.message) ||
  //             error.message ||
  //             error.toString();
  //           this.successful = false;
  //           this.loading = false;
  //         }
  //       );
 
  },
  
};
</script>
  

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>