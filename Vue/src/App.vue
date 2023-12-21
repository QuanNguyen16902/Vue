<template>
  
  <div id="app">
    
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">bezKoder</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>-->
    <!-- <li v-if="showCompanyBoard" class="nav-item">
      <router-link v-if="currentUser" to="/company" class="nav-link"
        >Company</router-link
      >
    </li> -->
    <!-- </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav> -->

    <!-- Begin page -->
    <div id="wrapper">
      <!-- Topbar Start -->
      <div class="navbar-custom">
        <div class="container-fluid">
          <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="d-none d-lg-block">
              <form class="app-search">
                <div class="app-search-box dropdown">
                  <div class="input-group">
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search..."
                      id="top-search"
                    />
                    <div class="input-group-append">
                      <button class="btn" type="submit">
                        <i class="fe-search"></i>
                      </button>
                    </div>
                  </div>
                  <div class="dropdown-menu dropdown-lg" id="search-dropdown">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                      <h5 class="text-overflow mb-2">Found 22 results</h5>
                    </div>

                    <!-- item-->
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item notify-item"
                    >
                      <i class="fe-home mr-1"></i>
                      <span>Analytics Report</span>
                    </a>

                    <!-- item-->
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item notify-item"
                    >
                      <i class="fe-aperture mr-1"></i>
                      <span>How can I help you?</span>
                    </a>

                    <!-- item-->
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item notify-item"
                    >
                      <i class="fe-settings mr-1"></i>
                      <span>User profile settings</span>
                    </a>

                    <!-- item-->
                    <div class="dropdown-header noti-title">
                      <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                    </div>

                    <div class="notification-list">
                      <!-- item-->
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item notify-item"
                      >
                        <div class="media">
                          <img
                            class="d-flex mr-2 rounded-circle"
                            src="assets/images/users/user-2.jpg"
                            alt="Generic placeholder image"
                            height="32"
                          />
                          <div class="media-body">
                            <h5 class="m-0 font-14">Erwin E. Brown</h5>
                            <span class="font-12 mb-0">UI Designer</span>
                          </div>
                        </div>
                      </a>

                      <!-- item-->
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item notify-item"
                      >
                        <div class="media">
                          <img
                            class="d-flex mr-2 rounded-circle"
                            src="assets/images/users/user-5.jpg"
                            alt="Generic placeholder image"
                            height="32"
                          />
                          <div class="media-body">
                            <h5 class="m-0 font-14">Jacob Deo</h5>
                            <span class="font-12 mb-0">Developer</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </li>

            <li class="dropdown d-inline-block d-lg-none">
              <a
                class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="fe-search noti-icon"></i>
              </a>
              <div class="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                <form class="p-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>

            <li class="dropdown d-none d-lg-inline-block">
              <a
                class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                data-toggle="fullscreen"
                href="#"
              >
                <i class="fe-maximize noti-icon"></i>
              </a>
            </li>

            <li class="dropdown notification-list topbar-dropdown">
              <a
                class="nav-link dropdown-toggle waves-effect waves-light"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="fe-bell noti-icon"></i>
                <span class="badge badge-danger rounded-circle noti-icon-badge"
                  >9</span
                >
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-lg">
                <!-- item-->
                <div class="dropdown-item noti-title">
                  <h5 class="m-0">
                    <span class="float-right">
                      <a href="" class="text-dark">
                        <small>Clear All</small>
                      </a> </span
                    >Notification
                  </h5>
                </div>

                <div class="noti-scroll" data-simplebar>
                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item active"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/user-1.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Cristina Pride</p>
                    <p class="text-muted mb-0 user-msg">
                      <small
                        >Hi, How are you? What about our next meeting</small
                      >
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-primary">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Caleb Flakelar commented on Admin
                      <small class="text-muted">1 min ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/user-4.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Karen Robinson</p>
                    <p class="text-muted mb-0 user-msg">
                      <small
                        >Wow ! this admin looks good and awesome design</small
                      >
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-warning">
                      <i class="mdi mdi-account-plus"></i>
                    </div>
                    <p class="notify-details">
                      New user registered.
                      <small class="text-muted">5 hours ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-info">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Caleb Flakelar commented on Admin
                      <small class="text-muted">4 days ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-secondary">
                      <i class="mdi mdi-heart"></i>
                    </div>
                    <p class="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small class="text-muted">13 days ago</small>
                    </p>
                  </a>
                </div>

                <!-- All-->
                <a
                  href="javascript:void(0);"
                  class="dropdown-item text-center text-primary notify-item notify-all"
                >
                  View all
                  <i class="fe-arrow-right"></i>
                </a>
              </div>
            </li>

            <li class="dropdown notification-list topbar-dropdown">
              <a
                class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users/user-1.jpg"
                  alt="user-image"
                  class="rounded-circle"
                />
                <span class="pro-user-name ml-1">
                  Geneva <i class="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                <!-- item-->
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome !</h6>
                </div>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-user"></i>
                  <span>My Account</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-settings"></i>
                  <span>Settings</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-lock"></i>
                  <span>Lock Screen</span>
                </a>

                <div class="dropdown-divider"></div>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-log-out"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>

          <!-- LOGO -->
          <div class="logo-box">
            <a href="index.html" class="logo logo-dark text-center">
              <span class="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
                <!-- <span class="logo-lg-text-light">UBold</span> -->
              </span>
              <span class="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height="20" />
                <!-- <span class="logo-lg-text-light">U</span> -->
              </span>
            </a>

            <a href="index.html" class="logo logo-light text-center">
              <span class="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="20" />
              </span>
            </a>
          </div>

          <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button class="button-menu-mobile waves-effect waves-light">
                <i class="fe-menu"></i>
              </button>
            </li>

            <li>
              <!-- Mobile menu toggle (Horizontal Layout)-->
              <a
                class="navbar-toggle nav-link"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <div class="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              <!-- End mobile menu toggle-->
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- end Topbar -->

      <!-- ========== Left Sidebar Start ========== -->
      <div class="left-side-menu">
        <div class="h-100" data-simplebar>
          <!-- User box -->
          <div class="user-box text-center">
            <img
              src="assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              class="rounded-circle avatar-md"
            />
            <div class="dropdown">
              <a
                href="javascript: void(0);"
                class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                data-toggle="dropdown"
                >Geneva Kennedy</a
              >
              <div class="dropdown-menu user-pro-dropdown">
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-user mr-1"></i>
                  <span>My Account</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-settings mr-1"></i>
                  <span>Settings</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-lock mr-1"></i>
                  <span>Lock Screen</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-log-out mr-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
            <p class="text-muted">Admin Head</p>
          </div>

          <!--- Sidemenu -->
          <div id="sidebar-menu">
            <ul id="side-menu">
              <li class="menu-title">Navigation</li>

              <li>
                <a href="#sidebarDashboards" data-toggle="collapse">
                  <i data-feather="airplay"></i>
                  <span class="badge badge-success badge-pill float-right"
                    >4</span
                  >
                  <span> Dashboards </span>
                </a>
              </li>

              <li class="menu-title mt-2">Apps</li>

              <li>
                <a href="/user">
                  <i data-feather="calendar"></i>
                  <span> Quản lý user </span>
                </a>
              </li>

              <li>
                <a href="/company">
                  <i data-feather="message-square"></i>
                  <span> Quản lý công ty </span>
                </a>
              </li>

              <li>
                <a href="/job">
                  <i data-feather="message-square"></i>
                  <span> Quản lý job </span>
                </a>
              </li>

              <li>
                <a href="#sidebarEcommerce" data-toggle="collapse">
                  <i data-feather="shopping-cart"></i>
                  <span> Ecommerce </span>
                  <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarEcommerce">
                  <ul class="nav-second-level">
                    <li>
                      <a href="ecommerce-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="ecommerce-products.html">Products</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <!-- End Sidebar -->

          <div class="clearfix"></div>
        </div>
        <!-- Sidebar -left -->
      </div>
      <!-- Left Sidebar End -->

      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="content-page">
        <div class="content">
          <!-- Start Content-->
          <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box">
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Quản lý user</a>
                      </li>
                      <li class="breadcrumb-item active">Danh sách user</li>
                    </ol>
                  </div>
                  <h4 class="page-title">Danh sách user</h4>
                </div>
              </div>
            </div>
            <!-- end page title -->

                        <router-view/>
                      <!-- <table class="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                    
                                </table> -->
            <!-- end row -->
          </div>
          <!-- container -->
        </div>
        <!-- content -->

        <!-- Footer Start -->
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                2015 - &copy; UBold theme by <a href="">Coderthemes</a>
              </div>
              <div class="col-md-6">
                <div class="text-md-right footer-links d-none d-sm-block">
                  <a href="javascript:void(0);">About Us</a>
                  <a href="javascript:void(0);">Help</a>
                  <a href="javascript:void(0);">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- end Footer -->
      </div>

      <!-- ============================================================== -->
      <!-- End Page content -->
      <!-- ============================================================== -->
    </div>
    <!-- END wrapper -->

    <!-- Right Sidebar -->
  

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>

    <!-- App js -->
   </div>
</template>
<style scope>
/* @import './assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
@import './assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/app.min.css';
/* @import './assets/css/bootstrap-dark.min.css'; */
/* @import './assets/css/app-dark.min.css'; */
/* @import './assets/css/icons.min.css'; */ 
 
 
</style>
<script>
import './assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import './assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/app.min.css';
/* @import './assets/css/bootstrap-dark.min.css'; */
/* @import './assets/css/app-dark.min.css'; */
import './assets/css/icons.min.css';

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
    showCompanyBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_USER");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>