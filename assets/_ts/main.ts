import 'reflect-metadata'
import 'zone.js/dist/zone'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http'
import {AppComponent} from './components/app.component'
import {APP_ROUTER_PROVIDERS} from './app.routes'

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
])
