  <template  :style="import('@/assets/css/bootstrap.min.css'),
import('@/assets/css/app.min.css')
,import('@/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css')
,import('@/assets/css/icons.min.css')
,import('@/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css')">
  <div class="container">
    <!-- <a class="btn btn-danger" :href="'/company/add'">Add</a> -->
    <button class="btn btn-danger" @click.prevent="addCompany">Add</button>
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
            <th>Company Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Logo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companies" v-bind:key="company.companyId">
            <td><a  class="text-body font-weight-semibold" @click.prevent="this.$router.push({path: `/company/profile/${company.companyId}`})">{{ company.companyName }}</a></td>
            <td>{{ company.address }}</td>
            <td>{{ company.email }}</td>
            <td>{{ company.phone }}</td>
            <td>
              <img style="border-radius:30px" :src="require(`@/assets/images_company/${company.companyId}/${company.logo}`)" alt="avatar" width="60" height="60">
            </td>
            <td>
              <a href="javascript:void(0);" class="action-icon" @click.prevent="this.$router.push({path:`/company/${company.companyId}`})">
                <i class="mdi mdi-square-edit-outline"></i
              ></a>
              <a
                href="javascript:void(0);"
                class="action-icon"
                v-on:click="deleteCompany(company.companyId)"
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
import CompanyService from "@/services/company.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
export default {
  name: "Company",
  data() {
    return {
      // content: "",
      companies: [],
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
    addCompany() {
      this.$router.push({ path: "/company/add" });
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
    retrieveCompany() {
      CompanyService.getCompanyBoard()
        .then((response) => {
          this.companies = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCompany(id) {
      if (confirm("Bạn có muốn xóa company này?")) {
        CompanyService.deleteCompany(id)
          .then((response) => {
            console.log(response.data);
            this.companies = this.companies.filter((t) => t.id !== id);
            this.retrieveCompany();

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
    this.retrieveCompany();
  },
};
</script>