<template>
  Detail Book
  <div>isbn: {{isbn}}</div>
  <div>judul: {{judul}}</div>
  <div>id pengarang: {{author}}</div>
  <div>nama: {{nama}}</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isbn: null,
      judul: null,
      author: null,
      nama: null,
    }
  },
  mounted() {
    this.id = this.$route.params.isbn;
    axios.get(`http://localhost:3000/authors/${this.isbn}`)
    .then(res => {
      this.judul = res.data.judul;
      this.author = res.data.author;
      this.nama = res.data.nama;
    })
  }
}
</script>