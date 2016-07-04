import {Post} from '../post';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {DomSanitizationService} from '@angular/platform-browser'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  constructor (private http: Http, private sanitizer: DomSanitizationService) {
  }

  getPosts () {
    return this.http.get('http://api.wp-app.org/wp-json/wp/v2/posts')
      .toPromise()
      .then((response) => {
        const posts = response.json()
        for (const post of posts) {
          post.content.rendered = this.sanitizer.bypassSecurityTrustHtml(post.content.rendered)
        }
        return posts
      })
  }
}
