<template  :style="import('@/assets/css/bootstrap.min.css'),
import('@/assets/css/app.min.css')
,import('@/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css')
,import('@/assets/css/icons.min.css')
,import('@/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css')">
  <div v-if="currentCompany" class="edit-form">
    <div class="row">
      <div class="col-lg-4">
        <div class="card-box">
          <div class="media mb-3">
            <img
              style="border-radius: 30px"
              class="d-flex mr-3 rounded-circle avatar-lg"
              :src="
                require(`@/assets/images_company/${currentCompany.companyId}/${currentCompany.logo}`)
              "
              alt="avatar"
              width="40"
              height="40"
            />
            <div class="media-body">
              <h4 class="mt-0 mb-1">{{ currentCompany.companyName }}</h4>
              <p class="text-muted">
                Địa Điểm Làm Việc: {{ currentCompany.address }}
              </p>

              <a href="javascript: void(0);" class="btn- btn-xs btn-info">{{
                currentCompany.email
              }}</a>
              <a
                href="javascript: void(0);"
                class="btn- btn-xs btn-secondary"
                >{{ currentCompany.phone }}</a
              >
              <a href="javascript: void(0);" class="btn- btn-xs btn-danger"
                >Block</a
              >
            </div>
          </div>

          <h5 class="mb-3 mt-4 text-uppercase bg-light p-2">
            <i class="mdi mdi-account-circle mr-1"></i> Thông tin công ty
          </h5>
          <div class="">
            <h4 class="font-13 text-muted text-uppercase">About Me :</h4>
            <p class="mb-3">
              {{ currentCompany.description }}
            </p>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div
                    class="avatar-lg rounded-circle bg-soft-primary border-primary border"
                  >
                    <i class="fe-heart font-22 avatar-title text-primary"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="mt-1">
                      <span data-plugin="counterup">{{ this.jobs.length }}</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Jobs đang tuyển</p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->

          <div class="col-md-6 col-xl-6">
            <div class="widget-rounded-circle card-box">
              <div class="row">
                <div class="col-6">
                  <div
                    class="avatar-lg rounded-circle bg-soft-success border-success border"
                  >
                    <i
                      class="fe-dollar-sign font-22 avatar-title text-success"
                    ></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <h3 class="text-dark mt-1">
                      $<span data-plugin="counterup">120,000,000</span>
                    </h3>
                    <p class="text-muted mb-1 text-truncate">Số dư</p>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end widget-rounded-circle-->
          </div>
          <!-- end col-->
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-lg-8">
                <form class="form-inline">
                  <div class="form-group">
                    <label for="inputPassword2" class="sr-only">Search</label>
                    <input
                      type="search"
                      class="form-control"
                      id="inputPassword2"
                      placeholder="Search..."
                    />
                  </div>
                  <div class="form-group mx-sm-3">
                    <label for="status-select" class="mr-2">Trạng thái</label>
                    <select class="custom-select" id="status-select">
                      <option selected>----</option>
                      <option value="1">Hoạt động</option>
                      <option value="2">Tạm khóa</option>
                    </select>
                  </div>
                  <div class="text-lg-right mt-3 mt-lg-0">
                    <button class="btn btn-primary waves-effect waves-light">
                      <i class="mdi mdi-plus-circle mr-1"></i> Tìm kiếm
                    </button>
                  </div>
                  <div class="text-lg-right mt-3 mt-lg-0">
                    <a class="btn btn-danger waves-effect waves-light" @click="this.$router.push({path: `/company/${currentCompany.companyId}/job/add`})">
                      <i class="mdi mdi-plus-circle mr-1"></i> Thêm mới
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-centered table-nowrap table-hover mb-0">
                <thead>
                  <tr>
                    <th>Vị trí tuyển dụng</th>
                    <th>Mức lương</th>
                    <!-- <th>Ngày hết hạn</th> -->
                    <!-- <th>Trạng thái</th> -->
                    <th>Kinh nghiệm</th>
                    <th>Level</th>
                    <th>Địa chỉ</th>
                    <th style="width: 82px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="job in jobs" v-bind:key="job.id" >
                    <td>{{ job.name }}</td>
                    <td>${{ job.salary }}</td>
                    <td>{{ job.experience }}</td>
                    <td>{{ job.level }}</td>
                    <td>{{ job.address }}</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon" @click.prevent="this.$router.push({path:`/job/${job.id}`})">
                        <i class="mdi mdi-square-edit-outline"></i
                      ></a>
                      <a href="javascript:void(0);"  class="action-icon" v-on:click="deleteJob(job.id)">
                        <i class="mdi mdi-delete"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul
              class="pagination pagination-rounded justify-content-end mb-0 mt-2"
            >
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript: void(0);"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript: void(0);">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">5</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript: void(0);"
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
  </div>
</template>

<style scoped>
</style>
<script>
import "@/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "@/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/app.min.css";
// import '@/assets/css/bootstrap-dark.min.css'
// import '@/assets/css/app-dark.min.css'
import "@/assets/css/icons.min.css";
import CompanyService from "@/services/company.service";
import jobService from "@/services/job.service"
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      jobs: [],
      currentCompany: null,
      sum: 0,
      
    };
  },
  name: "profileCompany",
  methods: {

    deleteJob(id){
        if (confirm("Bạn có muốn xóa job này?")) {
        jobService.deleteJobFromCompany(this.currentCompany.companyId, id)
          .then((response) => {
            console.log(this.currentCompany.companyId);
            console.log(response.data);
            console.log(id);
            this.jobs = this.jobs.filter((t) => t.id !== id);

            toast.success(
              "Delete successfully !",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              },
              { autoClose: 1000 }
            );
          }).then( () =>
            this.retrievejob()
          )
          .catch((e) => {
            console.log(e);
            console.log(this.currentCompany.companyId);
            console.log(id);
          });
      }
    },
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

    getJobOfCompany(id) {
      CompanyService.getJobOfCompany(id).then((response) => {
        this.jobs = response.data;
        console.log(this.jobs.length);
      });
    },
  },
  mounted() {
    this.getCompany(this.$route.params.id);
    this.getJobOfCompany(this.$route.params.id);
  },
};
</script>