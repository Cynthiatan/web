<template>
  Detail Author
  <div>id: {{id}}</div>
  <div>nama: {{nama}}</div>
  <div>jenis kelamin: {{jk}}</div>
  <div>tahun lahir: {{tahunLahir}}</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: null,
      nama: null,
      jk: null,
      tahunLahir: null, 
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.get(`http://localhost:3000/authors/${this.id}`)
    .then(res => {
      this.nama = res.data.nama;
      this.jk = res.data.jk;
      this.tahunLahir = res.data.tahun_lahir;
    })
  }
}
</script>