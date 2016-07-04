import {Component, Input} from '@angular/core'
import {Post} from '../post'

@Component({
  selector: 'wc-post',
  templateUrl: './assets/html/post.component.html',
  styleUrls: ['./assets/css/post.component.css']
})
export class PostComponent {
  @Input() post: Post
}
