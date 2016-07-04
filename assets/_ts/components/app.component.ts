import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {PostService} from '../services/post.service'
import {PostsComponent} from './posts.component'

@Component({
  selector: 'wc-app',
  templateUrl: './assets/html/app.component.html',
  styleUrls: ['./assets/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  precompile: [PostsComponent],
  providers: [
    PostService
  ]
})
export class AppComponent {
}
