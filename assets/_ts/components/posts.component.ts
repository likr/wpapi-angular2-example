import {Component, OnInit} from '@angular/core'
import {Post} from '../post'
import {PostService} from '../services/post.service'
import {PostComponent} from './post.component'

@Component({
  selector: 'wc-posts',
  templateUrl: './assets/html/posts.component.html',
  styleUrls: ['./assets/css/posts.component.css'],
  directives: [PostComponent]
})
export class PostsComponent implements OnInit {
  posts: Post[]

  constructor (private postService: PostService) {
  }

  ngOnInit () {
    this.postService.getPosts()
      .then((posts) => {
        this.posts = posts
      })
  }
}
