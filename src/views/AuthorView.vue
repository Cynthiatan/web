//191110554- Cynthia

<template>
    Halaman Authors
    <ul>
        <li v-for="item in daftar" v-bind:key="item.id">
        {{item.nama}}
        </li>
        
    </ul>
</template>

<script>
    import axios from 'axios'
    export default{
        data() {
            return {
                daftar:[
                    
                ]
            }
        },
        mounted(){
            axios.get('https://localhost:3000/authors')
            .then(res => {
                this.daftar = res.data
            })
        }
    }
</script>