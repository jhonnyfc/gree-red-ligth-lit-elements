import { Router } from '@vaadin/router'
import { View } from '../constants/view.js'

function initRouter() {
  const routeViewEl = this.shadowRoot.querySelector('#router-container')
  const router = new Router(routeViewEl, {
    baseUrl: '/'
  })

  router.setRoutes([
    {
      path: View.Home.id,
      component: View.Home.component
    },
    { path: View.Game.id, component: View.Game.component },
    { path: '(.*)', redirect: View.Home.id }
  ])

  return router
}

export const AppRouter = {
  initRouter
}
