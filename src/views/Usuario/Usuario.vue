<template>
  <section class="usuario">
    <nav class="sidnav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }"
            >Editar usuário</router-link
          >
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "UsuarioPagina",
  methods: {
    deslogar() {
      console.log(this.$router);
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    },
  },
  created() {
    document.title = "Usuário";
  },
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}

.sidnav a,
.sidnav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidnav a.router-link-exact-active,
.sidnav a:hover,
.sidnav button:hover {
  background: #87f;
  color: #fff;
}

.sidnav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}
</style>
