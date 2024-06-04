<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex" id="wrapper">
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div class="border-bottom bg-light logo text-center p-2">iMono</div>
      <div class="list-group list-group-flush">
        <RouterLink id="navLinkGettingStarted" class="list-group-item list-group-item-action list-group-item-light p-3"
          to="/" active-class="navLink-active" exact>
          Getting started
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/controllers"
          active-class="navLink-active">
          Controllers
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/views"
          active-class="navLink-active">
          Views
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/router"
          active-class="navLink-active">
          Router
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/configuration"
          active-class="navLink-active">
          Configuration
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/database"
          active-class="navLink-active">
          Database
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/cache"
          active-class="navLink-active">
          Cache
        </RouterLink>
      </div>
    </div>

    <div id="page-content-wrapper">
      <div class="container-fluid p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15rem;
  background-color: white;
  z-index: 1000;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#sidebar-wrapper .list-group-item {
  border-color: #ccc;
}

#sidebar-wrapper .navLink-active {
  background-color: #5e17eb;
  color: white;
}

#sidebar-wrapper .navLink-active:hover {
  background-color: #5515d4;
}

#page-content-wrapper {
  margin-left: 15rem;
  width: calc(100vw - 15rem);
  overflow-y: auto;
}

body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    margin-left: 15rem;
    width: calc(100vw - 15rem);
  }

  body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
