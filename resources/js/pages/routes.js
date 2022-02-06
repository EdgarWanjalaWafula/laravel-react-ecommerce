import {lazy} from 'react'

// Import pages 
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'

const routes = [
    {
        path:'/',
        exact: true, 
        component:Home
    }, 
    {
        path:'/page/shop',
        exact: true, 
        component: Shop
    }, 
    {
        path:'/page/contact',
        exact: true, 
        component:Contact
    }, 
    {
        path:'*',
        exact: true, 
        component:Contact
    }, 
]

export default routes