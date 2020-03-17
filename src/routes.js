import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Home from './components/Home.vue'

export default [
    { path: '/', component: Home },
    { path: '/list', component: PageContent },
    { path: '/add', component: AddItem }
]