<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/author">Authors</RouterLink>
        <RouterLink to="/book">Books</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
</style>
