import {provideRouter, RouterConfig}  from '@angular/router'
import {PostsComponent} from './components/posts.component'

export const routes: RouterConfig = [
  {
    path: '',
    component: PostsComponent
  }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
