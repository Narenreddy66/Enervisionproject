import { createRouter,createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import CustomerPage from "./components/CustomerPage.vue";
import AuditPage from "./components/AuditPage.vue";

import ViewPage from "./components/ViewPage.vue";
import FormaPage from "./components/FormaPage.vue";
import  FirstPage from "./components/FirstPage.vue";


const routes= [
{
    path:"/",
    component:LoginPage
},
{
    path:"/customerpage",
    component:CustomerPage
},
{
    path:"/auditpage",
    component:AuditPage
},
{
    path:"/form-B",
    component:ViewPage
},
{
    path:"/form-A",
    component:FormaPage
},
{
    path:"/firstpage",
    component:FirstPage
},


];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;