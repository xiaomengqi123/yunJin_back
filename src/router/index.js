import Vue from 'vue'
import Router from 'vue-router'
import detailmsg from '../components/detailmsg/detailmsg'
import directorymsg from '../components/directorymsg/directorymsg'
import imagemsg from '../components/imagemsg/imagemsg'

Vue.use(Router)

/* eslint-disable */
export default new Router({
    routes: [{
            path: '/',
            name: '',
            component: directorymsg
        },
        {
            path: '/directorymsg',
            name: 'directorymsg',
            component: directorymsg
        },
        {
            path: '/detailmsg',
            name: 'detailmsg',
            component: detailmsg
        },
        {
            path: '/imagemsg',
            name: 'imagemsg',
            component: imagemsg
        }
    ]
})