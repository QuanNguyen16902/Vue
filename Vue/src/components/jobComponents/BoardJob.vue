<template>
  <div class="container">
    <!-- <a class="btn btn-danger" :href="'/job/add'">Add</a> -->
    <button class="btn btn-danger" @click.prevent="this.$router.push({path: '/job/add'})">Add</button>
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

    <!-- </div> -->
    <div id="user-list">
      <table class="table table-striped hover">
        <thead>
          <tr>
            <th>Job Name</th>
            <th>Address</th>
            <th>Level</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" v-bind:key="job.id">
            <td>{{ job.name }}</td>
            <td>{{ job.address }}</td>
            <td>{{ job.level }}</td>
            <td>{{ job.experience }}</td>
            <td>${{ job.salary }}</td>
 
            <td>
              <a href="javascript:void(0);" class="action-icon" @click.prevent="this.$router.push({path:`/job/${job.id}`})">
                <i class="mdi mdi-square-edit-outline"></i
              ></a>
              <a
                href="javascript:void(0);"
                class="action-icon"
                v-on:click="deletejob(job.id)"
              >
                <i class="mdi mdi-delete"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
import JobService from "@/services/job.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
export default {
  name: "job",
  data() {
    return {
      // content: "",
      jobs: [],
      currentJob: null,
      currentIndex: -1,
      searchUsername: "",

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },

  methods: {
    addjob() {
      this.$router.push({ path: "/job/add" });
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
    retrievejob() {
      JobService.getBoardJob()
        .then((response) => {
          this.jobs = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletejob(id) {
      if (confirm("Bạn có muốn xóa job này?")) {
        JobService.deletejob(id)
          .then((response) => {
            console.log(response.data);
            this.jobs = this.jobs.filter((t) => t.id !== id);
            this.retrievejob();

            // toast.success("Delete successfully !",{autoClose: 1000}, {position: toast.POSITION.BOTTOM_CENTER});
            toast.success(
              "Delete successfully !",
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
    this.retrievejob();
  },
};
</script>