

<template>
  <div class="container">
    <!-- <a class="btn btn-danger" :href="'/user/add'">Add</a> -->
    <button class="btn btn-danger" @click.prevent="addUser">Add</button>
    <br />
    <!-- <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="searchUsername"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="page = 1; "
          >
            Search
          </button>
        </div>
      </div>

    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <b-pagination
       v-model="page"
        :total-rows="count"
        :per-page="pageSize"
         prev-text="Prev"
        next-text="Next"  
        :on-page-click="handlePageChange(page)"
      ></b-pagination> -->

    <!-- end row -->
    <!-- </div> -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-centered table-striped dt-responsive nowrap w-100"
                id="products-datatable"
              >
                <thead>
                  <tr>
                    <th>Avatar</th> 
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th style="width: 75px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" v-bind:key="user.id">
                    <td>
                      <img
                        style="border-radius: 30px"
                        :src="
                          require(`@/assets/images_user/${user.id}/${user.avatar}`)
                        "
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                    </td>
                    <td class="table-user text-body font-weight-semibold">
                      {{ user.username }}
                    </td>
                    <td class="table-user text-body">{{ user.email }}</td>
                    <td class="table-user text-body">{{ user.password }}</td>

                    <td>
                      <a
                        href="javascript:void(0);"
                        class="action-icon"
                        @click.prevent="
                          this.$router.push({ path: `/user/${user.id}` })
                        "
                      >
                        <i class="mdi mdi-square-edit-outline"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="action-icon"
                        v-on:click="deleteUser(user.id)"
                      >
                        <i class="mdi mdi-delete"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
export default {
  name: "User",
  data() {
    return {
      // content: "",
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchUsername: "",

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    addUser() {
      this.$router.push({ path: "/user/add" });
    },
    getRequestParams(searchUsername, page, pageSize) {
      let params = {};

      if (searchUsername) {
        params["username"] = searchUsername;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    handlePageChange(value) {
      this.page = value;
      this.retrieveUser();
    },

    handlePageSizeChange(value) {
      this.pageSize = value;
      this.page = 1;
      this.retrieveUser();
    },

    refreshList() {
      this.retrieveUser();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    removeAllUser() {
      UserService.deleteAllUser()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrieveUser() {
      UserService.getUserBoard()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteUser(id) {
      if (confirm("Bạn có muốn xóa user này?")) {
        UserService.deleteUser(id)
          .then((response) => {
            console.log(response.data);
            this.users = this.users.filter((t) => t.id !== id);
            toast.success(
              "Delete user successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },

  mounted() {
    this.retrieveUser();
  },
};
</script>