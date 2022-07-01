<template>
  Halaman Books
  <ul>
    <li v-for="item in daftar" v-bind:key="item.isbn">
      <router-link :to="'/book/'+item.isbn" >{{item.judul}}</router-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      daftar: [
        
      ]
    }
  },
  mounted() {
    axios.get('http://localhost:3000/books')
    .then(res => {
      this.daftar = res.data
    })
  }
}
</script>