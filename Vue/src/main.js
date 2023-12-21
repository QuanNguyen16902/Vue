import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "./assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/app.min.css";
import "./assets/css/icons.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'
 

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");