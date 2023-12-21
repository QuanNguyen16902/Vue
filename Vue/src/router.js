import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const EditUser = () => import("./components/userComponents/EditUser.vue")
const AddUser = () => import("./components/userComponents/AddUser.vue")

const BoardCompany = () => import("./components/companyComponents/BoardCompany.vue")
const AddCompany = () => import("./components/companyComponents/AddCompany.vue")
const EditCompany = () => import("./components/companyComponents/EditCompany.vue")
const ProfileCompany = () => import("./components/companyComponents/ProfileCompany.vue")

const BoardJob = () => import("./components/jobComponents/BoardJob.vue")
const AddJob = () => import("./components/jobComponents/AddJob.vue")
const EditJob = () => import("./components/jobComponents/EditJob.vue")
const AddJobFromCompany = () => import("./components/jobComponents/AddJobFromCompany.vue")
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  {
    path: "/user/:id",
    name: "user-details",
    component: EditUser,
  },
  {
    path: "/user/add",
    name: "user-create",
    component: AddUser,
  },
  {
    path: "/company",
    name: "company",
    component: BoardCompany,
  },
  {
    path: "/company/add",
    name: "addCompany",
    component: AddCompany,
  },
  {
    path: "/company/:id",
    name: "editCompany",
    component: EditCompany,
  }
,
{
  path: "/company/profile/:id",
  name: "profileCompany",
  component: ProfileCompany,
},
{
  path: "/job",
  name: "boardJob",
  component: BoardJob,
}
,
{
  path: "/job/:id",
  name: "editJob",
  component: EditJob,
},

{
  path: "/job/add",
  name: "addJob",
  component: AddJob,
},
{
  path: "/company/:id/job/add",
  name: "addJobFromCompany",
  component: AddJobFromCompany,
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;