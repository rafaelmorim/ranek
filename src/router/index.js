import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Produto from "@/views/Produto";
import Login from "@/views/Login";
import Usuario from "@/views/Usuario/Usuario";
import UsuarioProdutos from "@/views/Usuario/UsuarioProdutos";
import UsuarioEditar from "@/views/Usuario/UsuarioEditar";
import UsuarioVendas from "@/views/Usuario/UsuarioVendas";
import UsuarioCompras from "@/views/Usuario/UsuarioCompras";
import PaginaNaoEncontrada from "@/views/PaginaNaoEncontrada";

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    component: PaginaNaoEncontrada
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/usuario",
    component: Usuario,
    meta: {
      login: true
    },
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      },
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.login)) {
    if(!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
