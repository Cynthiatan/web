import { createRouter, createWebHistory } from 'vue-router'
import AuthorView from '@/views/AuthorView.vue'
import BookView from '@/views/BookView.vue'
import HomeView from '@/views/HomeView.vue'
import AuthorDetailView from "@/views/AuthorDetailView.vue"
import BookViewDetail from "@/views/BookViewDetail.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/author',
            name: 'author',
            component: AuthorView
        },
        {
            path: '/author/:id',
            name: 'author_detail',
            component: AuthorDetailView
        },
        {
            path: '/book',
            name: 'about',
            component: BookView
        },
        {
            path: '/book/:isbn',
            name: 'book_detail',
            component: BookViewDetail
        }
    ]
})

export default router