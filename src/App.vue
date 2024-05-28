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
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/example1"
          active-class="navLink-active">
          Example 1
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/example2"
          active-class="navLink-active">
          Example 2
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/example3"
          active-class="navLink-active">
          Example 3
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/example4"
          active-class="navLink-active">
          Example 4
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action list-group-item-light p-3" to="/example5"
          active-class="navLink-active">
          Example 5
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
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
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
  min-width: 100vw;
}

body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
