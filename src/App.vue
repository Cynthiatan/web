<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" style="padding-left: 20%" href="#"
          ><RouterLink to="/">Cynthia</RouterLink></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-evenly"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/author">Authors</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/book">Books</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "./index.css";
</style>
