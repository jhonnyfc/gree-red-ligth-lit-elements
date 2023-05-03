import { Router } from '@vaadin/router'
import { PlayerHelper } from './playerHelper.js'
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
    {
      path: View.Game.id,
      component: View.Game.component, // eslint-disable-next-line
      action: (_context, commands) => {
        if (!PlayerHelper.getCurrentPlayer()) return commands.redirect('/')
      }
    },
    {
      path: View.Ranking.id,
      component: View.Ranking.component
    },
    { path: '(.*)', redirect: View.Home.id }
  ])

  return router
}

export const AppRouter = {
  initRouter
}
